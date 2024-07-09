---
title: "Payment Method  BackUp"
slug: "payment-method-copy"
excerpt: ""
hidden: true
createdAt: "Fri Mar 15 2024 08:54:24 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Mar 15 2024 08:54:37 GMT+0000 (Coordinated Universal Time)"
---
Below is the list of payment methods supported by PassToPay. Please communicate with the operations personnel before integration to confirm which ones need to be enabled.

| WayCode         | Payment Method                                  |
| --------------- | ----------------------------------------------- |
| CHANNEL_CASHIER | Channel WEB cashier                             |
| WEB_CASHIER     | WEB Cashier                                     |
| QR_CASHIER      | Aggregated code scanning (user scans merchants) |
| AUTO_BAR        | Aggregated barcode (merchant scans user)        |
| ALI_BAR         | Alipay barcode                                  |
| ALI_JSAPI       | Alipay Life Account                             |
| ALI_APP         | Alipay APP                                      |
| ALI_WAP         | Alipay WAP                                      |
| ALI_PC          | Alipay PC website                               |
| ALI_QR          | Alipay QR code                                  |
| WX_BAR          | WeChat barcode                                  |
| WX_JSAPI        | WeChat public account                           |
| WX_LITE         | WeChat Mini Program                             |
| WX_APP          | WeChat APP                                      |
| WX_H5           | WeChat H5                                       |
| WX_NATIVE       | WeChat scan code                                |
| YSF_BAR         | Cloud QuickPass barcode                         |
| YSF_JSAPI       | Cloud QuickPass jsapi                           |
| AUTO_POS        | Smart POS                                       |
| DCEP_BAR        | Digital RMB barcode                             |
| DCEP_QR         | Digital RMB QR code                             |

### channelExtra

When `wayCode=AUTO_BAR` or `wayCode=ALI_BAR` or `wayCode=WX_BAR` or `wayCode=YSF_BAR`, channelExtra must pass auth_code, which is the user's payment code value. ChannelExtra sample data is as follows:

```json
{"authCode": "13920933111042"}
```

When `wayCode=ALI_JSAPI`, channelExtra must pass buyerUserId, which is the Alipay user ID. The example data of channelExtra is as follows:

```json
{"buyerUserId": "2088702585070844"}
```

When `wayCode=WX_JSAPI` or `wayCode=WX_LITE`, channelExtra must pass openid, which is WeChat OpenId. The channelExtra sample data is as follows:

```json
{"openid": "o6BcIwvSiRpfS8e_UyfQNrYuk2LI"}
```

Note: If you are currently a special merchant and the merchant uses its own official account or the openId obtained by the WeChat mini program:  
need: 

1. The merchant’s own official account or the AppId of the WeChat mini program needs to be associated with the service provider. Please contact the CMS for configuration;
2. Add the subAppId parameter to the `channelExtra` parameter. This parameter is the merchant's official account or the AppId of the mini program. Example:

```json
{ "openid": "o6BcIwvSiRpfS8e_UyfQNrYuk2LI", "subAppId": "wx08b5a41f7a27abf1" }
```

When `wayCode=ALI_QR` or `wayCode=WX_NATIVE`, channelExtra can pass the payDataType setting to return the payment data payment type. At this time, payDataType can be: codeUrl - QR code address, codeImgUrl - QR code image address. If payDataType is not passed, the codeUrl type will be returned by default. ChannelExtra sample data is as follows:

```json
{"payDataType": "codeImgUrl"}
```

When `wayCode=QR_CASHIER`, channelExtra can pass payDataType and entryPageType.  
entryPageType specifies that the H5 or WeChat mini program page will be entered when scanning the aggregation code. The default is the H5 page. h5-h5 page, lite-mini program page.  
The payDataType setting returns the payment data payment type. At this time, payDataType can be: codeUrl - QR code address, codeImgUrl - QR code image address. If payDataType is not passed, the codeUrl type will be returned by default. ChannelExtra sample data is such as:

```json
{"payDataType": "codeImgUrl"}
```

When `wayCode=ALI_WAP`, channelExtra can pass the payDataType setting to return the payment data payment type. At this time, the payDataType can be: form-returns the automatic jump payment form, codeImgUrl-returns a QR code image URL, payUrl-returns the payment link. If payDataType is not passed, the payUrl type is returned by default. ChannelExtra sample data is such as:

```json
{"payDataType": "form"}
```

When `wayCode=ALI_PC`, channelExtra can pass the payDataType setting to return the payment data payment type. At this time, payDataType can be: form-returns the payment form that automatically jumps, payUrl-returns the payment link, if payDataType is not passed, the payUrl type is returned by default, channelExtra sample data is such as:

```json
{"payDataType": "form"}
```

***
