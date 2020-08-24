---
title: css相关汇总
passwd: ''
date: 2020-08-24 21:51:51
tags: [html/css, 梳理]
categories: 前端知识
---
{% asset_img CSS3.png This is an image %}
# CSS/CSS3

绿色字体为css3
蓝色字体为两者都有
<!--more-->
## 基础选择器

### 标签选择器

### 类选择器

### id选择器

### 通配符选择器

### 属性选择器

- E[att]
- E[att="val"]
- E[att^="val"]
- E[att$="val"]
- E[att*="val"]

## 复合选择器

### 后代选择器

- 例：ol li

### 子选择器

- 例：ol>li

### 并集选择器

- ul, div, .test

### 伪类选择器

- 链接伪类选择器

	- a:hover
	- a:link
	- a:visited
	- a:active
	- 注意事项：声明顺序LVHA

- focus 伪类选择器

	- :focus（一般情况input类表单元素才能获取焦点）

### 结构伪类选择器

nth 
n可以是数字，关键字和公式。
n如果是数字， 就是选择第n个子元素，从n开始。
n可以是关键字：even 偶数，odd 奇数。
n可以是公式，此情况下，从0开始计算，0与超出元素长度的部分会被忽略。
2n
2n + 1
5n
n + 5
-n + 5

- E:first-child
- E:last-child
- E:nth-child(n)
- E:first-of-type
- E:last-of-type
- E:nth-of-type(n)

## 字体属性

### font-family

### font-size

### font-weight

### font-style

- normal
- italic

### 复合写法

- font: font-style font-weight font-size/line-height font-family;

## 文本属性

### color

- 预定义颜色
- 十六进制
- rgb, rgba

### text-align

- left
- right
- center

### text-decoration

- none
- underline
- overline
- line-through

### text-indent

### line-height

- 文本垂直居中

### text-shadow: h-shadow v-shadow blur color;

## css引入方式

### 行内样式表

### 内部样式表

### 外部样式表

## Emmet语法（vscode集成）

### $符号自增

### 兄弟关系 +

### 内部内容 {}

## 元素显示模式

### 块级元素

- 独占一行
- 高宽边距可控制
- 宽度默认父级容器100%
- 是一个容器

	- 文字类块级标签不能存放其他块级元素

### 行内元素

- 相邻行内元素在同一行
- 直接设置高宽无效
- 默认宽度内容宽度
- 只能容纳文本和其他行内元素
- 特殊情况<a>中可以存放块级元素

### 行内块元素

- 一行能显示多个，但中间会有空白缝隙
- 默认宽度内容宽度
- 可设置宽高边距行高

## 背景

### background-color

- transparent | color

### background-image

- none | url

### background-repeat

- repeat | no-repeat | repeat-x | repeat-y

### background-position: x y;

- length | position

  position 
  top | center | bottom | left | center | right

### background-attachment

- scroll | fixed

### background: color url repeat attachment position

## 三大特性

### 层叠性

- 就近原则

### 继承性

- text- , font-, line-, color等

	- 行高/写法能自动调整

### 优先级

- 继承或者*

	- 0,0,0,0

- 元素选择器

	- 0,0,0,1

- 类选择器，伪类选择器,  属性选择器

	- 0,0,1,0

- ID选择器

	- 0,1,0,0

- 行内样式

	- 1,0,0,0

- !important

	- inf

- 复合选择器权重叠加

## 盒模型

布局前，最好先清除内外边距

### border

边框影响盒子实际大小

- width
- style

	- none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset

- color
- collapse

	- collapse

	  相邻边框合并

- radius: length

  可以分别跟4个值
  左上 右上 右下 左下
  参数能为数值或者百分比

### padding

1个值  所有内边距
2个	上下， 左右
3个	上， 左右， 下
4个 上右下左
会影响盒子实际大小
盒子本身没有指定（继承）width/height时， padding不会撑开盒子大小

- left | top | bottom | right

### margin

- left | top | bottom | right
- 外边距合并

	- 当上下两个相邻兄弟块级元素相遇时，如果上面优margin-bottom，下面有margin-top，则他们之间的垂直间距取两个值的较大者。

- 嵌套块级元素垂直外边距的塌陷

	- 对于两个嵌套关系(父子关系)的块元素，父元素与子元素都有上外边距，此时父元素会塌陷较大的外边距值

		- 为父元素定义上边框
		- 为父元素定义上内边距
		- 为父元素添加overflow: hidden

### box

- shadow: h-shadow v-shadow blur spread color inset;
- sizing

	- content-box(默认)
	- border-box

## 浮动

浮动特性
脱离标准流
一行内显示且元素顶部对齐
浮动元素会具有行内块元素特性

### folat: none | left | right

### 清除浮动

- clear: left | right | both
- 额外标签法

  额外标签法会在浮动元素末尾添加一个空标签。例如<div style="clear:both"></div>。新标签需为块级元素。

- 父级元素添加overflow
- :after伪元素法

  .clearfix:after {
  	content: "";
  	display: block;
  	height: 0;
  	clear: both;
  	visibility: hidden;
  }
  
  .clearfix {
  	*zoom: 1;
  }

- 双伪元素

  .clearfix:before,.clearfix:after {
  	content:"";
  	display:table;
  }
  .clearfix:after {
  	clear:both;
  }
  .clearfix {
  	*zoom: 1;
  }

## 定位 position

行内元素添加绝对或者固定定位，可直接设置宽高。
块级元素添加绝对或者固定定位，如果不给宽高，默认大小是内容大小。
脱标的元素都不会触发外边距合并的问题。
浮动不会压住底下盒子的文字，绝对定位和固定定位会完全压住。

### 位偏移

- top | bottom | left | right

### static

### relative

- 保留原来位置
- 相对原来位置移动

### absolute

- 脱离标准流
- 相对于有定位的祖先元素移动(没有时相对浏览器)

### fixed

- 相对浏览器
- 脱标

### sticky

- 相对可视窗口
- 不脱标
- 必须添加一个位偏移才生效
- 和页面滚动搭配使用

### 子绝父相

### 叠放次序 z-index

## 元素显示与隐藏

### display

### visibility

元素隐藏后继续占有位置。

- visible
- hidden

### overflow

- visible | auto | hidden | scroll

## 居中相关

### 单行文字垂直居中

- 行高设置为元素高度

### 块级元素水平居中

- 盒子指定宽度，左右margin设为auto

### 行内元素以及行内块元素水平居中

- 父级元素添加text-align: center

### 绝对定位元素居中

- left: 50%; transform: translateX(-50%);

## 一些css3特性（待续）

### filter

### calc

例：
width: calc(100% - 80px);

### transition:  property duration timing-function delay;

多个属性用逗号分隔。

### 转换

- transform

  同时用多个转换时顺序会影响转换效果。(先旋转会改变坐标轴方向)

	- translate

	  百分比单位相对于自身元素
	  不会影响其他元素位置
	  对行内标签没有效果

	- rotate

	  单位deg
	  默认旋转中心点为元素中心点

	- origin

	  参数用空格隔开
	  可以给参数设置像素或者方位名词

	- scale

	  可以设置转换中心点缩放，默认以中心点缩放，不影响其他盒子。

### 动画

*XMind: ZEN - Trial Version*