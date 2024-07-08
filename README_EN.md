# PassTo Pay

<p>
<a href="https://www.gnu.org/licenses/gpl-3.0.html"><img src="https://img.shields.io/badge/license-GPLV3-blue" alt="license GPLV3"></a>
<a href="https://github.com/assimon/dujiaoka/releases/tag/1.0.0"><img src="https://img.shields.io/badge/version-1.0.0-red" alt="version 1.0.0"></a>
</p>
<h2 align="center" > <a href="README.md" h>繁體中文 </a> | English</h2>
## PassTo Pay - Aggregate Payment Solutions to Expand Your Business Rapidly

> [PassTo Pay](https://passtopay.io) is an aggregate third-party payment platform that provides merchants operating various businesses with direct collection of Alipay, WeChat Pay, and UnionPay QuickPass. It supports QR code payments and accepts various bank cards and credit cards, helping merchants efficiently manage their RMB payment processes.

## Applicable Scenarios

- Online financial payments, accepting and sending payments to achieve financial processes, providing convenient, Asia-Pacific, secure, and real-time payment solutions.
- Cross-border e-commerce payments, independent site collections and settlements, completing payments within 15 minutes, ensuring stable and efficient control of your business.
- Online gaming payments, supporting small and multiple payments simultaneously, quickly and easily receiving payments remotely.

## Experience a Cashier Order

Try paying ¥0.01 to experience the PASSTO PAY Alipay collection process.

![Cashier Button][link_cashier_btn]

![Cashier][link_cashier]

## Experience Merchant Backend

Use the merchant trial account to access and explore the functionalities of the merchant backend.

[![Backend Button][link_backend_btn]](https://mch.ylbhd.com/login?type=demo)

![Backend][link_backend]

## Open-Source Free Cashier

- Supports the deployment of open-source and free cashier source code for private use

## Frontend Cashier Project Structure

```
frontend
├── api                  # API controllers directory
│   ├── [**.ts]
│   ├── types.ts
├── components           # Component library
│   ├── btn                 # Button
│   ├── countdown           # Countdown
│   ├── modal               # Modal
│   ├── pay              # Directory for database-related components
│   │   ├── loading.tsx     # Loading component
│   │   ├── order.tsx       # Order details
│   │   ├── pay.tsx         # Order payment page
│   ├── qrcode           # QR code component
├── hooks                # Unit testing directory
│   ├── useCopy.ts       # Copy method
│   └── useIsMobile.ts   # Mobile device detection
├── layout                # Layout directory
│   ├── basicLayout.tsx   # Common template
├── pages                # Pages
├── public               # Resources directory
│   ├── images           # Images
│   └── locales          # Language packs
│   └── scss             # Common styles
├── utils                # Utility methods
│   ├── calculation.ts   # Calculation methods
│   └── common.ts        # Common methods
│   └── request.ts       # Request methods
│   └── toast.tsx        # Toast
├── .env                 # Environment variable configuration file
│   ├── NEXT_PUBLIC_apiURL  # Cashier API URL
├── .gitignore
```

### Development and Debugging

- Install dependencies: `yarn`
- Local debugging: `yarn serve`
- Build and compile: `yarn build`

### Usage Instructions

- Simulate order generation page: `http://localhost:8000/generateOrder`

  Enter parameters to generate an order and obtain a URL address, for example, `http://localhost:8000?oid=XXXXXXXXXXXXXXX`

- Cashier page: `http://localhost:8000?oid=XXXXXXXXXXXXXXX`

  - Display order information and QR code payment address
  - The page will show different order statuses based on the payment result

## Deployment Tutorial:

- Development:

```bash
yarn
yarn dev
```


Open http://localhost:3000 in your browser to see the result.

- Build：
  `yarn build`



## Server-side Cashier Project Structure

```
server
├── bean                 # Beans for exceptions and requests
│   ├── [**.ts]
│   ├── types.ts
├── config               # Configuration parameters for API requests
│   
├── ctrl                 # Controllers for placing orders and more
│   ├── PayNotifyCtrl    # Example callback interface
│   └── UnifiedOrderCtrl # Order placement interface
├── dto                  # DTOs for request and response encapsulation
│   
├── utils                # Utility classes
│  
├──CashierServer         # Main class to start the server

├── application.yml      # Configuration file for merchant settings, etc.
```

### Development and Debugging

Install JDK: JDK1.8
Install Maven
Run the CashierServer.java class with the main method

Open http://localhost:8080/doc.html in your browser to see the result.


## Deployment：

- Build：
  Use Maven to complete the build
- In the target directory:
  - cashier-server.jar
- Start the server:
  `java -jar cashier-server.jar`


## Join the Discussion/Feedback

- Telegram：https://t.me/PayCool_Erik
- Email：erik.wang@chixi88.com

## Merchant API Interfaces

- [Create Payment Order](https://passtopay.io/api-f70d29f5231b483da80c5c21d98cb594)
- [Query Payment Order](https://passtopay.io/api-f70d29f5231b483da80c5c21d98cb594)
- [Create Transfer Order](https://passtopay.io/api-f70d29f5231b483da80c5c21d98cb594)
- [Query Transfer Order](https://passtopay.io/api-f70d29f5231b483da80c5c21d98cb594)

For more details on the API interfaces, please visit: https://passtopay.io


[link_cashier]: frontend/public/screenshot/img01.png
[link_cashier_btn]: frontend/public/screenshot/btn-cashier.jpg
[link_backend]: frontend/public/screenshot/img03.png
[link_backend_btn]: frontend/public/screenshot/btn-backend.jpg
[link_end]: frontend/public/screenshot/img02.png
