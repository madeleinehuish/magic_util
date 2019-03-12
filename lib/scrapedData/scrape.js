const $ = require('cheerio');
const data = require('./sets.js');

//quick test
const initialTest = $(data).is('tbody'); //just checks if the data is a tbody
console.log('check: ', initialTest);
