---
title: "Payment Notify"
slug: "payment-notify"
excerpt: "When the order payment is successful, PassToPay will initiate a callback notification to the merchant system. If the merchant system does not return correctly, the payment gateway will delay notification again."
hidden: false
createdAt: "Thu Mar 14 2024 02:51:36 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Apr 02 2024 08:34:53 GMT+0000 (Coordinated Universal Time)"
---
Request URL: This link is set by the parameter notifyUrl submitted through the [Create PaymentOrder API](https://pass2pay.readme.io/reference/create-payment-order). If the link cannot be accessed, the merchant system will not be able to receive notifications from the payment gateway.

Request method: `POST`

Request type: `application/x-www-form-urlencoded`

[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Description",
    "h-2": "Sample value",
    "0-0": "payOrderId",
    "0-1": "**required**.Return PassToPay‘s  system order no",
    "0-2": "P12021022311124442600",
    "1-0": "mchNo",
    "1-1": "**required**.Merchant Number",
    "1-2": "M1621873433953",
    "2-0": "appId",
    "2-1": "**required**.App ID",
    "2-2": "60cc09bce4b0f1c0b83761c9",
    "3-0": "mchOrderNo",
    "3-1": "**required**.Returns the order number passed in by the merchant",
    "3-2": "20160427210604000490",
    "4-0": "wayCode",
    "4-1": "**required**.Payment method, such as: ALI_QR",
    "4-2": "ALI_QR",
    "5-0": "amount",
    "5-1": "**required**.Payment amount, unit cent",
    "5-2": "100",
    "6-0": "currency",
    "6-1": "**required**.Three-digit currency code, RMB: cny",
    "6-2": "cny",
    "7-0": "state",
    "7-1": "**required**.Payment order status<br>0-Order generated<br>1-Payment in progress<br>2-Payment successful<br>3-Payment failed<br>4-Cancelled\\< br>5-Refunded<br>6-Order closed",
    "7-2": "2",
    "8-0": "clientIp",
    "8-1": "Client IPV4 address",
    "8-2": "210.73.10.148",
    "9-0": "subject",
    "9-1": "**required**.product title",
    "9-2": "PassToPay product title test",
    "10-0": "body",
    "10-1": "**required**.Product Description",
    "10-2": "PassToPay Product Description Test",
    "11-0": "channelOrderNo",
    "11-1": "The order number of the corresponding channel.Such as from Alipay.",
    "11-2": "20160427210604000490",
    "12-0": "errCode",
    "12-1": "Channel order return error code",
    "12-2": "1002",
    "13-0": "errMsg",
    "13-1": "Channel order return error description",
    "13-2": "134586944573118714",
    "14-0": "extParam",
    "14-1": "Merchant extended parameters",
    "14-2": "134586944573118714",
    "15-0": "successTime",
    "15-1": "Order payment success time, 13-digit timestamp",
    "15-2": "1622016572190",
    "16-0": "createdAt",
    "16-1": "**required**.Order creation time, 13-digit timestamp",
    "16-2": "1622016572190",
    "17-0": "reqTime",
    "17-1": "**required**.Notification request time, 13-digit timestamp",
    "17-2": "1622016572190",
    "18-0": "sign",
    "18-1": "**required**.Signature value, see [signature algorithm ](https://pass2pay.readme.io/reference/signing-a-request) for details",
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


**Example:**

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
    "wayCode": "ALI_QR",
    "sign": "C380BEC2BFD727A4B6845133519F3AD6"
}
```

After processing, the business system synchronously returns to PassToPay. Returning the string **"success"** means success. Returning non-success means the processing failed. The PassToPay will notify the business system again.

> 🚧 **(Notification frequency is 0/30/60/90/120/150, unit: seconds)**
