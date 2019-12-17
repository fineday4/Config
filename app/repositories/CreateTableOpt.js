const SQLARR = require('./createTableSQL').sqlarr;
const FILE = require('./createTableSQL').FILE;
const Sqlite3 = require("sqlite3").verbose();

function CreateTable(){
    let dbopt = new Sqlite3.Database(FILE);
    SQLARR.forEach(element => {
        //创建表
        dbopt.serialize(function(){
            dbopt.run(element, function(err){
                if(null != err){
                    console.log('建表失败！！！');
                    return;
                }
            });
        });
    });
}
module.exports = CreateTable;