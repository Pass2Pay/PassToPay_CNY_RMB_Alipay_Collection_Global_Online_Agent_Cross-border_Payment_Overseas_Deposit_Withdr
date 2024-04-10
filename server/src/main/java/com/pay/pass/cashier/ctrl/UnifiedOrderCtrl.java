package com.pay.pass.cashier.ctrl;

import cn.hutool.http.HttpUtil;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import com.pay.pass.cashier.config.CashierConfig;
import com.pay.pass.cashier.utils.Constant;
import com.pay.pass.cashier.dto.*;
import com.pay.pass.cashier.utils.PayKit;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * @Date: 2024/3/15 上午11:09
 * @Version: v1.0.0
 * @Description:
 **/
@Slf4j
@Api(tags = "收款接口")
@RestController
@RequestMapping("/api/pay/")
public class UnifiedOrderCtrl implements Constant {

    @Autowired
    private CashierConfig cashierConfig;

    private static Map<String,String> map = new HashMap<>();


    @ApiOperation(value = "查询支付订单",notes = "查询支付订单")
    @PostMapping("query")
    public ResponseDTO<QueryOrderDTO.DataDTO> query(@RequestParam("payOrderId")String payOrderId){
        QueryOrderDTO value = queryOrder(payOrderId);
        if (value.getCode() == 0){
            value.getData().setServiceTime(System.currentTimeMillis());
            return ResponseDTO.success(value.getData());
        } else {
            return ResponseDTO.fail(value.getCode().toString(),value.getMsg());
        }
    }



    private QueryOrderDTO queryOrder(String payOrderId){
        Map<String,Object> map = new HashMap<>();
        map.put("mchNo",cashierConfig.getMchNo());
        map.put("appId",cashierConfig.getAppId());
        map.put("payOrderId",payOrderId);
        map.put("version","1.0.0");
        map.put("signType","MD5");
        map.put("reqTime",new Date().getTime());

        String sign = PayKit.getSign(map,cashierConfig.getAppSecret());
        map.put("sign",sign);
        log.info("请求参数->{}", JSONUtil.toJsonStr(map));
        String result = HttpUtil.post(QUERY_URL,map);
        log.info("请求结果->{}",result);
        QueryOrderDTO value = JSONUtil.toBean(result, QueryOrderDTO.class);
        return value;
    }
    private PayOrderWayDTO queryPayUrl(QueryOrderDTO.DataDTO dto){
        PayOrderWayDTO value;
        String temp = map.get(dto.getPayOrderId());
        if (StringUtils.isEmpty(temp)){
            synchronized (dto.getPayOrderId().intern()){
                temp = map.get(dto.getPayOrderId());
                if (StringUtils.isEmpty(temp)){
                    Map<String,Object> map = new HashMap<>();
                    map.put("mchNo",cashierConfig.getMchNo());
                    map.put("appId",cashierConfig.getAppId());
                    map.put("wayCode",dto.getWayCode());
                    map.put("payDataType","codeImgUrl");
                    map.put("payOrderId",dto.getPayOrderId());
                    map.put("version","1.0.0");
                    map.put("signType","MD5");
                    map.put("reqTime",new Date().getTime());

                    String sign = PayKit.getSign(map,cashierConfig.getAppSecret());
                    map.put("sign",sign);
                    log.info("请求参数->{}", JSONUtil.toJsonStr(map));
                    String result = HttpUtil.post(QUERY_PAY_URL,map);
                    log.info("请求结果->{}",result);
                    value = JSONUtil.toBean(result, PayOrderWayDTO.class);
                    if (value.getCode() == 0){
                        map.put(dto.getPayOrderId(),result);
                    }
                } else {
                    value = JSONUtil.toBean(temp, PayOrderWayDTO.class);
                }
            }

        } else {
            value = JSONUtil.toBean(temp, PayOrderWayDTO.class);
        }

        return value;
    }

    @ApiOperation(value = "统一下单接口",notes = "统一下单接口")
    @PostMapping("unifiedOrder")
    public ResponseDTO<CreateOrderDTO.CreateDataDTO> unifiedOrder() {

        Map<String,Object> map = new HashMap<>();
        map.put("wayCode","ALI_QR");
        map.put("mchNo",cashierConfig.getMchNo());
        map.put("appId",cashierConfig.getAppId());
        map.put("amount",1);
        map.put("storeId",1);
        map.put("version","1.0.0");
        map.put("reqTime",new Date().getTime());
        map.put("mchOrderNo","M" + UUID.randomUUID().toString().replace("-",""));
        map.put("currency","CNY");
        map.put("userName","test name");
        map.put("notifyUrl","https://www.passtopay.com/api/anon/paytestNotify/payOrder");
        map.put("returnUrl","https://www.passtopay.com");
        //设置扩展参数 
        JSONObject extParams = new JSONObject();
        // codeImgUrl 返回二维码
        //extParams.put("payDataType","codeImgUrl");
        extParams.put("payDataType","payUrl");
        map.put("channelExtra",extParams);
        map.put("signType","MD5");

        map.put("divisionMode",0);
        map.put("body","接口调试[M1702966122商户联调]");
        map.put("subject","接口调试[M1702966122商户联调]");

        //{"wayCode":"ALI_QR","amount":0.01,"appId":"6581336a09b659f331471cea","storeId":1,"mchOrderNo":"M17104741393169682","payDataType":"codeImgUrl","authCode":"","divisionMode":0,"orderTitle":"接口调试","userName":"1","autoPosExtra":{}}
        String sign = PayKit.getSign(map,cashierConfig.getAppSecret());
        map.put("sign",sign);
        log.info("请求参数->{}", JSONUtil.toJsonStr(map));
        String result = HttpUtil.post(PAY_URL,map);
        log.info("请求结果->{}",result);
        CreateOrderDTO value = JSONUtil.toBean(result, CreateOrderDTO.class);
        if (value.getCode() != 0){
            return ResponseDTO.fail(value.getCode().toString(),value.getMsg());
        }
        return ResponseDTO.success(value.getData());
    }

}
