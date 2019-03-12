const fs = require('fs');
const util = require('util');
const sets = require('./sets.js');
const mainData = require('../data_scryfall/combinedDataStandard');
const directory = '../data_scryfall/testCategoriesForStandard';

function getBaseOracleTextForEach(data) {
  let categories = [];
  let number = 1;

  for(let elem of data) {
    console.log('number: ', number);
    number++;
    if(elem.oracle_text) {
      let categoriesInElem = elem.oracle_text.split(' ').join(',')
      // .split('-').join(',');
      console.log('categoriesInElem; ', categoriesInElem);
      for(let el of categoriesInElem) {
        if(!categories.includes(elem.oracle_text)) categories.push(elem.oracle_text);
      }
    }
  }
  return categories;
}
function getKeywords(generalTypes) {
  let creaturesTemp = [];
  let number = 1;
  let keywords = [
    'deathtouch', 'defender', 'double strike', 'enchant', 'equip', 'first strike', 'flash', 'flying', 'haste', 'hexproof', 'indestructible', 'lifelink', 'reach' , 'trample', 'riot' , 'convoke', 'mentor', 'jump-start', 'vigilance', 'spectacle', 'adapt', 'surveil', 'undergrowth', 'menace', 'kicker'
  ]
  for(let elem of generalTypes) {
    if (elem.includes('Creature')) {
      // console.log('true!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
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

async function main(data) {
  let mainCategories = await getBaseOracleTextForEach(data);
  // let mainCreatures = await getKeywords(mainTypes);
  console.log('Finished! categories = ', util.inspect(mainCategories, { maxArrayLength: null, showHidden: false, depth: null }));
  // console.log('Finished! creatures = ', util.inspect(mainCreatures, { maxArrayLength: null, showHidden: false, depth: null }));
  // fs.writeFileSync(directory + 'creatures.js', 'export default ' + util.inspect(creaturesSortedAlphabetically, { maxArrayLength: null, showHidden: false, depth: null }), function (err) {
  //   if (err) throw err;
  //   console.log('Saved!');
  // });

  // fs.writeFileSync(directory + '/categories.js', 'module.exports =  ' + util.inspect(mainCreatures, { maxArrayLength: null, showHidden: false, depth: null }), function (err) {
  //   if (err) throw err;
  //   console.log('Saved!');
  // });

}

main(mainData);
