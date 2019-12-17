const express = require('express'); 
const routes = require('./app/routes/config_Routes');
const bodyParser = require('body-parser');

let app = express();
let port = process.env.PORT || 3000;
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/public/" + "peizhi1.html" );
})

routes(app);
app.listen(port);
 
console.log('RESTful API server started on: ' + port);