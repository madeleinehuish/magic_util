const axios = require('axios');
const util = require('util');


const getUrls = async () => {
	let returnData = axios.get('https://api.scryfall.com/sets')
												.then(response => {

													let setArr = response.data.data.map(elem => {
														return { [elem.name] : elem.icon_svg_uri }
													})
													return setArr
												})
												.catch(err=> {
													console.log('axios error: ', err)
												})

	console.log('returnData: ',  util.inspect(await returnData, { maxArrayLength: null, showHidden: false, depth: null }));

}
getUrls()
