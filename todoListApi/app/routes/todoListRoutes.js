module.exports = function(app) {
    const todoList = require('../controllers/todoListController');
   
    // todoList Routes
    app.route('/user')
      .get(todoList.getUser)
      .post(todoList.createUser)
      .put(todoList.modiUser)
      .delete(todoList.deleteUser);

    app.route('/configmodule')
      .get(todoList.getModule)
      .post(todoList.createModule)
      .put(todoList.modiModule)
      .delete(todoList.deleteModule);

    app.route('/configsubmodule')
      .get(todoList.getSubmodule)
      .post(todoList.createSubmodule)
      .put(todoList.modiSubmodule)
      .delete(todoList.deleteSubmodule);

    app.route('/configparam')
      .get(todoList.getParam)
      .post(todoList.createParam)
      .put(todoList.modiParam)
      .delete(todoList.deleteParam);

    app.route('/auth')
      .get(todoList.getOneAuth)
      .post(todoList.modiOneAuth);

    app.route('/allauth')
      .get(todoList.getAllAuth)
      .post(todoList.modiAllAuth);

  };