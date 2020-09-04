---
title: '使用LeanClound在hexo next主题上统计文章访问量 添加热度显示'
passwd: ''
date: 2020-09-04 16:14:46
tags: 'hexo'
categories: '折腾'
---

照着网上找到的几个教程做了一遍,发现并不能正常工作。修修改改后。终于能使用了！ 

 # 1.注册leancloud **国际版**  

[注册页面](https://console.leancloud.app/login.html#/signin) 右上角切换为国际版,否则需要备案域名。
{% asset_img  guoji.png This is an image %}  
<!-- more -->
接下来新建一个应用。成功之后,点击存储 -> 点击结构化数据 -> 点击创建class -> 创建一个名为`Counter`的class (名字必须是Counter，否则next无法正常工作)  

找到图示界面,记录下AppID、AppKey。AppID后缀为`-MdYXbMMI`才是国际版账号。
{% asset_img  appid.png This is an image %}  
 
# 2.配置  
其中有一坑,一定要配置站点_config.yml文件中的url。在访问文章时,会检测站点的url与配置的是否相同,不相同的话则不会计数,阅读量一直为零。  
<https://github.com/theme-next/hexo-theme-next/blob/master/docs/zh-CN/LEANCLOUD-COUNTER-SECURITY.md>  

# 3.添加热度排行页面

终端进入到hexo目录 `hexo n page hot` 新建一个hot页面, 打开hot/index.md。此处放上其他blog中的代码后,我访问此页面时控制台总是返回401。这里放上修改后的代码，将其中APPID、APPKEY替换成自己的。`hexo clean hexo g hexo d`后访问页面查看是否成功。

    ---
    title: 文章热度排行
    date: 2020-09-04 00:14:32
    comments: false
    ---
    <div id="hot"></div>
    <script src="//cdn.jsdelivr.net/npm/leancloud-storage@4.6.1/dist/av-min.js"></script>
    <script type='text/javascript'>
    AV.init({
      appId: "APPID",
      appKey: "APPKEY",
    });
    </script>
    <script type="text/javascript">
      var time=0
      var title=""
      var url=""
      var query = new AV.Query('Counter');
      query.notEqualTo('id',0);
      query.descending('time');
      query.limit(1000);
      query.find().then(function (todo) {
        for (var i=0;i<1000;i++){
          var result=todo[i].attributes;
          time=result.time;
          title=result.title;
          url=result.url;
          var content="<p>"+"<font color='#1C1C1C'>"+"【文章热度:"+time+"℃】"+"</font>"+"<a href='"+"https://senkoi.github.io/"+url+"'>"+title+"</a>"+"</p>";
          document.getElementById("hot").innerHTML+=content
        }
      }, function (error) {
        console.log("error");
      });
    </script>