---
title: "創建轉帳訂單"
slug: "create-transfer-order"
excerpt: ""
hidden: false
createdAt: "Thu Mar 14 2024 01:14:57 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Jul 02 2024 06:55:36 GMT+0000 (Coordinated Universal Time)"
---
商家通過轉帳API發起轉帳請求，PassToPay支付網關將根據請求信息創建轉帳訂單。

請求路徑 : api/transferOrder

請求方式 : `POST`

請求類型 : `application/json` or `application/x-www-form-urlencoded`

### 請求參數：

[block:parameters]
{
  "data": {
    "h-0": "參數",
    "h-1": "描述",
    "h-2": "範例",
    "0-0": "mchNo",
    "0-1": "**必填**。商家編號，在管理後台可查看。",
    "0-2": "M1621873433953",
    "1-0": "appId",
    "1-1": "**必填**。商家編號，在管理後台可查看。",
    "1-2": "60cc09bce4b0f1c0b83761c9",
    "2-0": "mchOrderNo",
    "2-1": "**必填**。商家唯一的轉帳訂單編號",
    "2-2": "20160427210604000490",
    "3-0": "entryType",
    "3-1": "**必填**  \n入账方式：  \nBANK_CARD-银行卡",
    "3-2": "BANK_CARD",
    "4-0": "amount",
    "4-1": "**必填**。轉帳金額，單位分",
    "4-2": "100",
    "5-0": "currency",
    "5-1": "**必填**。三位數貨幣代碼，人民幣：cny",
    "5-2": "cny",
    "6-0": "accountNo",
    "6-1": "**必填**  \n收款账号，如果入账方式是银行卡则填银行卡号",
    "6-2": "0293123312333",
    "7-0": "accountName",
    "7-1": "如果填寫，姓名就會被驗證，否則不會被驗證。",
    "7-2": "張三",
    "8-0": "bankName",
    "8-1": "收款帳號對應的銀行名稱",
    "8-2": "中國工商銀行",
    "9-0": "clientIp",
    "9-1": "**必填**用戶端 IPV4 位址",
    "9-2": "210.73.10.148",
    "10-0": "transferDesc",
    "10-1": "轉帳備註資訊，固定值: 0",
    "10-2": "0",
    "11-0": "notifyUrl",
    "11-1": "轉帳完成後會通知該URL。只有當這個值被傳遞時才會發起通知。",
    "11-2": "<https://www.passtopay.com/notify.htm>",
    "12-0": "channelExtra",
    "12-1": "特定渠道发起的额外参数,json格式字符串。（注意不要使用对象，避免排序问题验签失败）",
    "12-2": "{\"custNo\":\"客戶唯一編號\",\"telNo\":\"大陸手機號碼，無區號\",\"cardNo\":\"身分證號碼\",bankCode:\"[銀行編碼列表2](https://pass2pay-zh-hk.readme.io/reference/%E9%8A%80%E8%A1%8C%E7%B7%A8%E7%A2%BC)\"}",
    "13-0": "extraParam",
    "13-1": "商家擴充參數，回調時原樣返回",
    "13-2": "134586944573118714",
    "14-0": "reqTime",
    "14-1": "**必填**。請求API時間，13位時間戳",
    "14-2": "1622016572190",
    "15-0": "version",
    "15-1": "**必填**。版本號，當前版本：1.1",
    "15-2": "1.1",
    "16-0": "sign",
    "16-1": "**必填**。簽名值，詳見[請求簽名](https://pass2pay-zh-hk.readme.io/reference/signing-a-request)",
    "16-2": "C380BEC2BFD727A4B6845133519F3AD6",
    "17-0": "signType",
    "17-1": "**必填**。簽名類型，目前僅支援MD5方式",
    "17-2": "MD5",
    "18-0": "custNo",
    "18-1": "**必填**.客戶唯一編號（[V1.1.0](https://pass2pay-zh-hk.readme.io/reference/v110-20240117) 新增）",
    "18-2": "C2312110001"
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


**範例：**

```json
{"ifCode":"wxpay",
"entryType":"WX_CASH",
"amount":1,
"accountName":"",
"mchOrderNo":"mho1629106169045",
"sign":"3EB5A3B81E92DB41677E235363E7DDE3",
"transferDesc":"0",
"reqTime":"1629106169",
"version":"1.0",
"appId":"60cc3ba74ee0e6685f57eb1e",
"accountNo":"a6BcIwtTvIqv1zXZohc61biryWok",
"clientIp":"192.166.1.132",
"signType":"MD5",
"currency":"CNY",
"mchNo":"M1623997351",
"custNo":"A123456",
"cardNo":"664646456546",
"channelExtra":"{\"bankCode\":\"03080000\",\"custNo\":2032228,\"cardNo\":\"411122199805050000\",\"telNo\":\"18201048982\"}"
}

```

### 回應參數：

[block:parameters]
{
  "data": {
    "h-0": "參數 ",
    "h-1": "描述",
    "h-2": "範例",
    "0-0": "code",
    "0-1": "**必填**  \n0：處理成功，  \nother：處理錯誤，詳細資訊請參考錯誤碼",
    "0-2": "0",
    "1-0": "msg",
    "1-1": "**必填**。具體錯誤原因，如：簽名失敗、參數格式驗證錯誤",
    "1-2": "Signing failure",
    "2-0": "sign",
    "2-1": "**必填**。對data中的資料進行簽名。如果資料為空，則不會傳回。",
    "2-2": "CCD9083A6DAD9A2DA9F668C3D4517A84",
    "3-0": "data",
    "3-1": "**必填**。返回訂單數據，json格式數據",
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


**Data 參數:**

[block:parameters]
{
  "data": {
    "h-0": "參數",
    "h-1": "描述",
    "h-2": "範例",
    "0-0": "transferId",
    "0-1": "**必填**。返回轉帳單號",
    "0-2": "T202108161731281310004",
    "1-0": "mchOrderNo",
    "1-1": "**必填**。返回商家傳入的轉帳訂單編號",
    "1-2": "mho1624007315478",
    "2-0": "amount",
    "2-1": "**必填**。返回商家傳入的轉帳訂單金額",
    "2-2": "100",
    "3-0": "state",
    "3-1": "**必填**。傳輸狀態  \n0：訂單生成  \n1：傳輸正在進行中  \n2：轉帳成功  \n3：傳輸失敗  \n4：轉帳關閉",
    "3-2": "2",
    "4-0": "accountNo",
    "4-1": "**必填**收款账号",
    "4-2": "0293123312333",
    "5-0": "channelOrderNo",
    "5-1": "對應通道的調撥單號",
    "5-2": "20160427210604000490",
    "6-0": "accountName",
    "6-1": "收款帳號所屬人姓名",
    "6-2": "張三",
    "7-0": "bankName",
    "7-1": "收款帳號對應的銀行名稱",
    "7-2": "中國工商銀行"
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


**範例：**

```json
{
    "code": 0,
    "data": {
        "accountNo": "1",
        "amount": 11,
        "channelOrderNo": "20210816110070001506260000372216",
        "mchOrderNo": "1629106288",
        "state": 2,
        "transferId": "T202108161731281310004"
    },
    "msg": "SUCCESS",
    "sign": "195BF6F112386F7FC8EA2AA7EECA1D33"
}
```
