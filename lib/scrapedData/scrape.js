const $ = require('cheerio');
const data = require('./sets.js'); //data taken from https://mtg.gamepedia.com/Template:List_of_Magic_sets

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
	console.log('$(this): ', $(this).children('td').text())
})
