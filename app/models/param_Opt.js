const configTableOpt = require("../controllers/configTableOpt");

class paramOpt{
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

/******************PARAM OPTION*********************/
//GET param
    getParam(req, res){  //ok
        configTableOpt.getParambyId(req.query, res);
    }
  
  //POST param
    createParam(req, res){  //ok
        configTableOpt.createParam(req.query, res);
    }
  
  //PUT param
    modiParam(req, res){  //ok
        configTableOpt.modiParam(req.query, res);
    }
  
  //DELETE param
    deleteParam(req, res){
    configTableOpt.deleteParam(req.query, res);
    } 
}

module.exports = new paramOpt();