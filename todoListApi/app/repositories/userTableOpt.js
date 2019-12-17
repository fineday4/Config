const userTable = require("../models/TableOpt");
var sqlite3 = require('sqlite3').verbose();
const OS = require('os');
 
let currentId = 0;
 
class userTableOpt {
  constructor() {
    const userTable1 = new userTable(++currentId, OS.homedir() + '/.lxdb/', "lxconfig.db");
    userTable1.isFinished = true;
    this.userTableHandle = userTable1;
  }
 
  getUserbyNamePaswd(user, res) {//OK
    //GET登录用户
    let query = 'select * from users where user = \'' + user.name + '\' and passwd = \'' + user.passwd + '\';';
    this.userTableHandle.queryOne(query, res);  
  }
 
  createUser(user, res) {    //OK
    //
    let createsql = "insert into users(user, passwd, email, auth) values(\'" + user.name + "\',\'" + user.passwd + "\',\'" + user.email + "\', \'guess\');";
    console.log("createsql: ", createsql);
    this.userTableHandle.addOne(createsql, res);
    console.log('createUser!!!');
  }
 
  modiUser(user, res) {  //ok
    //实现通过id和一个更新对象来更新userTable纪录的方法
    let modi = '';
    if(user.name){
      modi = "update users set user = \'" + user.name + "\' where ID = \'" + user.id + "\'";
    }else if(user.email){
      modi = "update users set email = \'" + user.email + "\' where ID = \'" + user.id + "\'";
    }else if(user.passwd){
      modi = "update users set passwd = \'" + user.passwd + "\' where ID = \'" + user.id + "\'";
    }else{
      console.log("No Opt code!!!");
    }
    this.userTableHandle.modifyOne(modi, res);
    console.log('modiUser!!!');
  }
 
  deleteUser(user, res) {  //ok
    //实现通过id来删除userTable纪录的方法
    let deletesql = "delete from users where ID = \'" + user.id + "\'";
    console.log("deletesql: ", deletesql);
    this.userTableHandle.deleteOne(deletesql, res);
    console.log('deleteUser!!!');
  }
}
 
module.exports = new userTableOpt();