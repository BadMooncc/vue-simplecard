# card2.0

> vue中间层静态脚手架lal

> 具体使用如下
## 项目目录
- build webpack配置文件夹
- config webpack配置文件
- src 项目开发文件
  1. assets 静态文件存放
  2. components vue组件文件夹
  3. config 配置文件 - 转发域名在此文件夹下配置
  4. route 路由
  5. utils 工具方法
- static 静态文件存放  
- server.js 项目启动文件  

``` bash
# 开发环境项目启动
npm run start

# 生产环境项目部署
npm run production

# 项目打包
npm run build

```

##项目使用介绍

  中间层使用与日常开发无异，主要区别在于，请求转发。使用中间层的情况下，所有的请求默认发送到中间层，再又中间层转发到指定域名的指定端口。鉴于目前该项目的需求，域名转发只可配置一个，该配置在src/config/index.js。测试/开发 环境目标域名为develop.origin，生产环境域名为production.origin，开发时千万注意，目前该脚手架项目日志采集功能未做，可能对于错误日志的输出有些不好监控，不过出问题的情况并不多，错误信息也都为中间层的信息。另外任何一个请求，都会在控制台输出对应的域名和路由，接口请求失败或有问题时，要配合控制台输出信息做相关调试。

