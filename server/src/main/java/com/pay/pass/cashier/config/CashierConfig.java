package com.pay.pass.cashier.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * @Date: 2024/3/15 上午11:35
 * @Version: v1.0.0
 * @Description: TODO
 **/
@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "cashier.core")
public class CashierConfig {

    private String mchNo;

    private String appId;

    private String appSecret;


}
