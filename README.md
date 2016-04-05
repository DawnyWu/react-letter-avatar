react-share-buttons
===
一键分享到各大社交网站的react组件

支持微信二维码扫描

![react-share-buttons](https://raw.githubusercontent.com/DawnyWu/react-share-buttons/master/assets/share_buttons%402x.png)

# DEMO

```js
git clone https://github.com/DawnyWu/react-share-buttons.git
npm install
npm start
```
在浏览器中打开 http://localhost:3001 即可查看例子


# 使用

```js
<ShareButtons 
  sites = {["qzone", "weibo", "qq", "tencent", "wechat", "douban" ]}
  url = "https://github.com/DawnyWu/react-share-buttons"
  title = "react-share-buttons"
  description = "一键分享到各大社交网站的react组件"
/>
```

#### props 有如下这些，无特殊要求无需输入，使用默认即可:smile:
```js

sites               : ["qzone", "weibo", "google", "twitter", "qq", 
                       "tencent", "wechat", "douban", "linkedin", "facebook"], // 启用的站点
url                 : '', // 网址，默认使用 window.location.href
source              : '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="https://github.com/DawnyWu/react-share-buttons" />
title               : '', // 标题，默认读取 document.title 或者 <meta name="title" content="react-share-buttons" />
description         : '', // 描述, 默认读取head标签：<meta name="description" content="一键分享到各大社交网站的react组件" />
image               : '', // 图片, 默认取网页中第一个img标签
wechatQrcodeTitle   : '微信扫一扫：分享', // 微信二维码提示文字
wechatQrcodeHelper  : '微信里点“发现”，扫一下二维码便可将本文分享至朋友圈'
```
## Inspired by
[share.js](https://github.com/overtrue/share.js)

[react-recaptcha](https://github.com/appleboy/react-recaptcha)

# License

 MIT


