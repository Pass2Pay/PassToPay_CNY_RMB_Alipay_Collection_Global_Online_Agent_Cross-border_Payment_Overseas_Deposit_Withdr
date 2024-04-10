package com.pay.pass.cashier.utils;

public interface Constant {

    // api 基础路径
    String BASE_URL = "http://127.0.0.1:8888/";

    String PAY_URL = BASE_URL + "api/pay/unifiedOrder";
    String QUERY_URL = BASE_URL +  "api/pay/query";
    String QUERY_PAY_URL = BASE_URL +  "api/pay/convertPayway";


    String HTTP_OK = "200";
    String HTTP_OK_MSG = "请求成功";

}
