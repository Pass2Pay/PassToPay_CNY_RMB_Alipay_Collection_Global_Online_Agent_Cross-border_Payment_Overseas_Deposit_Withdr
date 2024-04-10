package com.pay.pass.cashier.ctrl;

import cn.hutool.json.JSONObject;
import com.pay.pass.cashier.bean.RequestKitBean;
import com.pay.pass.cashier.utils.PayKit;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Api(tags = "支付回调")
@RestController
@RequestMapping("/api/pay/notify/")
public class PayNotifyCtrl {

    @Autowired
    protected HttpServletRequest request;   //自动注入request

    @Autowired
    protected HttpServletResponse response;  //自动注入response

    @Autowired
    protected RequestKitBean requestKitBean;

    /** 获取json格式的请求参数 **/
    protected JSONObject getReqParamJSON(){
        return requestKitBean.getReqParamJSON();
    }

    private static final String KEY = "X38MaV75V82iwoC7LBcKLCuMHR5mKmE7s5bVh9eID27atGkiHzEXLzgBYxJFJPAkdL4LiLRdCeGYGHgFDg2iUVuJuQli0aW0Oo823gXOioDjMufFdnCrmZGayTvAAs7A";


    @ApiOperation(value = "支付回调接口",notes = "统一下单接口")
    @RequestMapping("/payOrder")
    public void payOrderNotify() throws IOException {
        //请求参数
        JSONObject params = getReqParamJSON();

        String mchNo = params.getStr("mchNo");
        String appId = params.getStr("appId");
        String sign = params.getStr("sign");

        params.remove("sign");
        if(!PayKit.getSign(params, KEY).equalsIgnoreCase(sign)){
            response.getWriter().print("sign fail");
            return;
        }

        JSONObject msg = new JSONObject();
        msg.put("state", params.getInt("state"));
        msg.put("errCode", params.getStr("errCode"));
        msg.put("errMsg", params.getStr("errMsg"));

        //推送到前端
       // WsPayOrderServer.sendMsgByOrderId(params.getString("payOrderId"), msg.toJSONString());

        response.getWriter().print("SUCCESS");
    }
}
