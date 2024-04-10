package com.pay.pass.cashier.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pay.pass.cashier.utils.Constant;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import java.io.Serializable;

/**
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
@ToString
public class ResponseDTO<T> implements Serializable {

    private static final long serialVersionUID = -7272437633201428247L;

    @ApiModelProperty(value = "错误码,200表示成功")
    private String code = Constant.HTTP_OK;
    @ApiModelProperty(value = "消息")
    private String message = "";
    @ApiModelProperty(value = "链路ID")
    private String trace = "";
    @ApiModelProperty(value = "业务数据")
    private T data;

    public boolean isSuccess() {
        return Constant.HTTP_OK.equals(code);
    }

    public static <T> ResponseDTO<T> success(String code, String message, T data) {
        //return new ResponseDTO<>(code, message,null, data);
        return build(code,message,data);
    }

    public static <T> ResponseDTO<T> success(String message, T data) {
        return success(Constant.HTTP_OK, message, data);
    }

    public static <T> ResponseDTO<T> success(T data) {
        return success(Constant.HTTP_OK, Constant.HTTP_OK_MSG, data);
    }

    public static <T> ResponseDTO<T> success() {
        return success(Constant.HTTP_OK, Constant.HTTP_OK_MSG, null);
    }

    public static <T> ResponseDTO<T> fail(String code, String message, T data) {
        //return new ResponseDTO<>(code, message,getTraceId(), data);
        return build(code,message,data);
    }

    /**
     * 失败，错误信息需要参数
     * @param code
     * @param message
     * @param args
     * @param <T>
     * @return
     */
    public static <T> ResponseDTO<T> fail(String code, String message,Object... args) {
        return build(code,message,null,args);
    }

    /**
     *
     * @param code
     * @param message
     * @param <T>
     * @return
     */
    public static <T> ResponseDTO<T> fail(String code, String message) {
        //return new ResponseDTO<>(code, message,getTraceId(), null);
        return build(code,message,null);
    }

    private static <T> ResponseDTO<T> build(String code, String message, T data,Object... args){
        return new ResponseDTO<>(code, message,null, data);
    }

}
