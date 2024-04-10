package com.pay.pass.cashier.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class PayOrderWayDTO {
    private Integer code;
    private DataDTO data;
    private String msg;
    private String sign;
    @NoArgsConstructor
    @Data
    public static class DataDTO {
        @ApiModelProperty(value = "二维码")
        private String codeImgUrl;
        @ApiModelProperty(value = "商户订单号")
        private String mchOrderNo;
        @ApiModelProperty(value = "订单状态")
        private Integer orderState;
        @ApiModelProperty(value = "payData")
        private String payData;
        @ApiModelProperty(value = "payDataType")
        private String payDataType;
        @ApiModelProperty(value = "订单号")
        private String payOrderId;
    }

}
