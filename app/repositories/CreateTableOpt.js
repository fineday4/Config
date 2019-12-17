const SQLARR = require('./createTableSQL').sqlarr;
const FILE = require('./createTableSQL').FILE;
let SqliteDB = require('./optsqlite.js').SqliteDB;

function CreateTable(){
    let dbopt = new SqliteDB(FILE);
    SQLARR.forEach(element => {
        //创建表
        //console.log("ele: ", element);
        dbopt.createTable(element);
    });
}
module.exports = CreateTable;