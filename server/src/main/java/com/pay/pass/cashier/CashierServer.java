package com.pay.pass.cashier;


import com.github.xiaoymin.knife4j.spring.annotations.EnableKnife4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


@EnableSwagger2
@EnableKnife4j
@SpringBootApplication(scanBasePackages = {"com.pay.pass.cashier"})
@EnableAsync
public class CashierServer {

    public static void main(String[] args) {
        SpringApplication.run(CashierServer.class, args);
    }

}
