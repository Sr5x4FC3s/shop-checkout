const MongoClient = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017`;

const insert = (data) => {
  MongoClient.connect(url, async (err, client) => {
    if (err) throw err;
    db = client.db('accounts');

    console.log(data)
    
    await db.collection('accounts').insert(data, (err, res) => {
      if (err) throw err;
    })
  
    await db.collection('accounts').createIndex({ id: 1 }, (err, res) => {
      if (err) throw err;
    });

    await client.close();
    console.log(`entry was inserted`);
  })
};

const search = (id, callback) => {
  MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    db = client.db('accounts');

    db.collection('accounts').find({ 'id': id }).toArray((err, res) => {
      if (err) throw err;
      console.log('this is the res:', res);
      callback(err, res);
      client.close();
    });
  })
};

module.exports.insert = insert;
module.exports.search = search;