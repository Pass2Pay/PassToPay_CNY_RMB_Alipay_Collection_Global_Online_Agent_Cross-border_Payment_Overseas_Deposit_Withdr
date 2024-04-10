package com.pay.pass.cashier.utils;

import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Map;
import java.util.Set;
import java.util.regex.Pattern;

/**
 * @Date: 2024/3/15 下午2:08
 * @Version: v1.0.0
 * @Description:
 **/
@Slf4j
public class PayKit {

    private static String encodingCharset = "UTF-8";

    /**
     * Description: 计算签名摘要
     * @param map 参数Map
     * @param key 商户秘钥
     * @return
     */
    public static String getSign(Map<String,Object> map, String key){
        ArrayList<String> list = new ArrayList<String>();
        for(Map.Entry<String,Object> entry:map.entrySet()){
            if(null != entry.getValue() && !"".equals(entry.getValue())){
                list.add(entry.getKey() + "=" + entry.getValue() + "&");
            }
        }
        int size = list.size();
        String [] arrayToSort = list.toArray(new String[size]);
        Arrays.sort(arrayToSort, String.CASE_INSENSITIVE_ORDER);
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < size; i ++) {
            sb.append(arrayToSort[i]);
        }
        String result = sb.toString();
        result += "key=" + key;
        log.info("signStr:{}", result);
        result = md5(result, encodingCharset).toUpperCase();
        log.info("sign:{}", result);
        return result;
    }


    /**
     * <p><b>Description: </b>MD5
     * <p>2018年9月30日 上午11:33:19
     * @param value
     * @param charset
     * @return
     */
    public static String md5(String value, String charset) {
        MessageDigest md = null;
        try {
            byte[] data = value.getBytes(charset);
            md = MessageDigest.getInstance("MD5");
            byte[] digestData = md.digest(data);
            return toHex(digestData);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static String toHex(byte input[]) {
        if (input == null) {
            return null;
        }
        StringBuffer output = new StringBuffer(input.length * 2);
        for (int i = 0; i < input.length; i++) {
            int current = input[i] & 0xff;
            if (current < 16) {
                output.append("0");
            }
            output.append(Integer.toString(current, 16));
        }

        return output.toString();
    }

    static String doEncode(String str) {
        if(str.contains("+")) {
            return URLEncoder.encode(str);
        }
        return str;
    }


}
