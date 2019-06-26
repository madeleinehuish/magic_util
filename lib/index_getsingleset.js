const fs = require('fs');
const util = require('util');
const sets = require('./sets.js');
const mainData = require('../data/originalData/scryfall-default-cards.json');

//directory to publish files to
const directory = '../data_scryfall/full_scryfall/';

if (!fs.existsSync(directory)){
    fs.mkdirSync(directory);
}

function loop(data, set) {
  let number = 1;
  let newCards =[];
  for(let elem of data) {

  	if(elem.set===set) {
  		number++;
  		elem.myId = number;
  		newCards.push(elem);
  	}
  }
  return newCards;
}

async function createFiles(data, set, setName) {
  let cards = [];
  cards = await loop(data, set);

  let filename = setName;
  fs.writeFileSync(directory + filename + '.js', 'module.exports = ' + util.inspect(cards, { maxArrayLength: null, showHidden: false, depth: null }), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

async function transformData(data) {

  for(let elem of sets) {
    console.log('elem: ', elem);
    let set = elem.set.toLowerCase();

    let setName = elem.setName.split(' ').join('_')
                              .split('/').join('_')
                              .split(':').join('_')
                              .split('.').join('_')
                              .split("'").join('')
                              .split('&').join('and')
                              .split('-').join('_')
                              .split('’').join('');
    if(setName.substring(0, 1).match("[0-9]")) setName = '_' + setName;

    await createFiles(data, set, setName);
  }
};

transformData(mainData);
