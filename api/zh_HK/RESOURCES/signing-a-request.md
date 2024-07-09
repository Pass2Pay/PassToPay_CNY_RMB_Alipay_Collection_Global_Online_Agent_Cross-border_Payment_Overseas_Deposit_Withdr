---
title: "請求簽名"
slug: "signing-a-request"
excerpt: "✍️ 保護您數據隐私和安全"
hidden: false
createdAt: "Fri Mar 08 2024 15:41:38 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Mar 28 2024 01:22:24 GMT+0000 (Coordinated Universal Time)"
---
### 确认 API 簽名

您可以在服务端對請求參數進行簽名並將其新增至請求正文。PayTo Pay將檢查簽名的有效性以確保其未被竄改。如果簽名因任何原因未通過，則請求將被丟棄。

您可以在 商戶後台**商戶中心**->**應用管理**  中找到並設定您的私鑰（[FAQ](https://pass2pay-zh-hk.readme.io/reference/general)）。

PassToPay 默认使用消息摘要MD5算法產生簽名。

**第 1 步：** 對參數進行排序並連接

- 依參數名稱的 ASCII 代碼升序對非空參數值進行排序。
- 將URL鍵值對格式的參數拼接成字串。
- 參數名稱區分大小寫。

**範例**：key1=value1&key2=value2&key3=value3

**第2步**：參數簽名

- 將 StringA 與“&key=”和私鑰連接以獲得 stringSignTemp。
- 計算 stringSignTemp 的 MD5 
- 將產生的MD5值轉換為大寫以獲得簽名結果signValue。

```javascript example
StringA = "key1=value1&key2=value2&key3=value3"
privateKey = "your_private_key"
stringSignTemp = StringA + "&key=" + privateKey
signValue = MD5(stringSignTemp).toUpperCase()

```

**第 3 步**：在請求中添加簽名

將產生的簽名（signValue）加入到請求中的「**sign**」參數。

```json Final Result Example
{
  "amount": 1,
  "mchOrderNo": "mho1694051705945",
  "subject": "Commodity Title",
  "wayCode": "ALI_BAR",
  "sign": "924065BA077FA461A9B06D2E76E9ED3C",
  "reqTime": "1694051706",
  "body": "Commodity Description",
  "version": "1.0",
  "channelExtra": "{"authCode":"284957415846666792"}",
  "appId": "6447428682ca7458118af79f",
  "clientIp": "192.166.1.132",
  "notifyUrl": "https://www.jeequan.com",
  "signType": "MD5",
  "currency": "CNY",
  "mchNo": "M1682391685"
}

```

**您可以[點擊](github.com)這裡取得範例程式碼，幫助您快速實現。**
