const userTableOpt = require("../controllers/userTableOpt");

class authOpt{
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }    
//获取用户权限
    getOneAuth(req, res){}

    getAllAuth(req, res){}

    modiOneAuth(req, res){}

    modiAllAuth(req, res){}
}

module.exports = new authOpt();