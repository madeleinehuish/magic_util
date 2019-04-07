const fs = require('fs');
const util = require('util');
const axios = require('axios');

const mainData = require('../data/originalData/scryfall-default-cards.json');
const directory = '../data_scryfall/tokens/';

if (!fs.existsSync(directory)){
    fs.mkdirSync(directory);
}

let tokenObj = {};
let tokenArr = [];

const getData = async (uri) => {
	let data = await axios.get(uri);
	return data;
}

const createFile = async (data) => {
	let filename = 'tokens.js';
  fs.writeFileSync(directory + filename, 'module.exports = ' + util.inspect(data, { maxArrayLength: null, showHidden: false, depth: null }), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

const pushData = async () => {
	for(let elem in tokenObj) {
		console.log('currently getting tokenObj[elem]: ', tokenObj[elem][0]);
		let data = await getData(tokenObj[elem][1]);
		tokenArr.push(data.data);
	}
	createFile(tokenArr);
	// console.log('tokenArr: ', util.inspect(tokenArr, { maxArrayLength: null, showHidden: false, depth: null }));
}

for(let elem of mainData) {
	if(elem.all_parts) {
		for(let subElem of elem.all_parts) {
			// console.log('subElem: ', subElem);
			if(subElem.type_line.substr(0,5)==='Token') {
				if(!tokenObj[subElem.id]){
					tokenObj[subElem.id]= [subElem.type_line, subElem.uri];
				}
			}
		}
	}
}

pushData();


// console.log('tokenObj: ', tokenObj);
console.log('Object.keys(tokenObj).length: ', Object.keys(tokenObj).length);
console.log('tokenArr: ', tokenArr);
