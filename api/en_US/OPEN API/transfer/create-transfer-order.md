---
title: "Create Transfer Order"
slug: "create-transfer-order"
excerpt: ""
hidden: false
createdAt: "Thu Mar 14 2024 01:14:57 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Apr 09 2024 03:31:39 GMT+0000 (Coordinated Universal Time)"
---
The merchant system initiates a transfer request through the transfer API, and the PassToPay payment gateway will pass the request data to the corresponding upstream interface.

Request Path: /api/transferOrder

Request method: `POST`

Request type: `application/json` or `application/x-www-form-urlencoded`

### Request Parameter:

| Parameter    | Description                                                                                                                  | Example value                                                                                                                                                |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| mchNo        | **required**.Merchant Number                                                                                                 | M1621873433953                                                                                                                                               |
| appId        | **required**.App ID                                                                                                          | 60cc09bce4b0f1c0b83761c9                                                                                                                                     |
| mchOrderNo   | **required**.Transfer order number generated by the merchant                                                                 | 20160427210604000490                                                                                                                                         |
| entryType    | **required**.Entry method: BANK_CARD: bank card,                                                                             | BANK_CARD                                                                                                                                                    |
| amount       | **required**.Transfer amount, unit cent                                                                                      | 100                                                                                                                                                          |
| currency     | **required**.Three-digit currency code, RMB: cny                                                                             | cny                                                                                                                                                          |
| accountNo    | **required**. The receiving bank card number                                                                                 | 0213123                                                                                                                                                      |
| accountName  | If you fill in, the name will be verified, otherwise it will not be verified.                                                | Zhang San                                                                                                                                                    |
| bankName     | Currently only for records                                                                                                   | Industrial and Commercial Bank of China                                                                                                                      |
| clientIp     | **required**.Client IPV4 address                                                                                             | 210.73.10.148                                                                                                                                                |
| transferDesc | Transfer remark information,fixed: 0                                                                                         | 0                                                                                                                                                            |
| notifyUrl    | This URL will be called back after the transfer is completed. Only when this value is passed will the callback be initiated. | <https://www.passtopay.com/notify.htm>                                                                                                                       |
| channelExtra | Specific Additional parameters initiated by the channel, json format string                                                  | {"custNo":"Customer number","telNo":"Mainland mobile phone number, no area code required","cardNo":"Mainland ID card number",bankCode:"Receiving bank code"} |
| extraParam   | Merchant extended parameters, which will be returned unchanged during callback                                               | 134586944573118714                                                                                                                                           |
| reqTime      | **required**.Request interface time, 13-digit timestamp                                                                      | 1622016572190                                                                                                                                                |
| version      | **required**.Interface version number, fixed: 1.0                                                                            | 1.0                                                                                                                                                          |
| sign         | **required**.Signature value, see [signature algorithm](https://pass2pay.readme.io/reference/signing-a-request) for details  | C380BEC2BFD727A4B6845133519F3AD6                                                                                                                             |
| signType     | **required**.Signature type, currently only supports MD5 method                                                              | MD5                                                                                                                                                          |

**example:**

```json
{
  
   "entryType": "BANK_CARD",
    "amount": 1,
    "mchOrderNo": "M17109199244737290",
    "transferDesc": "转账",
    "reqTime": 1622016572190,
    "version": "1.0",
    "appId": "65f41f790b0abacb7b995e63",
    "accountName": "田全深",
    "accountNo": "6216698100001726141",
    "clientIp": "192.166.1.132",
    "signType": "MD5",
    "currency": "CNY",
    "mchNo": "M1710497657",
    "channelExtra": "{\"custNo\":\"86000002\",\"telNo\":\"12342323132\",\"cardNo\":\"142301198209293177\",\"bankCode\":\"01020000\"}"
}
```

### Response Parameter:

[block:parameters]
{
  "data": {
    "h-0": "Parameter ",
    "h-1": "Description",
    "h-2": "Sample value",
    "0-0": "code",
    "0-1": "**required**.0: processing successful,  \nother :processing error, see error code for details",
    "0-2": "0",
    "1-0": "msg",
    "1-1": "**required**.Specific error reasons, such as: signature failure, parameter format verification error",
    "1-2": "Signing failure",
    "2-0": "sign",
    "2-1": "**required**.Sign the data in data. If data is empty, it will not be returned.",
    "2-2": "CCD9083A6DAD9A2DA9F668C3D4517A84",
    "3-0": "data",
    "3-1": "**required**.Return order data, json format data",
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


**Data Parameter:**

[block:parameters]
{
  "data": {
    "h-0": "Parameter ",
    "h-1": "Description",
    "h-2": "Sample value",
    "0-0": "transferId",
    "0-1": "**required**.Return transfer order number",
    "0-2": "T202108161731281310004",
    "1-0": "mchOrderNo",
    "1-1": "**required**.Returns the transfer order number passed in by the merchant",
    "1-2": "mho1624007315478",
    "2-0": "state",
    "2-1": "**required**.Transfer status  \n0: Order generated  \n1: Transfer in progress  \n2: Transfer successful  \n3: Transfer failed  \n4:Transfer closed",
    "2-2": "2",
    "3-0": "channelOrderNo",
    "3-1": "The transfer order number of the corresponding channel",
    "3-2": "20160427210604000490",
    "4-0": "errCode",
    "4-1": "Error code returned by the upstream channel",
    "4-2": "ACQ.PAYMENT_AUTH_CODE_INVALID",
    "5-0": "errMsg",
    "5-1": "Error description returned by the upstream channel",
    "5-2": "Business Failed "
  },
  "cols": 3,
  "rows": 6,
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
