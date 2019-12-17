const configTableOpt = require("../controllers/configTableOpt");

class configfileOpt{
    constructor(id, name) {
        this.id = id;
        this.name = name;
      }

/********配置文件写入*******/
//param -> submodule -> module

/********配置文件修改*******/
//param -> submodule -> module

/********配置文件读取*******/
//module -> submodule -> param

/********配置文件删除*******/
//module -> submodule -> param

}

module.exports = new configfileOpt();
