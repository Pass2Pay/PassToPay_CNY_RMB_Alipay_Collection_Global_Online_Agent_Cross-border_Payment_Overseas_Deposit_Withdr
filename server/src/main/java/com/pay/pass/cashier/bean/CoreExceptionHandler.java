package com.pay.pass.cashier.bean;


import com.pay.pass.cashier.dto.ResponseDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Date 2020/4/30 9:18 上午
 * @Description 异常拦截类
 */
@Slf4j
@ControllerAdvice
@ResponseBody
public class CoreExceptionHandler {

    @ExceptionHandler(value = Exception.class)
    public Object runtimeException(Exception exception) {
        log.error(exception.getMessage(),exception);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return ResponseDTO.fail("-1", "系统异常");
    }


}
