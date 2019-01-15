//this app pushes the cards to the db on mongodb atlas
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


//data
const cards = require('./testData');

//connect
MongoClient.connect(process.env.MONGO_URL, { useNewUrlParser: true } , (err, client) => {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db('madeleine-magic-app-data-cluster');

  db.collection.insertOne(cards);

  client.close();
});
