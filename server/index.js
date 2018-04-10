const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/mongo.js');
const PORT = 3003;

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('/search/id=:id', (req, res) => {
  let id = req.params.id;
  console.log(`this is the id: `, id);
  // console.log(`this is invoked`, res)
  db.search(id, (err, data) => {
    console.log(data);
    let dataObject = data[0];
    console.log('dataobj', dataObject);
    delete dataObject._id;
    res.status(200).send(dataObject);
  });
});

app.post('/account/id=:id', (req, res) => {
  let id = req.params.id;
  let data = req.body;
  delete data.search;
  delete data.response;
  delete data.gosearch;
  delete
  delete data.homepage;
  delete data.f1complete;
  delete data.f2complete;
  delete data.f3complete;
  
  db.insert(data);
  res.status(200).send('successfully saved info');
});

app.listen(PORT, () => console.log(`server is live on port: ${PORT}`));