package com.pay.pass.cashier.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class QueryOrderDTO {

    private Integer code;
    private DataDTO data;
    private String msg;
    private String sign;

    @NoArgsConstructor
    @Data
    public static class DataDTO {
        @ApiModelProperty(value = "商户订单号")
        private String payOrderId;
        @ApiModelProperty(value = "商户订单号")
        private String mchOrderNo;
        @ApiModelProperty(value = "商户号")
        private String subject;
        @ApiModelProperty(value = "渠道单号")
        private String channelOrderNo;
        @ApiModelProperty(value = "商户号")
        private String body;
        @ApiModelProperty(value = "创建日期")
        private Long createdAt;
        @ApiModelProperty(value = "应用ID")
        private String appId;
        @ApiModelProperty(value = "币种")
        private String currency;
        @ApiModelProperty(value = "0-订单生成, 1-支付中, 2-支付成功, 3-支付失败, 4-已撤销, 5-已退款, 6-订单关闭")
        private Integer state;
        @ApiModelProperty(value = "商户号")
        private String mchNo;
        @ApiModelProperty(value = "金额")
        private Integer amount;
        @ApiModelProperty(value = "支付方式")
        private String wayCode;
        @ApiModelProperty(value = "客户端IP")
        private String clientIp;
        @ApiModelProperty(value = "支付时间")
        private Long serviceTime;
        //@ApiModelProperty(value = "过期时间")
        //private Long expiredTime;
        //@ApiModelProperty(value = "支付地址")
        //private String payData;


    }
}
