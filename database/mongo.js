const MongoClient = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017`;

const insert = () => {
  MongoClient.connect(url, async (err, client) => {
    if (err) throw err;
    db = client.db('accounts');

    db.collection('accounts').insert({}, (err, res) => {
      if (err) throw err;
    })

    await client.close();
    console.log(`entry was inserted`);
  })
};

module.exports.insert = insert;