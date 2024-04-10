package com.pay.pass.cashier.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class OrderStatusDTO {

    @ApiModelProperty(value = "状态")
    private Integer state;
    @ApiModelProperty(value = "商户订单号")
    private String payOrderId;
    @ApiModelProperty(value = "商户订单号")
    private String mchOrderNo;
}
