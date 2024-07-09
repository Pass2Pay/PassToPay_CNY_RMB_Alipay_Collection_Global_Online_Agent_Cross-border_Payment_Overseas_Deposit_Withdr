---
title: "創建加密支付訂單"
slug: "創建支付訂單-copy"
excerpt: ""
hidden: true
createdAt: "Tue Apr 09 2024 09:31:38 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2024 03:02:01 GMT+0000 (Coordinated Universal Time)"
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
    "2-1": "**必填**.商家產生的訂單號碼。",
    "2-2": "20160427210604000490",
    "3-0": "amount",
    "3-1": "**必填**.付款金額， <span style=\"color:red\">最大支持小數位2位，請將金額\\*100後以整數類型表示 </span> 比如 金額為 100.31 USD,amount: 10031",
    "3-2": "10031",
    "4-0": "currency",
    "4-1": "**必填**。默認客戶支付的幣種 [查看列表](https://pass2pay-zh-hk.readme.io/reference/%E5%8A%A0%E5%AF%86%E7%B6%B2%E8%B7%AF%E5%88%97%E8%A1%A8)",
    "4-2": "USDT",
    "5-0": "chain",
    "5-1": "**必填**.默認支付的網路。[查看列表](https://pass2pay-zh-hk.readme.io/reference/%E5%8A%A0%E5%AF%86%E7%B6%B2%E8%B7%AF%E5%88%97%E8%A1%A8)",
    "5-2": "TRON",
    "6-0": "userName",
    "6-1": "發起付款的用戶真實姓名。",
    "6-2": "張三",
    "7-0": "reqTime",
    "7-1": "**必填**。請求API時間，13位時間戳。",
    "7-2": "1622016572190",
    "8-0": "version",
    "8-1": "**必填**   版本號，當前接口版本為：1.1。",
    "8-2": "1.1",
    "9-0": "signType",
    "9-1": "**必填**。簽名類型，目前僅支援MD5方式。",
    "9-2": "MD5",
    "10-0": "sign",
    "10-1": "**必填**。簽名值，詳細請參考請求簽名。",
    "10-2": "C380BEC2BFD727A4B6845133519F3AD6",
    "11-0": "subject",
    "11-1": "**必填**。產品標題，，不超过8个字符。",
    "11-2": "yifu",
    "12-0": "body",
    "12-1": "**必填**。產品描述，不超过8个字符。",
    "12-2": "test cl",
    "13-0": "clientIp",
    "13-1": "**必填**。用戶端 IPV4 位址",
    "13-2": "210.73.10.148",
    "14-0": "custNo",
    "14-1": "**必填**.商家客戶唯一的編碼",
    "14-2": "C123111",
    "15-0": "registerTime",
    "15-1": "**必填**.商家客戶註冊時間",
    "15-2": "1622016572190",
    "16-0": "notifyUrl",
    "16-1": "支付結果回調通知URL，**只有傳入該值才會啟動通知**",
    "16-2": "<https://www.yourserver.com/notify.htm>",
    "17-0": "returnUrl",
    "17-1": "支付完成後跳轉URL",
    "17-2": "<https://www.yourserver.com/return.htm>",
    "18-0": "expiredTime",
    "18-1": "訂單過期時間，單位秒，默認過期時間為2小時。",
    "18-2": "3600",
    "19-0": "extParam",
    "19-1": "商家擴充參數，回調時原樣返回",
    "19-2": "134586944573118714"
  },
  "cols": 3,
  "rows": 20,
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
  "amount": 20,
  "extParam": "123",
  "mchOrderNo": "JOHN003",
  "subject": "johntest",
  "reqTime": "1712829266129",
  "wayCode": "CRYPTO_ADDRESS",
  "body": "接口调试[M1702966122商户联调]",
  "version": "1.0",
  "appId": "65dbf06cd1bad488fdd8598b",
  "expiredTime": 600,
  "clientIp": "192.166.1.132",
  "notifyUrl": "https://www.paypass.com",
  "signType": "MD5",
  "currency": "USDT",
  "userName": "zhangsan",
  "mchNo": "M1702966122",
  "sign": "5DE890A28D5764A418711C47100D8BF1",
  "chain": "1"
}

```

### 回應參數

| 參數       | 必填 | 範例                               | 描述                        |
| -------- | -- | -------------------------------- | ------------------------- |
| code     | 是  | 0                                | 0-處理成功，其他-處理錯誤，具體參見錯誤碼    |
| msg      | 否  | Signing failure                  | 具體錯誤原因，如：簽名失敗、參數格式校驗錯誤    |
| sign     | 否  | CCD9083A6DAD9A2DA9F668C3D4517A84 | 對資料中的資料進行簽名。如果資料為空，則不會傳回。 |
| **data** | 否  | {}                               | 返回支付訂單，json格式資料。請參閱下面支付訂單 |

**data：**

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
    "4-1": "<https://passtoppay.io/payment?prepay_id=f7b313532e90be28a8>",
    "4-2": "待支付連接",
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


回應範例：

```json
{
    "code": 0,
    "data": {
        "mchOrderNo": "JOHN003",
        "orderState": 1,
        "payData": "https://passtopay.io/payment?prepay_id=f7b313532e90be28a88faad5b669632b39e79deecb73151615d3e28e21393a17&locale=en",
        "payDataType": "payurl",
        "payOrderId": "P1779159480454324225"
    },
    "msg": "SUCCESS",
    "sign": "ABDD75BBA81037F76FE1FC72294A5964"
}

```

<br>

<br>
