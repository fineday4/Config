const Sqlite3 = require("sqlite3").verbose();

class TableOpt {
    constructor(id, Dbpath, name) {
      this.id = id;
      this.name = name;
      this.Dbpath = Dbpath;
      this.isFinished = false;
      this.sqliteDB = new Sqlite3.Database(Dbpath+name);
    }

    queryOne(querySql, res){
      let sql_search = this.sqliteDB.prepare(querySql);
      sql_search.all(function(err, data){
        if(err){
            res.send({'success': 'false'});
        }else{
            res.json(data);
        }
      });
    }

    queryAll(id){
    }

    modifyOne(updateSql, res){
      let modisql = this.sqliteDB.prepare(updateSql);
      modisql.run(function(err){
        if(err){
          res.send({'success' : 'false'});
        }else{
          res.send({'success' : 'true'});
        }
      });
    }

    modifyAll(){

    }

    addOne(createsql, res){
      let sql_add = this.sqliteDB.prepare(createsql);
      sql_add.run(function(err){
        if(err){
          res.send({'success' : 'false'});
        }else{
          res.send({'success' : 'true'});
        }
      });
    }

    addAll(){

    }

    deleteOne(deletesql, res){
      let sql_dele = this.sqliteDB.prepare(deletesql);
      sql_dele.all(function(err){
        if(err){
          res.send({'success' : 'false'});
        }else{
          res.send({'success' : 'true'});
        }
      });
    }

    deleteAll(){

    }

    destory(){
      this.sqliteDB.close();
    }
  }
   
  module.exports = TableOpt;