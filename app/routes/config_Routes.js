module.exports = function(app) {
    const user_Opt = require('../models/user_Opt');
    const module_Opt = require('../models/module_Opt');
    const submodule_Opt = require('../models/submodule_Opt');
    const param_Opt = require('../models/param_Opt');

   
    app.route('/user/id')
      .get(user_Opt.getUser)
      .post(user_Opt.createUser)
      .put(user_Opt.modiUser)
      .delete(user_Opt.deleteUser);

    app.route('/module/id')
      .get(module_Opt.getModule)
      .post(module_Opt.createModule)
      .put(module_Opt.modiModule)
      .delete(module_Opt.deleteModule);

    app.route('/submodule/id')
      .get(submodule_Opt.getSubmodule)
      .post(submodule_Opt.createSubmodule)
      .put(submodule_Opt.modiSubmodule)
      .delete(submodule_Opt.deleteSubmodule);

    app.route('/param/id')
      .get(param_Opt.getParam)
      .post(param_Opt.createParam)
      .put(param_Opt.modiParam)
      .delete(param_Opt.deleteParam);

    // app.route('/auth')
    //   .get(todoList.getOneAuth)
    //   .post(todoList.modiOneAuth);

    // app.route('/allauth')
    //   .get(todoList.getAllAuth)
    //   .post(todoList.modiAllAuth);

  };