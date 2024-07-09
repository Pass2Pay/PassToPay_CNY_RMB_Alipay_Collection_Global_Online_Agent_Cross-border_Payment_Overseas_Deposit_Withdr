# PassTo Pay

<p>
<a href="https://www.gnu.org/licenses/gpl-3.0.html"><img src="https://img.shields.io/badge/license-GPLV3-blue" alt="license GPLV3"></a>
<a href="https://github.com/assimon/dujiaoka/releases/tag/1.0.0"><img src="https://img.shields.io/badge/version-1.0.0-red" alt="version 1.0.0"></a>
</p>

<h2 align="center"> <a href="README_zh.md">简体中文</a> | 繁體中文  | <a href="README.md">English</a></h2>

## PassTo Pay - `聚合支付`助你快速拓展業務

> [PassTo Pay](https://passtopay.io)是一個聚合支付第三方平臺，為經營各類業務的商戶提供支付寶、微信、雲閃付直接收款，二維碼掃碼收款，接納各種銀行卡、信用卡，幫助商戶快速處理人民幣收付流程

## 適用場景

- 在綫金融收付款，接受付款、發送付款，最終實現財務流程提供便捷、亞太、安全和實時的支付解決方案
- 跨境電商收付款，獨立站收款結算，十五分鐘付款時長穩定高效實時掌控您的業務
- 綫上游戲收付款，支持小額多筆同時收款，實時收款狀態快速輕鬆地向遠程異地收款

## 我要體驗一筆收銀檯訂單

嘗試支付 ¥0.01 體驗 PASSTO PAY 支付寶代收流程

![][link_cashier_btn]

![][link_cashier]

## 我要體驗商戶後臺

使用商戶試用賬戶，查看商戶後臺功能

[![][link_backend_btn]](https://mch.ylbhd.com/login?type=demo)

![][link_backend]

## 開源免費收銀檯

- 支持私有化部署的開源免費收銀檯源代碼
- 完美支持 PassTo Pay 的商戶對接流程
- 提供完整的支付寶收銀檯前端樣式代碼
- 遵守 [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html) 開源協議

## frontend端 收銀檯項目結構

```
frontend
├── api                  # API 控制器目录
│   ├── [**.ts]
│   ├── types.ts
├── components           # 組件庫
│   ├── btn                 # 按鈕
│   ├── countdown           # 倒計時
│   ├── modal               # 彈窗
│   ├── pay              # 数据库相关目录
│   │   ├── loading.tsx     # loading組件
│   │   ├── order.tsx       # 訂單詳情
│   │   ├── pay.tsx         # 下單支付頁
│   ├── qrcode           # 二維碼組件
├── hooks                # 单元测试目录
│   ├── useCopy.ts       # 複製方法
│   └── useIsMobile.ts   # 移動端判斷
├── layout                # 单元测试目录
│   ├── basicLayout.tsx   # 公共模板
├── pages                # 頁面
├── public               # 資源目錄
│   ├── images           # 圖片
│   └── locales          # 語言包
│   └── scss             # 通用樣式
├── utils                # 方法類
│   ├── calculation.ts   # 計算類方法
│   └── common.ts        # 常用方法
│   └── request.ts       # 請求方法
│   └── toast.tsx        # toast
├── .env                 # 环境变量配置文件
│   ├── NEXT_PUBLIC_apiURL  #  為收銀台API地址
├── .gitignore
```

### 開發調試

- 安裝依賴包：`yarn`
- 本地調試：`yarn serve`
- 打包編譯：`yarn build`

### 使用說明

- 模擬生成訂單頁： `http://localhost:8000/generateOrder`

  輸入參數來生成訂單，得到一個 url 地址，比如 `http://localhost:8000?oid=XXXXXXXXXXXXXXX`

- 收銀台頁： `http://localhost:8000?oid=XXXXXXXXXXXXXXX`

  - 展示訂單信息及二維碼收款地址
  - 頁面會根據支付結果展示不同的訂單狀態

## 部署教程：

- 開發：

```bash
yarn
yarn dev
```

用瀏覽器開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

- 打包：
  `yarn build`



## server端 收銀檯項目結構

```
server
├── bean                 # 异常和请求的Bean
│   ├── [**.ts]
│   ├── types.ts
├── config               # 请求api的配置参数
│   
├── ctrl                 # 下单等相关接口
│   ├── PayNotifyCtrl    # 回调接口列子
│   └── UnifiedOrderCtrl # 下单接口
├── dto                  # 请求相应封装的DTO
│   
├── utils                # 相关工具类
│  
├──CashierServer         # 启动类

├── application.yml      # 配置文件，配置商户号等
```

### 開發調試

- 安裝JDK：`JDK1.8`
- 安裝maven
- run CashierServer.java 类中的main方法

用瀏覽器開啟 [http://localhost:8080/doc.html](http://localhost:8080/doc.html) 查看結果。


## 部署：

- 打包：
  `使用maven 完成打包`
- target目录下：
  - cashier-server.jar
- 启动服务：
  `java -jar cashier-server.jar`


## 加入交流/意見反饋


## 商戶 API 接口

- [創建支付訂單](https://passtopay.io/api-f70d29f5231b483da80c5c21d98cb594)
- [查詢支付訂單](https://passtopay.io/api-f70d29f5231b483da80c5c21d98cb594)
- [創建轉帳訂單](https://passtopay.io/api-f70d29f5231b483da80c5c21d98cb594)
- [查詢轉帳訂單](https://passtopay.io/api-f70d29f5231b483da80c5c21d98cb594)

更多接口詳情訪問：https://passtopay.io




[link_cashier]: frontend/public/screenshot/img01.png
[link_cashier_btn]: frontend/public/screenshot/btn-cashier.jpg
[link_backend]: frontend/public/screenshot/img03.png
[link_backend_btn]: frontend/public/screenshot/btn-backend.jpg
[link_end]: frontend/public/screenshot/img02.png
