---
title: "FAQ"
slug: "general"
excerpt: "🤔 Any questions?"
hidden: false
createdAt: "Sun Mar 10 2024 03:04:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Mar 27 2024 11:41:08 GMT+0000 (Coordinated Universal Time)"
---
### 1. How to find the appId

You can log in to the  management backend, find your application list under the left menu **Merchant Center **-> **Application Management**, and view your app ID.

refer to the following image:

![](https://files.readme.io/c2dd289-image.png)

### 2.How to find the Private Key for sign

You can log in to your management backend, go to **Merchant Center** -> **Application Management,** find the corresponding application, click on '**Signature Configuration**' in the action column, then you can view and modify your private key information.

refer to the following image:

![](https://files.readme.io/42e0396-image.png)

### 3. How to validate  configuration is correct

In your merchant management backend, there is a feature for conducting payment tests. Please refer to the following steps:

1. Go to the menu page Merchant Center -> **Payment Test**.
2. Select the **application** you want to test.
3. Choose the **payment method**, such as Unified Cashier or Alipay QR Code.
4. Enter the payer's name, for example, Zhang San.
5. Click on **Pay Now**. 

If your configuration is correct, you will see the correct cashier page. **(QR code payment method will display the collection code, Unified Cashier will redirect to the test cashier page)**

![](https://files.readme.io/425a319-image.png)

### 4. Can I experience the payment process?

Of course, you can. Through the **payment test **mentioned above, you can directly experience small-scale payments on the generated cashier page or use scan-to-pay.

### 5.Is it possible to provide an integration demo?

Yes, we will gradually release request demos and SDKs for various languages on GitHub. 

[Java request demo](https://github.com/Pass2Pay/api_sign_demo)

[web cashier demo](https://github.com/Pass2Pay/cashier_web_demo)

### 6. Why can't I see some menus

Each merchant's administrator account can create login accounts for other personnel and assign them different menu permissions.You can contact the administrator to modify your permissions.
