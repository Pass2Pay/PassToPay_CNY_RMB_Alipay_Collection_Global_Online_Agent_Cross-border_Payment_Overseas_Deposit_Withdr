---
title: "接口描述"
slug: "創建收銀台beta-copy"
excerpt: ""
hidden: false
createdAt: "Wed May 22 2024 14:40:30 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Jul 08 2024 06:33:46 GMT+0000 (Coordinated Universal Time)"
---
請求路徑 : api/pay/cashierOrder

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
    "3-0": "amount",
    "3-1": "**必填**.付款金額， <span style=\"color:red\">注意只支持2位精度，乘以100后使用Integer類型。</span>",
    "3-2": "100",
    "4-0": "currency",
    "4-1": "**必填**。三位數貨幣代碼",
    "4-2": "cny",
    "5-0": "reqTime",
    "5-1": "**必填**。請求API時間，13位時間戳。",
    "5-2": "1622016572190",
    "6-0": "registerTime",
    "6-1": "**必填**.客戶註冊時間（[V1.1.0](https://pass2pay-zh-hk.readme.io/reference/v110-20240117)新增）",
    "6-2": "1622016572190",
    "7-0": "custNo",
    "7-1": "**必填**.客戶唯一編號（[V1.1.0](https://pass2pay-zh-hk.readme.io/reference/v110-20240117)新增）",
    "7-2": "C200492312",
    "8-0": "version",
    "8-1": "**必填**   版本號，當前接口支持最低版本為：1.1。",
    "8-2": "1.1",
    "9-0": "sign",
    "9-1": "**必填**。簽名值，詳細請參考請求簽名。",
    "9-2": "C380BEC2BFD727A4B6845133519F3AD6",
    "10-0": "signType",
    "10-1": "**必填**。簽名類型，目前僅支援MD5方式。",
    "10-2": "MD5",
    "11-0": "wayCode",
    "11-1": "指定付款方式，即在收銀台不展示其他支付方式。 [支付方式列表](https://pass2pay-zh-hk.readme.io/reference/payment-method)  。",
    "11-2": "ALI_QR",
    "12-0": "subject",
    "12-1": "產品標題(**保留欄位，當前版本不要傳值。**)",
    "12-2": "商品",
    "13-0": "body",
    "13-1": "產品描述(**保留欄位，當前版本不要傳值。**)",
    "13-2": "0",
    "14-0": "userName",
    "14-1": "發起付款的用戶真實姓名。",
    "14-2": "張三",
    "15-0": "notifyUrl",
    "15-1": "支付結果回調通知URL，**只有傳入該值才會啟動通知**",
    "15-2": "<https://www.yourserver.com/notify.htm>",
    "16-0": "returnUrl",
    "16-1": "支付完成後跳轉URL",
    "16-2": "<https://www.yourserver.com/return.htm>",
    "17-0": "expiredTime",
    "17-1": "訂單過期時間，單位秒。不傳或小於15分鐘將設置為15分鐘。",
    "17-2": "3600",
    "18-0": "extParam",
    "18-1": "商家擴充參數，回調時原樣返回",
    "18-2": "134586944573118714"
  },
  "cols": 3,
  "rows": 19,
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
  "sign": "84F606FA25A6EC4783BECC08D4FDC681",
  "reqTime": "1624005107",
  "version": "1.0",
  "channelExtra": "{\"authCode\":\"280812820366966512\"}",
  "appId": "60cc09bce4b0f1c0b83761c9",
  "notifyUrl": "https://www.paypass.com",
  "signType": "MD5",
  "currency": "cny",
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
    "3-2": "**必填**付款參數類型<br>payUrl-跳轉連結方式<br>",
    "4-0": "payData",
    "4-1": "<https://cashier.pass2pay.io/api/scan/imgs/aa.png>",
    "4-2": "收銀台url",
    "5-0": "errCode",
    "5-1": "ACQ.PAYMENT_AUTH_CODE_INVALID",
    "5-2": "通道傳回的錯誤碼",
    "6-0": "errMsg",
    "6-1": "Business Failed",
    "6-2": "通道傳回的錯誤描述"
  },
  "cols": 3,
  "rows": 7,
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
        "mchOrderNo": "D202405220002",
        "orderState": 0,
        "payData": "https://cashier.passtopay.com/wayCode?payOrderToken=408e2d8d6b7b0911d12cf220e48175d9768b7cd5142a8d2e7e64b948e6c75646",
        "payDataType": "payurl",
        "payOrderId": "P1793544595691261954"
    },
    "msg": "SUCCESS",
    "sign": "65EBF84B61764231EF24F49F25AE3E84",
    "traceId": "f16bb12607ff4987b8dbe8bedc4fb99f"
}

```

下面是使用不同語言發起支付訂單的代碼片段，可以作為參考：

（注意代碼中為對異常場景做處理，請結合業務場景自行處理）

```java
        Map<String, Object> map = new HashMap<>();
        map.put("mchNo", "Merchant Number...");
        map.put("appId", "App ID...");
        map.put("mchOrderNo", "Unique Order Number...");
        map.put("amount", 10000);
        map.put("currency", "cny");
        map.put("reqTime", 1711021401000l);
        map.put("version", "1.1");
        map.put("notifyUrl", "https://www...");
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
    "amount" => 10000,
    "currency" => "cny",
    "reqTime" => 1711021401000,
    "version" => "1.0",
    "signType" => "MD5",
    "sign" => "5182B5B0...",
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
  reqTime: 1711021401000,
  version: "1.0",
  signType: "MD5",
  sign: "5182B5B0...",
  subject: "Children's clothing...",
  body: "A red down jacket...",
  notifyUrl: "https://www..."
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
    "amount": 10000,
    "currency": "cny",
    "reqTime": 1711021401000,
    "version": "1.0",
    "signType": "MD5",
    "sign": "5182B5B0...",
    "notifyUrl": "https://www..."
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
		"amount":     10000,
		"currency":   "cny",
		"userName":   "zhang san...",
		"reqTime":    1711021401000,
		"version":    "1.0",
		"signType":   "MD5",
		"sign":       "5182B5B0...",
		"notifyUrl":  "https://www..."
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
