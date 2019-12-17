# Config
将配置文件存入数据库，通过web访问修改配置文件
这是一个使用RESETFUL标准实现的web API．
## 创建表 -> app/repositories/buildTable.js

## 服务启动项 -> main.js

## 文件间的调用规范
main --调用--> routes/ --调用--> models/ --调用--> controllers/ --调用--> repositories/

## 前端文件位置： config/public

##　守护进程使用：　pm2