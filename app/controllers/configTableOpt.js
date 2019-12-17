const OS = require('os');
const ConfigTable = require("../repositories/table_Opt");
 
let currentId = 0;
 
class configTable {
  constructor() {
    const configTable1 = new ConfigTable(++currentId, OS.homedir() + '/.lxdb/', "lxconfig.db");
    configTable1.isFinished = true;
    this.configTableHandle = configTable1;
  }

 /*************MODULE**************/
  getModulebyName(info, res) {   //ok
    //实现查看所有todos的方法
    const sql_getmod = "select * from module where robot = \'" + info.robot + "\'";
    this.configTableHandle.queryOne(sql_getmod, res);
    console.log('getModulebyName!!!!!!');
  }
 
  createModule(info, res) { //ok
    //实现创建新todo纪录的方法
    const sql_cretmod = "insert into module(robot, module) values(\'" +info.robot +"\', \'" + info.module + "\')";
    console.log("sql_cretmod: ", sql_cretmod);
    this.configTableHandle.addOne(sql_cretmod, res);
    console.log('createModule!!!');
  }
 
  modiModule(info, res) {  //ok
    //实现通过id和一个更新对象来更新todo纪录的方法
    const sql_modimod = "update module set robot = \'" + info.robot + "\', module = \'" + info.module + "\' where ID = \'" +info.id +"\';";
    console.log("sql_modimod: ", sql_modimod);
    this.configTableHandle.modifyOne(sql_modimod, res);
    console.log('modiModule!!!');
  }
 
  deleteModule(info, res) {
    //实现通过id来删除todo纪录的方法
    const sql_deletmod = "delete from module where ID = \'" +info.id +"\';";
    console.log("sql_deletmod: ", sql_deletmod);
    this.configTableHandle.deleteOne(sql_deletmod, res);
    console.log('deleteModule!!!');
  }

  /*********SUBMODULE**********/
  getSubmodulebyid(info, res){  //ok
    const sql_getsubmod = "select * from submodule where ID = \'" + info.id + "\';";
    this.configTableHandle.queryOne(sql_getsubmod, res);
    console.log('getSubmodulebymodule!!!!!!');   
  }

  createSubmodule(info, res){  //ok
    const sql_cretsubmod = "insert into submodule(name, module) values(\'" +info.name +"\', \'" + info.module + "\')";
    console.log("sql_cretsubmod: ", sql_cretsubmod);
    this.configTableHandle.addOne(sql_cretsubmod, res);
    console.log('sql_cretsubmod!!!');  
  }

  modiSubmodule(info, res){   //ok
    const sql_modisubmod = "update submodule set name = \'" + info.name + "\', module = \'" + info.module + "\' where ID = \'" +info.id +"\';";
    console.log("sql_modisubmod: ", sql_modisubmod);
    this.configTableHandle.modifyOne(sql_modisubmod, res);
    console.log('modiSubmodule!!!');
  }

  deleteSubmodule(info, res){   //ok
    const sql_deletsubmod = "delete from submodule where ID = \'" +info.id +"\';";
    console.log("sql_deletsubmod: ", sql_deletsubmod);
    this.configTableHandle.deleteOne(sql_deletsubmod, res);
    console.log('deleteSubmodule!!!');  
  }

  /************PARAM**************/
  getParambyId(info, res){  //ok
    const sql_getinstance = "select * from instance where ID = \'" + info.id + "\';";
    this.configTableHandle.queryOne(sql_getinstance, res);
    console.log('getParambyId!!!!!!');  
  }

  createParam(info, res){   //ok
    const sql_cretparam = "insert into instance(key, value, type, submodid, robid, auth) values(\'" +info.key +"\', \'" + info.value + "\', \'" + info.type + 
    "\',\'" + info.submodid + "\',\'" + info.robid + "\',\'" + info.auth + "\')";
    console.log("sql_cretparam: ", sql_cretparam);
    this.configTableHandle.addOne(sql_cretparam, res);
    console.log('sql_cretparam!!!'); 
  }

  modiParam(info, res){  //ok
    const sql_modiparam = "update instance set key = \'" + info.key + "\', value = \'" + info.value + "\', type = \'" + info.type + "\', submodid = \'"
    + info.submodid +"\',robid = \'" + info.robid + "\', auth = \'" + info.auth +"\' where ID = \'" +info.id +"\';";
    console.log("sql_modiparam: ", sql_modiparam);
    this.configTableHandle.modifyOne(sql_modiparam, res);
    console.log('modiParam!!!');
  }

  deleteParam(info, res){
    const sql_deletparam = "delete from instance where ID = \'" +info.id +"\';";
    console.log("sql_deletparam: ", sql_deletparam);
    this.configTableHandle.deleteOne(sql_deletparam, res);
    console.log('deleteParam!!!'); 
  }
}
 
module.exports = new configTable();