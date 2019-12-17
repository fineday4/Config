let express = require('express'); 
let routes = require('./app/routes/config_Routes');

  app = express();
  port = process.env.PORT || 3000;
  bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);
 
console.log('RESTful API server started on: ' + port);