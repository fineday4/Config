const configTableOpt = require("../controllers/configTableOpt");

class submoduleOpt{
    constructor(id, name) {
        this.id = id;
        this.name = name;
      }
/******************SUBMODULE OPTION*********************/
//GET module
    getSubmodule(req, res) {  //ok
        configTableOpt.getSubmodulebyid(req.query, res);
    };
   
  //POST module
    createSubmodule(req, res){   //ok
        configTableOpt.createSubmodule(req.query, res);
    }
  
  //PUT module
    modiSubmodule(req, res){   //ok
        configTableOpt.modiSubmodule(req.query, res);
    }
  
  //DELETE module
    deleteSubmodule(req, res){  //ok
    configTableOpt.deleteSubmodule(req.query, res);
  } 
}

module.exports = new submoduleOpt();