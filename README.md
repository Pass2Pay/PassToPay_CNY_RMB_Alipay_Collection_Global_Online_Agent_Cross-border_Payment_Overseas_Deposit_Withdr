# PassTo Pay

<p>
<a href="https://www.gnu.org/licenses/gpl-3.0.html"><img src="https://img.shields.io/badge/license-GPLV3-blue" alt="license GPLV3"></a>
<a href="https://github.com/assimon/dujiaoka/releases/tag/1.0.0"><img src="https://img.shields.io/badge/version-1.0.0-red" alt="version 1.0.0"></a>
</p>

## PassTo Pay - `聚合支付`助你快速拓展業務

> [PassTo Pay](https://passtopay.io)是一個聚合支付第三方平臺，為經營各類業務的商戶提供支付寶、微信、雲閃付直接收款，二維碼掃碼收款，接納各種銀行卡、信用卡，幫助商戶快速處理人民幣收付流程

## 適用場景

- 在綫金融收付款，接受付款、發送付款，最終實現財務流程提供便捷、亞太、安全和實時的支付解決方案
- 跨境電商收付款，獨立站收款結算，十五分鐘付款時長穩定高效實時掌控您的業務
- 綫上游戲收付款，支持小額多筆同時收款，實時收款狀態快速輕鬆地向遠程異地收款

## 我要體驗一筆收銀檯訂單

嘗試支付 ¥0.01 體驗 PASSTO PAY 支付寶代收流程

![][link_cashier]

## 我要體驗商戶後臺

使用商戶試用賬戶，查看商戶後臺功能

[![][link_backend]](https://mch.ylbhd.com/login?type=demo)

## 開源免費收銀檯

- 支持私有化部署的開源免費收銀檯源代碼
- 完美支持 PassTo Pay 的商戶對接流程
- 提供完整的支付寶收銀檯前端樣式代碼
- 遵守 [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html) 開源協議

## 收銀檯項目結構

```
project
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

## 加入交流/意見反饋

- Telegram：https://t.me/PayCool_Erik
- Email：erik.wang@chixi88.com

## 商戶 API 接口

- [創建支付訂單](https://passtopay.io/f70d29f5231b483da80c5c21d98cb594?pvs=25)
- [查詢支付訂單](https://passtopay.io/f70d29f5231b483da80c5c21d98cb594?pvs=25)
- [創建轉帳訂單](https://passtopay.io/f70d29f5231b483da80c5c21d98cb594?pvs=25)
- [查詢轉帳訂單](https://passtopay.io/f70d29f5231b483da80c5c21d98cb594?pvs=25)
  更多接口詳情訪問：https://passtopay.io

產品結束占位圖 2

## AD -- PassTo-多種資產抵押信用卡

> 無上限信用額 單筆消費可達$5,000,000  
> 信用額度按照抵押品價格而設定，支持：證券、物業、貴金屬、數字資產等  
> 可绑微信、支付宝、美区 AppStore 消费  
> [點擊領取你的國際信用卡](https://passtocredit.io/)

## AD -- BlockATM-智能合約收付款解決方案

> 完全去中心化的商戶收付款方式  
> 使用智能合約進行資金的安全管理  
> 使用費率比 fireBlocks 和 metaMask 都低  
> [點擊創建你的智能合約櫃檯](https://www.blockatm.net/)

[link_cashier]: public/screenshot/img01.png
[link_backend]: public/screenshot/img02.png
