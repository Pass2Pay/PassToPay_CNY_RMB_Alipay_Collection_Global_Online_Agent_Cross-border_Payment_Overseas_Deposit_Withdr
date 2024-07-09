---
title: "查詢轉帳訂單"
slug: "query-transfer-order"
excerpt: ""
hidden: false
createdAt: "Thu Mar 14 2024 01:24:23 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Mar 27 2024 10:36:16 GMT+0000 (Coordinated Universal Time)"
---
商家透過此API查詢轉帳訂單，PassToPay會傳回最新的訂單信息。

請求路徑 : api/transfer/query

請求方式 : `POST`

請求類型 : `application/json` or `application/x-www-form-urlencoded`

***

### 請求參數

| 參數         | 描述                                     | 範例                               |
| ---------- | -------------------------------------- | -------------------------------- |
| mchNo      | **必填**。商家號碼                            | M1621873433953                   |
| appId      | **必填**。應用程式 ID                         | 60cc09bce4b0f1c0b83761c9         |
| transferId | **必填**。支付中心產生的轉帳訂單號，與mchOrderNo可以一起傳遞  | T20160427210604000490            |
| mchOrderNo | **必填**。商家產生的轉帳訂單號，兩者之一與transferId一起傳即可 | 20160427210604000490             |
| reqTime    | **必填**。請求API時間，13位時間戳                  | 1622016572190                    |
| version    | **必填**。版本號，固定：1.0                      | 1.0                              |
| sign       | **必填**。簽名值，詳見請求簽名                      | C380BEC2BFD727A4B6845133519F3AD6 |
| signType   | **必填**。簽名類型，目前僅支援MD5方式                 | MD5                              |

**範例**:

```json
{
"appId":"60cc3ba74ee0e6685f57eb1e",
"sign":"D3C0CC231F3FC3D033650699BA099B39",
"signType":"MD5",
"reqTime":"1629106457",
"transferId":"T202108121543441860003",
"mchNo":"M1623997351",
"version":"1.0"
}
```

### 回應參數：

[block:parameters]
{
  "data": {
    "h-0": "參數",
    "h-1": "描述",
    "h-2": "範例",
    "0-0": "code",
    "0-1": "**必填**  \n0：處理成功，  \nother : 處理錯誤，具體見錯誤碼",
    "0-2": "0",
    "1-0": "msg",
    "1-1": "具體錯誤原因，如：簽名失敗、參數格式校驗錯誤",
    "1-2": "Signing failure",
    "2-0": "sign",
    "2-1": "對data中的資料進行簽名。如果資料為空，則不會傳回。",
    "2-2": "CCD9083A6DAD9A2DA9F668C3D4517A84",
    "3-0": "**data**",
    "3-1": "返回訂單數據，json格式數據",
    "3-2": "{}"
  },
  "cols": 3,
  "rows": 4,
  "align": [
    null,
    null,
    null
  ]
}
[/block]


**Data Parameters:**

[block:parameters]
{
  "data": {
    "h-0": "參數",
    "h-1": "描述",
    "h-2": "範例",
    "0-0": "mchNo",
    "0-1": "**必填**。商家號碼",
    "0-2": "M1621873433953",
    "1-0": "appId",
    "1-1": "**必填**。應用程式 ID",
    "1-2": "60cc09bce4b0f1c0b83761c9",
    "2-0": "mchOrderNo",
    "2-1": "**必填**。商家產生的轉帳訂單編號",
    "2-2": "20160427210604000490",
    "3-0": "transferId",
    "3-1": "**必填**。支付中心產生的轉帳單號",
    "3-2": "T20160427210604000490",
    "4-0": "amount",
    "4-1": "**必填**。轉帳金額，單位分",
    "4-2": "100",
    "5-0": "currency",
    "5-1": "**必填**。三位數貨幣代碼，人民幣：cny",
    "5-2": "cny",
    "6-0": "ifCode",
    "6-1": "**必填**  \nwxpay-微信官方接口 ; alipay-支付宝官方接口; aliaqfpay-支付宝安全发接口",
    "6-2": "wxpay",
    "7-0": "entryType",
    "7-1": "**必填**  \n入账方式： WX_CASH-微信零钱; ALIPAY_CASH-支付宝转账; BANK_CARD-银行卡",
    "7-2": "20160427210604000490",
    "8-0": "state",
    "8-1": "**必填**。傳輸狀態  \n0：訂單生成  \n1：傳輸正在進行中  \n2：轉帳成功  \n3：傳輸失敗  \n4：傳輸關閉",
    "8-2": "2",
    "9-0": "accountNo",
    "9-1": "**必填**  \nwxpay：openID，alipay：登入帳號",
    "9-2": "o6BcIwvTvIqf1zXZohc61biryWik",
    "10-0": "accountName",
    "10-1": "如果填寫，姓名就會被驗證，否則不會被驗證。",
    "10-2": "張三",
    "11-0": "bankName",
    "11-1": "目前僅供記錄",
    "11-2": "中國工商銀行",
    "12-0": "transferDesc",
    "12-1": "轉帳備註資訊",
    "12-2": "測試轉帳",
    "13-0": "channelOrderNo",
    "13-1": "對應通道的調撥單號",
    "13-2": "20160427210604000490",
    "14-0": "errCode",
    "14-1": "通道返回錯誤碼",
    "14-2": "1002",
    "15-0": "errMsg",
    "15-1": "通道回傳錯誤描述",
    "15-2": "134586944573118714",
    "16-0": "extraParam",
    "16-1": "商家擴充參數，回呼時原樣返回",
    "16-2": "134586944573118714",
    "17-0": "createdAt",
    "17-1": "**必填**。訂單建立時間，13位時間戳",
    "17-2": "1622016572190",
    "18-0": "successTime",
    "18-1": "轉帳成功時間，13位時間戳",
    "18-2": "1622016572190"
  },
  "cols": 3,
  "rows": 19,
  "align": [
    null,
    null,
    null
  ]
}
[/block]


**範例:**

```json
{
    "code": 0,
    "data": {
        "accountNo": "o6BcIwvTvIqf1zXZohc61biryWik",
        "amount": 1,
        "appId": "6113805e42020495c62bd4cb",
        "createdAt": 1628818820011,
        "currency": "CNY",
        "entryType": "WX_CASH",
        "errCode": "OPENID_ERROR",
        "errMsg": "openid mismatch with appid",
        "ifCode": "wxpay",
        "mchNo": "M1623997351",
        "mchOrderNo": "1628818820",
        "state": 3,
        "transferDesc": "test",
        "transferId": "T202108130940200100001"
    },
    "msg": "SUCCESS",
    "sign": "A262DBD3D6182E8A0AEC90EF820F2A5A"
}
```
