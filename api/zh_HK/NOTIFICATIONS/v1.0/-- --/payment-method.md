---
title: "支付方式"
slug: "payment-method"
excerpt: ""
hidden: false
createdAt: "Wed Mar 13 2024 08:28:41 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue May 28 2024 02:02:37 GMT+0000 (Coordinated Universal Time)"
---
以下是 PassToPay 支持的支付方式清單。接入前前請與營運人員溝通確認哪些需要開啟。

| WayCode     | 支付方式   | 说明                   |
| ----------- | ------ | :------------------- |
| **ALI_WAP** | 支付寶WAP | 在移动设备上唤起支付宝进行支付      |
| **ALI_QR**  | 支付寶二維碼 | 返回一个付款二维码，客户通过扫码进行支付 |

> 支付訂單 channelExtra 參數說明

當`wayCode=ALI_QR`時，channelExtra可以傳送payDataType設定傳回支付資料支付類型。此時payDataType可以為：

- codeImgUrl-二維碼圖片URL地址
- codeUrl：二維碼URL地址

不傳payDataType預設回傳codeUrl類型,

 默認為codeUrl，例子：

```json
{
    "code": 0,
    "data": {
        "mchOrderNo": "M17168114225039999",
        "orderState": 1,
        "payData": "https://qr.alipay.com/api/scan/imgs/5e6c6fc0ec11f0881620ec2638d899cd.png",
        "payDataType": "codeUrl",
        "payOrderId": "P1795063328371040258"
    },
    "msg": "SUCCESS",
    "sign": "78A4188E74EE008D7A1B2E2FD95F122D",
    "traceId": "a8fab5a4935c433381d90fcdda917552"
}
```

當`wayCode=ALI_WAP`時，channelExtra可以傳payDataType設定返回支付資料支付類型。此時payDataType可以為：

- codeImgUrl :傳回一個二維碼圖片URL
- payUrl: 返回支付跳轉鏈接

默認為payUrl，例子：

```json
{
    "code": 0,
    "data": {
        "mchOrderNo": "M17168114225039999",
        "orderState": 1,
        "payData": "https://qr.alipay.com/02xasassw1w2",
        "payDataType": "payUrl",
        "payOrderId": "P1795063328371040258"
    },
    "msg": "SUCCESS",
    "sign": "78A4188E74EE008D7A1B2E2FD95F122D",
    "traceId": "a8fab5a4935c433381d90fcdda917552"
}
```
