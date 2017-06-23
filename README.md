# track-manager
 
This is design for taxi company to manager their texi's tracking and analyse how to dispatch their texi.

预览
--
![](https://github.com/ZeroWangZY/track-manager/raw/master/pics/preview1.PNG)  <br>
![](https://github.com/ZeroWangZY/track-manager/raw/master/pics/preview2.PNG)
<br>

环境配置
-----
1、安装Node.js，该项目需要使用npm指令和Node的运行环境。<br>
2、安装前端代码的依赖库：命令行中进入项目根目录，执行命令行命令npm install<br>
3、安装后台代码的依赖库：再进入server目录，执行命令行命令npm install<br>

开发环境
--
前端：React.js，Webpack,Redux<br>
后端：Node.js,Express<br>

运行环境
--
Node.js<br>
Mysql<br>

部署及运行使用
--
进入server目录执行npm start<br>
在浏览器中进入localhost:3000<br>
系统用户名admin 密码：admin<br>

数据
--
10GB轨迹数据及根据这些数据生成的订单、司机等数据。


其他说明
--
运行时如果不能正常连接Mysql数据库，请在/server/conf/db.js将数据库地址的配置信息更改为本地Mysql的地址<br>
部分数据下载链接链接: http://pan.baidu.com/s/1hseMLVm 密码: mpw6



