---
title: "Payment Method"
slug: "payment-method"
excerpt: ""
hidden: false
createdAt: "Wed Mar 13 2024 08:28:41 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Mar 21 2024 03:06:39 GMT+0000 (Coordinated Universal Time)"
---
Below is the list of payment methods supported by PassToPay. Please communicate with the operations personnel before integration to confirm which ones need to be enabled.

| WayCode | Payment Method |
| ------- | -------------- |
| ALI_WAP | Alipay WAP     |
| ALI_QR  | Alipay QR code |

### channelExtra

When `wayCode=ALI_QR` , channelExtra can pass the payDataType setting to return the payment data payment type. At this time, payDataType can be: codeUrl - QR code address, codeImgUrl - QR code image address. If payDataType is not passed, the codeUrl type will be returned by default. ChannelExtra sample data is as follows:

```json
{"payDataType": "codeImgUrl"}
```

When `wayCode=ALI_WAP`, channelExtra can pass the payDataType setting to return the payment data payment type. At this time, the payDataType can be: form-returns the automatic jump payment form, codeImgUrl-returns a QR code image URL, payUrl-returns the payment link. If payDataType is not passed, the payUrl type is returned by default. ChannelExtra sample data is such as:

```json
{"payDataType": "form"}
```

***
