const FS = require('fs')

const DBPATH = require('./createTableSQL').DBpath;
const FILE = require('./createTableSQL').FILE;
const CREAT = require('./CreateTableOpt');

let  create = new CREAT();
function JugleCreateTable(){
//     sqlword = new SQLWORD();
    FS.exists(DBPATH, function(exists){
        if(!exists){
            console.log("NOT exists!!! DBPATH-> ", DBPATH);
            FS.mkdir(DBPATH, (err)=>{
                if(err){
                    console.log("create dir error ~ ~ ");
                }else{
                    create.CreateTable();
                }
            });
        }else{
            console.log("Exists!!!!!");
            FS.exists(FILE, function(exists){
                if(!exists){
                    create.CreateTable();
                }else{
                    console.log("database exists!!!!");
                }
            })
        }
    })
}

console.log("DBpath- > ", DBPATH);
JugleCreateTable()