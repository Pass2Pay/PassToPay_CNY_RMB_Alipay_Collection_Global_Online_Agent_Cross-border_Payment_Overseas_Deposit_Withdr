# PassTo Pay

<p>
<a href="https://www.gnu.org/licenses/gpl-3.0.html"><img src="https://img.shields.io/badge/license-GPLV3-blue" alt="license GPLV3"></a>
<a href="https://github.com/assimon/dujiaoka/releases/tag/1.0.0"><img src="https://img.shields.io/badge/version-1.0.0-red" alt="version 1.0.0"></a>
</p>
<h2 align="center"> 简体中文 | <a href="README_hk.md">繁體中文</a>  | <a href="README.md">English</a></h2>

## PassTo Pay - `聚合支付`助你快速拓展业务

> [PassTo Pay](https://passtopay.io)是一个聚合支付第三方平台,为经营各类业务的商户提供支付宝、微信、云闪付直接收款,二维码扫码收款,接纳各种银行卡、信用卡,帮助商户快速处理人民币收付流程

## 适用场景

- 在线金融收付款,接受付款、发送付款,最终实现财务流程提供便捷、亚太、安全和实时的支付解决方案
- 跨境电商收付款,独立站收款结算,十五分钟付款时长稳定高效实时掌控您的业务
- 线上游戏收付款,支持小额多笔同时收款,实时收款状态快速轻松地向远程异地收款

## 我要体验一笔收银台订单

尝试支付 ¥0.01 体验 PASSTO PAY 支付宝代收流程

![][link_cashier_btn]

![][link_cashier]

## 我要体验商户后台

使用商户试用账户,查看商户后台功能

[![][link_backend_btn]](https://mch.ylbhd.com/login?type=demo)

![][link_backend]

## 开源免费收银台

- 支持私有化部署的开源免费收银台源代码
- 完美支持 PassTo Pay 的商户对接流程
- 提供完整的支付宝收银台前端样式代码
- 遵守 [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html) 开源协议

## frontend端 收银台项目结构

```
frontend
├── api                  # API 控制器目录
│   ├── [**.ts]
│   ├── types.ts
├── components           # 组件库
│   ├── btn                 # 按钮
│   ├── countdown           # 倒计时
│   ├── modal               # 弹窗
│   ├── pay              # 数据库相关目录
│   │   ├── loading.tsx     # loading组件
│   │   ├── order.tsx       # 订单详情
│   │   ├── pay.tsx         # 下单支付页
│   ├── qrcode           # 二维码组件
├── hooks                # 单元测试目录
│   ├── useCopy.ts       # 复制方法
│   └── useIsMobile.ts   # 移动端判断
├── layout                # 单元测试目录
│   ├── basicLayout.tsx   # 公共模板
├── pages                # 页面
├── public               # 资源目录
│   ├── images           # 图片
│   └── locales          # 语言包
│   └── scss             # 通用样式
├── utils                # 方法类
│   ├── calculation.ts   # 计算类方法
│   └── common.ts        # 常用方法
│   └── request.ts       # 请求方法
│   └── toast.tsx        # toast
├── .env                 # 环境变量配置文件
│   ├── NEXT_PUBLIC_apiURL  #  为收银台API地址
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

- 开发：

```bash
yarn
yarn dev
```

用浏览器开启 http://localhost:3000(http://localhost:3000) 查看结果。
- 打包：
  `yarn build`



## server端 收银台项目结构

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

├── application.yml      # 配置文件,配置商户号等

```


### 开发调试

- 安装JDK：`JDK1.8`
- 安装maven
- run CashierServer.java 类中的main方法

用浏览器开启 [http://localhost:8080/doc.html](http://localhost:8080/doc.html) 查看结果。



## 部署：

- 打包：
  `使用maven 完成打包`
- target目录下：
  - cashier-server.jar
- 启动服务：
  `java -jar cashier-server.jar`


## 加入交流/意見反饋



## 商戶 API 接口

- [创建支付订单](https://passtopay.io/api-f70d29f5231b483da80c5c21d98cb594)
- [查询支付订单](https://passtopay.io/api-f70d29f5231b483da80c5c21d98cb594)
- [创建转帐订单](https://passtopay.io/api-f70d29f5231b483da80c5c21d98cb594)
- [查询转帐订单](https://passtopay.io/api-f70d29f5231b483da80c5c21d98cb594)

更多接口详情访问：https://passtopay.io




[link_cashier]: frontend/public/screenshot/img01.png
[link_cashier_btn]: frontend/public/screenshot/btn-cashier.jpg
[link_backend]: frontend/public/screenshot/img03.png
[link_backend_btn]: frontend/public/screenshot/btn-backend.jpg
[link_end]: frontend/public/screenshot/img02.png
