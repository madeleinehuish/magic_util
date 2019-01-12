// import sets from './sets';
const fs = require('fs');
const mtg = require('mtgsdk');
const axios = require('axios');
const util = require('util');
const sets = require('./sets');


//'DOM', 'M19' , 'RIX', 'XLN', 'GRN'
// Ixalan Cards:  299
// Rivals Cards:  212
// Dominaria Cards:  280
// M19 Cards:  315
// Guilds of Ravnica Cards:  283

// getCards('XLN', 299);
// getCards('RIX', 212);
// getCards('DOM', 280);
getCards('M19', 315);
// getCards('GRN', 283);

function getCards(set, cardCount) {
  //grab data
  let cards = [];
  let number = 1;
  const CARD_COUNT = cardCount;

  mtg.card.all({ set: set })
  .on('data', card => {
      // console.log('number: ', number);
      cards.push({
          myid: number,
          id: card.id,
          name: card.name,
          manaCost: card.manaCost,
          cmc: card.cmc,
          colors: card.colors,
          colorIdentity: card.colorIdentity,
          type: card.type,
          supertypes: card.supertypes,
          types: card.types,
          subtypes: card.subtypes,
          rarity: card.rarity,
          set: card.set,
          setName: card.setName,
          text: card.text,
          flavor: card.flavor,
          artist: card.artist,
          number: card.number,
          power: card.power,
          toughness: card.toughness,
          imageUrl: card.imageUrl,
          multiverseid: card.multiverseid,
          rulings: card.rulings,
          printings: card.printings,
          legalities: card.legalities
      });
      number = number + 1;

      //comment this at first to see what number is then run again
      if(number === CARD_COUNT) console.log("export default " + util.inspect(cards, { maxArrayLength: null, showHidden: false, depth: null }))
  })
}



// //get keys
// mtg.card.all().on('data', card => {
//   console.log(Object.keys(card));
// })


//
// let sets = [];
//
// mtg.card.all().on('data', card => {
//   sets.push({
//     set: card.set,
//     setName: card.setName
//   })
// })
//
// console.log('sets: ', sets);

// // get keys
// let number = 1
// mtg.card.all({ setName: 'Guilds of Ravnica' })
// .on('data', card => {
//     console.log(card.set);
//     // console.log(Object.keys(card));
// })
//
