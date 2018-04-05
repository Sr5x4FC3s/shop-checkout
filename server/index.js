const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/mongo.js');
const PORT = 3003;

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(PORT, () => console.log(`server is live on port: ${PORT}`));