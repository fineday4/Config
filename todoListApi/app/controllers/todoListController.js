const userTableOpt = require("../repositories/userTableOpt");
const configTableOpt = require("../repositories/configTableOpt");

 //用户登录
exports.getUser = function(req, res) {  //ok
  userTableOpt.getUserbyNamePaswd(req.query, res);
};
 
//用户创建
exports.createUser = function(req, res) {   //ok
  userTableOpt.createUser(req.query, res);
};
 
//用户修改信息
exports.modiUser = function(req, res) {   //ok
  const todo = userTableOpt.modiUser(req.query, res);
};
 
//删除用户
exports.deleteUser = function(req, res) {  //ok
  userTableOpt.deleteUser(req.query, res);
};

/******************MODULE OPTION*********************/
//GET module
exports.getModule = function(req, res) {  //ok
  configTableOpt.getModulebyName(req.query, res);
};
 
//POST module
exports.createModule = function(req, res){   //ok
  configTableOpt.createModule(req.query, res);
}

//PUT module
exports.modiModule = function(req, res){   //ok
  configTableOpt.modiModule(req.query, res);
}

//DELETE module
exports.deleteModule = function(req, res){  //ok
  configTableOpt.deleteModule(req.query, res);
}


/******************SUBMODULE OPTION*********************/
//GET submodule
exports.getSubmodule = function(req, res){  //ok
  configTableOpt.getSubmodulebyid(req.query, res);
}

//POST submodule
exports.createSubmodule = function(req, res){   //ok
  configTableOpt.createSubmodule(req.query, res);
}

//PUT submodule
exports.modiSubmodule = function(req, res){   //ok
  configTableOpt.modiSubmodule(req.query, res);
}

//DELETE submodule
exports.deleteSubmodule = function(req, res){  //ok
  configTableOpt.deleteSubmodule(req.query, res);
}

/******************PARAM OPTION*********************/
//GET param
exports.getParam = function(req, res){  //ok
  configTableOpt.getParambyId(req.query, res);
}

//POST param
exports.createParam = function(req, res){  //ok
  configTableOpt.createParam(req.query, res);
}

//PUT param
exports.modiParam = function(req, res){  //ok
  configTableOpt.modiParam(req.query, res);
}

//DELETE param
exports.deleteParam = function(req, res){
  configTableOpt.deleteParam(req.query, res);
}

//获取用户权限
exports.getOneAuth = function(req, res){}

exports.getAllAuth = function(req, res){}

exports.modiOneAuth = function(req, res){}

exports.modiAllAuth = function(req, res){}