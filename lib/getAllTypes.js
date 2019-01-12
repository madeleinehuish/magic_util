const fs = require('fs');
const util = require('util');
const sets = require('./sets.js');
const mainData = require('../data/originalData/scryfall-default-cards.json');
// let types =[];

function getTypes(data) {
  let types = [];
  let number = 1;
  for(let elem of data) {
    console.log('number: ', number);
    number++;
    let typesInElem = elem.type_line.split(' ').join(',').split('-').join(',');
    console.log('typesInElem; ', typesInElem);
    for(let el of typesInElem) {
      if(!types.includes(elem.type_line)) types.push(elem.type_line);
    }
  }
  return types;
}
function getCreatures(generalTypes) {
  let creaturesTemp = [];
  let number = 1;
  for(let elem of generalTypes) {
    if (elem.includes('Creature')) {
      console.log('true!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      let cloneElem1 = elem;
      let cloneElem2 = elem;
      // let creaturesAfterDash = cloneElem1.split(' ').pop().split('-');
      let creaturesArr = cloneElem2.split('-').pop().split(' ');
      for(let creature of creaturesArr) {
        creaturesTemp.push(creature);
      }
    }
  }
  //remove duplicates
  let creatures = [...new Set(creaturesTemp)];

  let filterOutSymbols = creatures.filter(creature => {
    return (creature!=="//" && creature!=="and/or" && creature!=="of");
  })

  let creaturesSortedAlphabetically = filterOutSymbols.sort((a,b) =>{
		if(a < b) return -1;
		if(a > b) return 1;
		return 0;
	})

  creaturesSortedAlphabetically.pop(); //gets rid of -

	return creaturesSortedAlphabetically;
}

let mainTypes = getTypes(mainData);
let mainCreatures = getCreatures(mainTypes);
console.log('Finished! types = ', util.inspect(mainTypes, { maxArrayLength: null, showHidden: false, depth: null }));
console.log('Finished! creatures = ', util.inspect(mainCreatures, { maxArrayLength: null, showHidden: false, depth: null }));
