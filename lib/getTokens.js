const fs = require('fs');
const util = require('util');
const axios = require('axios');

const mainData = require('../data/originalData/scryfall-default-cards.json');

let tokenObj = {};
let tokenArr = [];

const getData = async (uri) => {
	let data = await axios.get(uri);
	return data;
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

for(let elem in tokenObj) {
	let data = getData(elem[1]);
	tokenArr.push(data);
}


console.log('tokenObj: ', tokenObj);
console.log('Object.keys(tokenObj).length: ', Object.keys(tokenObj).length);
console.log('tokenArr: ', tokenArr);
