const util = require('util');
const data = require('./scryfall-default-cards.json');
let number = 1;
let cards = [];
for(let elem of data) {
	// console.log('elem.set: ', elem.set)
	if(elem.set==="rix") {
		number++;

		// console.log('elem.name: ', elem.name, number);
		elem.myId = number;
		cards.push(elem);
	}
}

console.log("export default " + util.inspect(cards, { maxArrayLength: null, showHidden: false, depth: null }))


//
// function getCards(set, cardCount) {
//   //grab data
//   let cards = [];
//   let number = 1;
//   const CARD_COUNT = cardCount;
//
//   mtg.card.all({ set: set })
//   .on('data', card => {
//       // console.log('number: ', number);
//       cards.push({
//           myid: number,
//           id: card.id,
//           name: card.name,
//           manaCost: card.manaCost,
//           cmc: card.cmc,
//           colors: card.colors,
//           colorIdentity: card.colorIdentity,
//           type: card.type,
//           supertypes: card.supertypes,
//           types: card.types,
//           subtypes: card.subtypes,
//           rarity: card.rarity,
//           set: card.set,
//           setName: card.setName,
//           text: card.text,
//           flavor: card.flavor,
//           artist: card.artist,
//           number: card.number,
//           power: card.power,
//           toughness: card.toughness,
//           imageUrl: card.imageUrl,
//           multiverseid: card.multiverseid,
//           rulings: card.rulings,
//           printings: card.printings,
//           legalities: card.legalities
//       });
//       number = number + 1;
//
//       //comment this at first to see what number is then run again
//       if(number === CARD_COUNT) console.log("export default " + util.inspect(cards, { maxArrayLength: null, showHidden: false, depth: null }))
//   })
// }
