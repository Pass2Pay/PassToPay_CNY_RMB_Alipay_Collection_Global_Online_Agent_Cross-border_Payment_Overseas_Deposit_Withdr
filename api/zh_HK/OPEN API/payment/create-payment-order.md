---
title: "創建支付訂單"
slug: "create-payment-order"
excerpt: ""
hidden: false
createdAt: "Wed Mar 13 2024 15:18:55 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu May 16 2024 01:18:31 GMT+0000 (Coordinated Universal Time)"
---
商家平台可以通過API發起支付訂單，PassToPasy網關會根據配置路由支付通道。支付網關根據不同的支付方式返回對應的支付參數，商家通過這些支付參數向客戶發起收款。

***

請求路徑 : api/pay/unifiedOrder

請求方式 : `POST`

請求類型 : `application/json` or `application/x-www-form-urlencoded`

### 請求參數

[block:parameters]
{
  "data": {
    "h-0": "參數",
    "h-1": "描述",
    "h-2": "範例",
    "0-0": "mchNo",
    "0-1": "**必填**.商家編號，在管理後台可查看。",
    "0-2": "M1621873433953",
    "1-0": "appId",
    "1-1": "**必填**.在管理後台可查看。",
    "1-2": "60cc09bce4b0f1c0b83761c9",
    "2-0": "mchOrderNo",
    "2-1": "**必填**。商家產生的訂單號碼。",
    "2-2": "20160427210604000490",
    "3-0": "wayCode",
    "3-1": "**必填**。付款方式，具體參考[支付方式](https://pass2pay-zh-hk.readme.io/reference/payment-method)。",
    "3-2": "ALI_QR",
    "4-0": "amount",
    "4-1": "**必填**.付款金額， <span style=\"color:red\">單位分。注意請使用Integer類型。</span>",
    "4-2": "100",
    "5-0": "currency",
    "5-1": "**必填**。三位數貨幣代碼",
    "5-2": "cny",
    "6-0": "reqTime",
    "6-1": "**必填**。請求API時間，13位時間戳。",
    "6-2": "1622016572190",
    "7-0": "version",
    "7-1": "**必填**   版本號，當前版本為：1.1。",
    "7-2": "1.1",
    "8-0": "signType",
    "8-1": "**必填**。簽名類型，目前僅支援MD5方式。",
    "8-2": "MD5",
    "9-0": "sign",
    "9-1": "**必填**。簽名值，詳細請參考請求簽名。",
    "9-2": "C380BEC2BFD727A4B6845133519F3AD6",
    "10-0": "subject",
    "10-1": "**必填**。產品標題，固定值：商品",
    "10-2": "商品",
    "11-0": "body",
    "11-1": "**必填**。產品描述，固定值： 0",
    "11-2": "0",
    "12-0": "clientIp",
    "12-1": "**必填**。用戶端 IPV4 位址。注意非大陆IP将会返回失败",
    "12-2": "210.73.10.148",
    "13-0": "userName",
    "13-1": "發起付款的用戶真實姓名。",
    "13-2": "張三",
    "14-0": "notifyUrl",
    "14-1": "支付結果回調通知URL，**只有傳入該值才會啟動通知**",
    "14-2": "<https://www.yourserver.com/notify.htm>",
    "15-0": "returnUrl",
    "15-1": "支付完成後跳轉URL",
    "15-2": "<https://www.yourserver.com/return.htm>",
    "16-0": "expiredTime",
    "16-1": "訂單過期時間，單位秒，默認過期時間為2小時。",
    "16-2": "3600",
    "17-0": "channelExtra",
    "17-1": "特定通道發起的附加參數，json格式字串。有關詳細信息，請參閱 [支付方式](https://pass2pay-zh-hk.readme.io/reference/payment-method) 描述",
    "17-2": "{\"auth_code\":\"13920933111042\"}",
    "18-0": "extParam",
    "18-1": "商家擴充參數，回調時原樣返回",
    "18-2": "134586944573118714",
    "19-0": "custNo",
    "19-1": "**必填**.客戶唯一編號（[V1.1.0](https://pass2pay-zh-hk.readme.io/reference/v110-20240117)新增）",
    "19-2": "C200492312",
    "20-0": "registerTime",
    "20-1": "**必填**.客戶註冊時間（[V1.1.0](https://pass2pay-zh-hk.readme.io/reference/v110-20240117)新增）",
    "20-2": "1622016572190"
  },
  "cols": 3,
  "rows": 21,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]


***

請求範例：

```json
{
  "amount": 8,
  "extParam": "",
  "mchOrderNo": "mho1624005107281",
  "subject": "商品",
  "wayCode": "ALI_BAR",
  "sign": "84F606FA25A6EC4783BECC08D4FDC681",
  "reqTime": "1624005107",
  "body": "0",
  "version": "1.0",
  "channelExtra": "{\"authCode\":\"280812820366966512\"}",
  "appId": "60cc09bce4b0f1c0b83761c9",
  "clientIp": "192.166.1.132",
  "notifyUrl": "https://www.paypass.com",
  "signType": "MD5",
  "currency": "cny",
  "userName": "zhangsan",
  "returnUrl": "",
  "mchNo": "M1623984572"
}
```

### 回應參數

| 參數       | 必填 | 範例                               | 描述                        |
| -------- | -- | -------------------------------- | ------------------------- |
| code     | 是  | 0                                | 0-處理成功，其他-處理錯誤，具體參見錯誤碼    |
| msg      | 否  | Signing failure                  | 具體錯誤原因，如：簽名失敗、參數格式校驗錯誤    |
| sign     | 否  | CCD9083A6DAD9A2DA9F668C3D4517A84 | 對資料中的資料進行簽名。如果資料為空，則不會傳回。 |
| **data** | 否  | {}                               | 返回支付訂單，json格式資料。請參閱下面支付訂單 |

**支付訂單：**

[block:parameters]
{
  "data": {
    "h-0": "參數名稱",
    "h-1": "範例",
    "h-2": "描述",
    "0-0": "payOrderId",
    "0-1": "U12021022311124442600",
    "0-2": "**必填**.返回付款系統訂單編號",
    "1-0": "mchOrderNo",
    "1-1": "20160427210604000490",
    "1-2": "**必填**返回商家傳入的訂單編號",
    "2-0": "orderState",
    "2-1": "2",
    "2-2": "**必填**付款訂單狀態<br>0-已產生訂單<br>1-付款中<br>2-付款成功<br>3-付款失敗<br>4-已取消<br>5-已退款<br>6-訂單已關閉",
    "3-0": "payDataType",
    "3-1": "payUrl",
    "3-2": "**必填**付款參數類型<br>payUrl-跳轉連結方式<br>form-表單方式<br>codeUrl-二維碼位址<br>codeImgUrl-二維碼圖片位址<br>none-null支付參數",
    "4-0": "payData",
    "4-1": "<https://pay.pass2pay.io/api/scan/imgs/aa.png>",
    "4-2": "根据payDataType返回对应的支付数据",
    "5-0": "payOrderInfo",
    "5-1": "{}",
    "5-2": "訂單訊息，直接支付成功時會返回此數據",
    "6-0": "errCode",
    "6-1": "ACQ.PAYMENT_AUTH_CODE_INVALID",
    "6-2": "通道傳回的錯誤碼",
    "7-0": "errMsg",
    "7-1": "Business Failed",
    "7-2": "通道傳回的錯誤描述"
  },
  "cols": 3,
  "rows": 8,
  "align": [
    null,
    null,
    null
  ]
}
[/block]


**回應樣本**

```json
{
  "code": 0,
  "data": {
    "errCode": "ACQ.PAYMENT_AUTH_CODE_INVALID",
    "errMsg": "Business Failed",
    "mchOrderNo": "mho1624005752661",
    "orderState": 3,
    "payData": "https://pay.pass2pay.io/api/scan/imgs/aa.png",
    "payOrderId": "P202106181642329900002"
  },
  "msg": "SUCCESS",
  "sign": "F4DA202C516D1F33A12F1E547C5004FD"
}
```

下面是使用不同語言發起支付訂單的代碼片段，可以作為參考：

（注意代碼中為對異常場景做處理，請結合業務場景自行處理）

```java
        Map<String, Object> map = new HashMap<>();
        map.put("mchNo", "Merchant Number...");
        map.put("appId", "App ID...");
        map.put("mchOrderNo", "Unique Order Number...");
        map.put("wayCode", "ALI_QR");
        map.put("amount", 10000);
        map.put("currency", "cny");
        map.put("userName", "zhang san...");
        map.put("reqTime", 1711021401000l);
        map.put("version", "1.0");
        map.put("subject", "商品");
        map.put("body", "0");
        map.put("notifyUrl", "https://www...");
        JSONObject extParams = new JSONObject();
        extParams.put("payDataType", "codeImgUrl");
        map.put("channelExtra", extParams);
        map.put("signType", "MD5");
        map.put("sign", "5182B5B0...");
        HttpResponse response = HttpRequest
                .post("http://api.pass2pay.com/api/pay/unifiedOrder")
                .form(map).execute();
        JSONObject responseJson = JSON.parseObject(response.body());
        if(responseJson.getIntValue("code") != 0){
            // failed, Please check the configuration or contact us
        }else{
            //successful, return customer payment order info
        }
```
```php
Copy
<?php
$map = array(
    "mchNo" => "Merchant Number...",
    "appId" => "App ID...",
    "mchOrderNo" => "Unique Order Number...",
    "wayCode" => "ALI_QR",
    "amount" => 10000,
    "currency" => "cny",
    "userName" => "zhang san...",
    "reqTime" => 1711021401000,
    "version" => "1.0",
    "signType" => "MD5",
    "sign" => "5182B5B0...",
    "subject" => "Children's clothing...",
    "body" => "A red down jacket...",
    "notifyUrl" => "https://www..."
);

$extParams = array(
    "payDataType" => "codeImgUrl"
);
$map["channelExtra"] = $extParams;

$response = Requests::post('http://api.pass2pay.com/api/pay/unifiedOrder', array(), $map);
$responseJson = json_decode($response->body, true);

if ($responseJson["code"] != 0) {
    // failed, Please check the configuration or contact us
} else {
    // successful, return customer payment order info
}
?>
```
```typescript Node.js
const axios = require('axios');

const requestData = {
  mchNo: "Merchant Number...",
  appId: "App ID...",
  mchOrderNo: "Unique Order Number...",
  wayCode: "ALI_QR",
  amount: 10000,
  currency: "cny",
  userName: "zhang san...",
  reqTime: 1711021401000,
  version: "1.0",
  signType: "MD5",
  sign: "5182B5B0...",
  subject: "Children's clothing...",
  body: "A red down jacket...",
  notifyUrl: "https://www...",
  channelExtra: {
    payDataType: "codeImgUrl"
  }
};

axios.post('http://api.pass2pay.com/api/pay/unifiedOrder', requestData)
  .then(response => {
    const responseJson = response.data;
    if (responseJson.code !== 0) {
      // failed, Please check the configuration or contact us
    } else {
      // successful, return customer payment order info
    }
  })
  .catch(error => {
    // handle error
  });
```
```python
import requests

requestData = {
    "mchNo": "Merchant Number...",
    "appId": "App ID...",
    "mchOrderNo": "Unique Order Number...",
    "wayCode": "ALI_QR",
    "amount": 10000,
    "currency": "cny",
    "userName": "zhang san...",
    "reqTime": 1711021401000,
    "version": "1.0",
    "signType": "MD5",
    "sign": "5182B5B0...",
    "subject": "Children's clothing...",
    "body": "A red down jacket...",
    "notifyUrl": "https://www...",
    "channelExtra": {
        "payDataType": "codeImgUrl"
    }
}

response = requests.post('http://api.pass2pay.com/api/pay/unifiedOrder', json=requestData)
responseJson = response.json()

if responseJson["code"] != 0:
    # failed, Please check the configuration or contact us
else:
    # successful, return customer payment order info
```
```go
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	requestData := map[string]interface{}{
		"mchNo":      "Merchant Number...",
		"appId":      "App ID...",
		"mchOrderNo": "Unique Order Number...",
		"wayCode":    "ALI_QR",
		"amount":     10000,
		"currency":   "cny",
		"userName":   "zhang san...",
		"reqTime":    1711021401000,
		"version":    "1.0",
		"signType":   "MD5",
		"sign":       "5182B5B0...",
		"subject":    "Children's clothing...",
		"body":       "A red down jacket...",
		"notifyUrl":  "https://www...",
		"channelExtra": map[string]string{
			"payDataType": "codeImgUrl",
		},
	}

	requestBody, err := json.Marshal(requestData)
	if err != nil {
		fmt.Println("Error marshaling request body:", err)
		return
	}

	resp, err := http.Post("http://api.pass2pay.com/api/pay/unifiedOrder", "application/json", bytes.NewBuffer(requestBody))
	if err != nil {
		fmt.Println("Error sending request:", err)
		return
	}
	defer resp.Body.Close()

	responseBody, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		return
	}

	var responseJson map[string]interface{}
	err = json.Unmarshal(responseBody, &responseJson)
	if err != nil {
		fmt.Println("Error unmarshaling response body:", err)
		return
	}

	if responseJson["code"].(float64) != 0 {
		// failed, Please check the configuration or contact us
		fmt.Println("Request failed:", responseJson["message"])
	} else {
		// successful, return customer payment order info
		fmt.Println("Request succeeded:", responseJson["data"])
	}
}
```
