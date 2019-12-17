const userTableOpt = require("../controllers/userTableOpt");
const configTableOpt = require("../controllers/configTableOpt");

class userOpt {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  getUser(req, res) {  //ok
    userTableOpt.getUserbyNamePaswd(req.query, res);
  }

  createUser(req, res) {   //ok
    userTableOpt.createUser(req.query, res);
  }

  modiUser(req, res) {   //ok
    const todo = userTableOpt.modiUser(req.query, res);
  };

  deleteUser(req, res) {  //ok
    userTableOpt.deleteUser(req.query, res);
  };
}

module.exports = new userOpt();