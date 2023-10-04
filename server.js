const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse application/toJSON();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(5000, () => {
  console.log('App listening on ports 5000.')
});
