---
title: 文章热度排行
date: 2020-09-04 00:14:32
comments: false
---
<div id="hot"></div>
<script src="//cdn.jsdelivr.net/npm/leancloud-storage@4.6.1/dist/av-min.js"></script>
<script type='text/javascript'>
AV.init({
  appId: "HoXQDOyw5DNsLoJHae80AWku-MdYXbMMI",
  appKey: "ezhVEVt38vL2EoFqJf8C8hUE",
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