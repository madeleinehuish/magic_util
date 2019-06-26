const util = require('util');
const fs = require('fs');
const $ = require('cheerio');
const axios = require('axios');

const savedDeck = [];

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

const data = axios.get(process.argv.slice(2).toString())
									.then(dat => {
                    let dataStripped = dat.data.replace(/\n|\r/g, "");
                    fs.writeFileSync('./sampleDeckFile.html', util.inspect(dataStripped, { maxArrayLength: null, showHidden: false, depth: null }), function (err) {
                      if (err) throw err;
                      console.log('Saved!');
                    });
                    // let newHTML = dat.split('/n').join(' ')
                    // console.log('newHTML: ', dat.data.split('/n').join(' '))
                  })



// const initialTest = $(data).is('tbody'); //just checks if the data is a tbody
// console.log('check: ', initialTest);
//
// //next test
// const nextTest = $(data).find('tr').length; //find how many trs in tbody
// console.log('tr count: ', nextTest);
//
// //now lets actually scrape the data
// const scrapeThis = $(data).find('tr').each(function(index, element){
// 	console.log('index: ', index);
//
// 	// console.log('element: ', element);
// 	console.log('$(this): ', $(this).children('td').text());
// 	// savedSets.push([$(this).children('td').text()]);
// 	const tempArr = [];
// 	$(this).children().each(function(index2, element2){
// 		tempArr.push($(element2).text());
// 	})
// 	savedSets.push({ [tempArr[1]]: tempArr[0] });
//
//
// })
//
// console.log('savedSets: ', util.inspect(savedSets, { maxArrayLength: null }));
