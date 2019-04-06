const axios = require('axios');
const util = require('util');


const getUrls = async () => {
	let returnData = await axios.get('https://api.scryfall.com/sets')
												.then(response => {
													let setObj = {};
													// let setArr = response.data.data.map(elem => {
													// 	return { [elem.name] : elem.icon_svg_uri }
													// })
													for(let elem of response.data.data) {
														setObj[elem.name] = elem.icon_svg_uri;
													}
													return setObj
												})
												.catch(err=> {
													console.log('axios error: ', err)
												})

	console.log('returnData: ',  util.inspect(await returnData, { maxArrayLength: null, showHidden: false, depth: null }));
	// let keys = Object.keys(await returnData);
	// for(let elem of keys) {
	// 	console.log('key: ', elem, ' type: ', typeof elem);
	// }

}
getUrls()
