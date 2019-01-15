//this app pushes the cards to the db on mongodb atlas
require('dotenv').config()
const mongoose = require('mongoose');
const Card = require('./models/card');
const testData = require('./testData');

//connect
// // mongoose.connect('mongodb://localhost:magic/cards', { useNewUrlParser: true });
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, autoReconnect: true }); //for mlab
//atlas
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, autoReconnect: true }); //for mongodb atlas
mongoose.set('useCreateIndex', true); //need this to avoid server error

const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));

// db.once('open', () => {
//   console.log('Connection succeeded.');
//   //prepare data
//   const cards = new Card(testData);
//   cards.save((err) => {
//         if (err) { console.error('Error on Save: ', err) }
//         console.log('Sucess! Your data was saved!');
//         db.close()
//       });
// })
const card = new Card(testData);
card.save((err) => {
      if (err) return err
      console.log('Success! Your data was saved!');
      db.close()
    })
