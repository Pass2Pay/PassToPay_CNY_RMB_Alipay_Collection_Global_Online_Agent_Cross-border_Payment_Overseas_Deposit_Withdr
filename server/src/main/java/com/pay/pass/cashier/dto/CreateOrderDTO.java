package com.pay.pass.cashier.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class CreateOrderDTO {

    private Integer code;
    private String msg;
    private String sign;
    private CreateDataDTO data;

    @NoArgsConstructor
    @Data
    public static class CreateDataDTO {
        @ApiModelProperty(value = "商户订单号")
        private String mchOrderNo;
        //
        @ApiModelProperty(value = "订单状态，0-订单生成, 1-支付中, 2-支付成功, 3-支付失败, 4-已撤销, 5-已退款, 6-订单关闭")
        private Integer orderState;
        @ApiModelProperty(value = "订单状态")
        private String payData;
        @ApiModelProperty(value = "订单状态")
        private String payDataType;
        @ApiModelProperty(value = "支付订单号")
        private String payOrderId;
    }


}
