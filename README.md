# passtopay-cashier-web-demo

## 項目說明

passtoPay 收銀台 demo

## 安裝

開發：

```bash
yarn
yarn dev
```

用瀏覽器開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

打包：
`yarn build`

## 項目結構

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
