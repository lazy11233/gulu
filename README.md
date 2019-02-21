# gulu--基于Vue.js的UI框架
[![Build Status](https://travis-ci.org/lazy11233/gulu.svg?branch=master)](https://travis-ci.org/lazy11233/gulu)
[![npm version](https://badge.fury.io/js/lz-gulu.svg)](https://badge.fury.io/js/lz-gulu)
## 介绍
这是我在学习 vue 过程中制作的 UI 框架。希望对你有用    
## 开始使用
1. 安装
使用本框架前，请在 css 中开启 border-box
```css
*, *::before, *::after {
    box-sizing: border-box;
}
```
在使用本框架前，保证 npm 和 git 都已安装。
```bash
npm install --save lz-gulu
```
引入 gulu 
```vue
import { Button, ButtonGroup, Icon } from 'lz-gulu';
import lz-gulu/dist/index.css;

export default {
  components: {
    'g-button': Button,
    'g-button-group': ButtonGroup,
    'g-icon': Icon
  }
}

``` 
引入 svg link
```html
<script src="//at.alicdn.com/t/font_919452_b00hv4mtei.js"></script>
``` 
## 文档

## 问答

