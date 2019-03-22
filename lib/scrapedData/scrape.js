const util = require('util');
const $ = require('cheerio');
const data = require('./sets.js'); //data taken from https://mtg.gamepedia.com/Template:List_of_Magic_sets
const savedSets = [];
//quick test
const initialTest = $(data).is('tbody'); //just checks if the data is a tbody
console.log('check: ', initialTest);

//next test
const nextTest = $(data).find('tr').length; //find how many trs in tbody
console.log('tr count: ', nextTest);

//now lets actually scrape the data
const scrapeThis = $(data).find('tr').each(function(index, element){
	console.log('index: ', index);

	// console.log('element: ', element);
	console.log('$(this): ', $(this).children('td').text());
	// savedSets.push([$(this).children('td').text()]);
	const tempArr = [];
	$(this).children().each(function(index2, element2){
		tempArr.push($(element2).text());
	})
	savedSets.push({ [tempArr[1]]: tempArr[0] });


})

console.log('savedSets: ', util.inspect(savedSets, { maxArrayLength: null }));
