##工程说明
本模块包含 `小程序 H5页面汇总` 目前有小程序低版本升级页面

##项目说明：
请先本地创建一个.env文件，里面的内容参考.env.example文件内容：
PAGE:本地开发你想要开发的页面名称
PORT:本地开发时你想启动服务的端口号
tplViewPath:编译后tpl存放路径（目前为view/tips/tips_mod.tpl）

##本地调试运行：
注意：如果涉及更改css文件，把webpack.dev.js的cache:false注释拿掉
```npm start```
随后访问
localhost:9000/你要调试的页面名称（例如：小程序低版本升级页面为version_upgrade）

##联调环境部署：
```make```
可以配置fis-conf.js里面的配置项：receiver,to
将我们在tplViewPath里面的tpl资源上传到RD机器，就可在RD给出调试链接看到相应的改动

##生产环境：
目前开发前端资源（js，css）均内联在tpl中，RD进行上线

##新增页面规范：
在package.json中的pages选项里新增页面名称，之后所有的html、js、css、都需保持与此文件名一致