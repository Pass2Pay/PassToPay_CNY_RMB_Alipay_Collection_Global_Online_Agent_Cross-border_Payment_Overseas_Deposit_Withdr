---
title: "付款回調"
slug: "payment-notify"
excerpt: "當訂單付款成功後，PassToPay會向商家系統發起回調通知。若商家系統未正確返回，支付網關將再次延遲通知。"
hidden: false
createdAt: "Thu Mar 14 2024 02:51:36 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu May 23 2024 10:48:25 GMT+0000 (Coordinated Universal Time)"
---
請求URL：此鏈接通過 [【創建支付訂單接口】](https://pass2pay-zh-hk.readme.io/reference/create-payment-order)提交的參數notifyUrl設定。 如果該參數未傳值將不會發送回調通知。

請求方式：`POST`

請求類型： `application/x-www-form-urlencoded`

觸發場景：

- 客戶完成支付，訂單狀態為 付款成功
- 支付訂單在指定時間內未完成支付，訂單狀態為 訂單已關閉 
- 支付失敗並且無法繼續支付，訂單狀態為 付款失敗

[block:parameters]
{
  "data": {
    "h-0": "參數",
    "h-1": "描述",
    "h-2": "範例",
    "0-0": "payOrderId",
    "0-1": "**必填**。返回PassToPay生成的唯一訂單編號",
    "0-2": "P12021022311124442600",
    "1-0": "mchNo",
    "1-1": "**必填**。商家號碼",
    "1-2": "M1621873433953",
    "2-0": "appId",
    "2-1": "**必填**。應用 ID",
    "2-2": "60cc09bce4b0f1c0b83761c9",
    "3-0": "mchOrderNo",
    "3-1": "**必填**。返回商家傳入的訂單編號",
    "3-2": "20160427210604000490",
    "4-0": "wayCode",
    "4-1": "**必填**。付款方式，如：CHANNEL_CASHIER",
    "4-2": "CHANNEL_CASHIER",
    "5-0": "amount",
    "5-1": "**必填**。付款金額，两位小数位，\\*100取整",
    "5-2": "10000",
    "6-0": "currency",
    "6-1": "**必填**。客户支付的貨幣代碼",
    "6-2": "cny",
    "7-0": "state",
    "7-1": "**必填**。付款訂單狀態<br>0-訂單已產生<br>1-付款中<br>2-付款成功<br>3-付款失敗<br>4-已取消<br> 5-已退款<br>6 訂單已關閉",
    "7-2": "2",
    "8-0": "clientIp",
    "8-1": "用戶端 IPV4 位址",
    "8-2": "210.73.10.148",
    "9-0": "subject",
    "9-1": "**必填**。產品標題",
    "9-2": "PassToPay product title test",
    "10-0": "body",
    "10-1": "**必填**。產品說明",
    "10-2": "PassToPay Product Description Test",
    "11-0": "channelOrderNo",
    "11-1": "對應通道的訂單編號",
    "11-2": "20160427210604000490",
    "12-0": "errCode",
    "12-1": "通道訂單回傳錯誤碼",
    "12-2": "1002",
    "13-0": "errMsg",
    "13-1": "通道訂單回傳錯誤說明",
    "13-2": "134586944573118714",
    "14-0": "extParam",
    "14-1": "商家擴充參數",
    "14-2": "134586944573118714",
    "15-0": "successTime",
    "15-1": "訂單支付成功時間，13位時間戳",
    "15-2": "1622016572190",
    "16-0": "createdAt",
    "16-1": "**必填**。訂單建立時間，13位時間戳",
    "16-2": "1622016572190",
    "17-0": "reqTime",
    "17-1": "**必填**。通知請求時間，13位時間戳",
    "17-2": "1622016572190",
    "18-0": "sign",
    "18-1": "**必填**。簽名值，詳見簽名演算法",
    "18-2": "C380BEC2BFD727A4B6845133519F3AD6"
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
{
    "amount": 5,
    "body": "Product body",
    "clientIp": "192.166.1.132",
    "createdAt": "1622016572190",
    "currency": "cny",
    "extParam": "",
    "ifCode": "wxpay",
    "mchNo": "M1621873433953",
    "appId": "60cc09bce4b0f1c0b83761c9",
    "mchOrderNo": "mho1621934803068",
    "payOrderId": "20210525172643357010",
    "state": 3,
    "subject": "Product subject",
    "wayCode": "WX_BAR",
    "sign": "C380BEC2BFD727A4B6845133519F3AD6"
}
```

處理完畢後，業務系統同步返回PassToPay字符串**“success”**表示成功。不返回成功則表示處理失敗。 PassToPay會再次通知業務系統。

> 🚧 **（通知頻率為0/30/60/90/120/150，單位：秒）**
