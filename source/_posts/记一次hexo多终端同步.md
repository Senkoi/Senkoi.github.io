---
title: 记一次hexo多终端同步
passwd: ''
date: 2020-08-22 18:36:41
tags: [hexo]
categories: 折腾
---
### 将笔记本A中的hexo迁移至其它电脑B中。
1. github新建分支'hexo', 并设为默认分支。
<!-- more -->
2. 在B中`git clone`hexo分支,可以看见多出来的`username.github.io`目录。
3. 进入此目录,删除`.git`目录外的所有文件及目录。
4. 执行命令`git add .` `git commit -m 'init'` `git push`,此时hexo分支中已经清空。
5. 将剩下的`.git`目录复制到A中博客所在目录`username.github.io`。并进入`theme`目录,将此目录下的`.git`重命名为`.git.m`。
6. 终端进入目录`username.github.io`,执行第四步中的三条命令。
7. 返回B,命令行`git pull`拉取刚刚push的文件。
8. 执行`npm install hexo-cli -g`安装hexo,并将此目录下的`node_modules/.bin`目录添加至PATH环境变量。
9. 在此目录以及子目录theme中分别执行`npm install`。
10. `hexo s`测试同步是否成功。  

### 同步操作
转换工作环境时,先将改动`git pull`到本地。发布文章或者作出改动后,`hexo g` `hexo d` `git add .` `git commit -m 'xxx'` `git push` 先发布再push改动。