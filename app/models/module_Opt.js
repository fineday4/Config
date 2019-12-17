const configTableOpt = require("../controllers/configTableOpt");

class moduleOpt{
    constructor(id, name) {
        this.id = id;
        this.name = name;
      }
/******************MODULE OPTION*********************/
//GET module
    getModule(req, res) {  //ok
        configTableOpt.getModulebyName(req.query, res);
    };
   
  //POST module
    createModule(req, res){   //ok
        configTableOpt.createModule(req.query, res);
    }
  
  //PUT module
    modiModule(req, res){   //ok
        configTableOpt.modiModule(req.query, res);
    }
  
  //DELETE module
    deleteModule(req, res){  //ok
    configTableOpt.deleteModule(req.query, res);
  } 
}

module.exports = new moduleOpt();