const mtg = require('mtgsdk');
const axios = require('axios');
const util = require('util');

//grab data
let cards = [];
let number = 1;


// card.where({ supertypes: 'legendary', subtypes: 'goblin' })
// .then(cards => {
//     console.log(cards[0].name) // "Squee, Goblin Nabob"
// })
mtg.card.all({ set: 'GRN' })
.on('data', card => {
    console.log('number: ', number);
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

    // console.log('cards: ', cards)

    // //comment this at first to see what number is then run again
    if(number === 283) console.log("export default " + util.inspect(cards, { maxArrayLength: null }))
    // console.log(util.inspect(cards, { maxArrayLength: null }))
})
