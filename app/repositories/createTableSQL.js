/*
*
*创建表，位置:~/.lxdb/
*
*/
const OS = require('os')

module.exports.DBpath = OS.homedir() + '/.lxdb';
module.exports.FILE = OS.homedir() + '/.lxdb' + "/lxconfig.db";

module.exports.sqlarr = [
// modules
    "create table if not exists users(\
        ID INTEGER,\
        user TEXT NOT NULL,\
        passwd TEXT NOT NULL,\
        auth TEXT NOT NULL,\
        email TEXT NOT NULL,\
        PRIMARY KEY(ID AUTOINCREMENT)\
    )",
    "create table if not exists authority(\
        key TEXT NOT NULL,\
        value INTEGER NOT NULL,\
        description TEXT NOT NULL,\
        PRIMARY KEY(key)\
    )",

    "create table if not exists module(\
        ID INTEGER NOT NULL,\
        robot TEXT NOT NULL,\
        module TEXT NOT NULL,\
        PRIMARY KEY(ID AUTOINCREMENT)\
    )",

    "create table if not exists submodule(\
        ID INTEGER NOT NULL,\
        name TEXT NOT NULL,\
        module TEXT NOT NULL,\
        PRIMARY KEY(ID AUTOINCREMENT)\
    )",   

    "create table if not exists instance(\
            ID INTEGER NOT NULL,\
            key TEXT NOT NULL,\
            type TEXT NOT NULL,\
            value TEXT NOT NULL,\
            submodid TEXT NOT NULL,\
            robid INTEGER NOT NULL,\
            auth text NOT NULL,\
            PRIMARY KEY(ID AUTOINCREMENT)\
        )"
        
]