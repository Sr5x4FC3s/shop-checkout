const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/mongo.js');
const PORT = 3003;

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../dist')));

app.post('/account/id=:id', (req, res) => {
  let id = req.params.id;
  let data = req.body;
  delete data.homepage;
  delete data.f1complete;
  delete data.f2complete;
  delete data.f3complete;
  
  db.insert(data);
  res.status(200).send('successfully saved info');
});

app.listen(PORT, () => console.log(`server is live on port: ${PORT}`));