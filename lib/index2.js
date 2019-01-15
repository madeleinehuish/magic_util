//this program creates an array of all of the different files to call from the main program
const folderToReadFrom = '../data_scryfall/full_scryfall';
const fs = require('fs');
const util = require('util');

function strippedSetNames(arr) {
	let cleanedNumberNames = arr.map(elem => {
		if(elem.substring(0, 1).match("[0-9]")) elem = '_' + elem;
		return elem
	})

	return cleanedNumberNames.map(elem => {
			return {
				setName: elem.substr(0, elem.indexOf('.')).split('_').join(' '),
				setFileName: elem.substr(0, elem.indexOf('.')),
				setFileWithoutSuffix: elem.substr(0, elem.indexOf('.'))
			}
	})
}


function composed(strippedSets) {
	let returnString = '';
	let dir = './full_scryfall/';
	for(let elem of strippedSets) {
		returnString += `const ${elem.setFileName} = require('${dir + elem.setFileWithoutSuffix}');\n`
	}
	returnString += '\n\n';
	returnString += 'const combinedData = [\n'
	for(let elem of strippedSets) {
		returnString += `  ...${elem.setFileName},\n`
	}
	returnString += '];\n\n'
	returnString += 'module.exports = {\n';

	for(let elem of strippedSets) {
		returnString += `  ${elem.setFileName},\n`
	}
	returnString += `  combinedData\n`
	returnString += '};'


	return returnString;
}


async function getFiles(folderToRead) {
	let filesArray = [];
	const directory = '../data_scryfall/';
	const filename = 'combinedData';
	let files = await fs.readdir(folderToRead, (err, files) => {
		if(err) console.error('error: ', err);
		files.forEach(file => {
			filesArray.push(file);
			console.log(file);
		})
		let strippedSets = strippedSetNames(files);
		let composedFile = composed(strippedSets);
		// let strippedEnds = strippedEndsFromFiles(files);
		console.log('strippedSetNames: ', util.inspect(strippedSets, { maxArrayLength: null, showHidden: false, depth: null }));
		console.log(composedFile);
		fs.writeFileSync(directory + filename + '.js', composedFile, function (err) {
	    if (err) throw err;
	    console.log('Saved!');
	  });
	})

	// return files;
}

// async function main(folder) {
// 	let filesArr = await getFiles(folder);
// 	// let strippedSets = await strippedSetNames(filesArr);
// 	// console.log('strippedSetNames: ', strippedSets);
// 	// let strippedEnds = await strippedEndsFromFiles(filesArr);
// 	// let composeNewFile = await composed(strippedSets, strippedEnds);
// 	//
// 	// await buildFile(composedNewFile);
// 	console.log('Completed!!!');
// }

getFiles(folderToReadFrom);
