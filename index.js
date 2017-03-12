/*
	TODO:

	- Read in parameters
	--- node index.js -i input-file -o output-dir -l layout-type
	- Open and read file contents
	- Loop through characters - max is 400
	- Setup key map
	- Setup images
	- Figure out how to copy images to dist directory

Example usage:

$ node index -i inputs/test1.txt -o ./output -e -l dvorak

- Input file will be "inputs/test1.txt"
- Output directory for timelapse images will be ./output
- 5 frames will be used for each keystroke (e means equal frames)
- Layout will be dvorak

*/

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var TypingTimelapseMaker = require('./lib/typing-timelapse-maker');

var layoutMap = {};
layoutMap.dvorak = require('./lib/qwerty-to-dvorak');
layoutMap.colemak = require('./lib/qwerty-to-colemak');

var inputFile = argv.i;
var outputDir = argv.o;
var layoutType = (argv.l || 'qwerty').toLowerCase();
var equalFramesPerKey = argv.e;

if (!inputFile) {
	console.error('No input file given. Please use "-i filename.txt" when running.');
	return;
}
if (!outputDir) {
	console.error('No output directory given. Please use "-o /dirname" when running.');
	return;
}

if (layoutType !== 'qwerty' && !layoutMap[layoutType]) {
	console.error('Invalid layout type:' + layoutType);
	return;
}

console.log('--------------------------------------------------');
console.log('Starting Application...');
console.log('Input file:'+inputFile);
console.log('Output directory:'+outputDir);
console.log('Layout:' + layoutType);
console.log('--------------------------------------------------');

var contents = fs.readFileSync(inputFile, 'utf8');

var charLimit = 400;
if (contents.length > charLimit) {
	console.error('File is too large. Please input a file with less than ' + charLimit + ' characters.');
	return;
}

var timelapse = new TypingTimelapseMaker({
	outputDir: outputDir,
	layoutType: layoutType,
	equalFramesPerKey: equalFramesPerKey
});

var ii = 0,
	count = 1,
	prevCh = null;
for (ii = 0; ii < contents.length; ii++) {

	var ch = contents[ii];

	// convert to appropriate layout
	if (layoutType !== 'qwerty') {
		ch = layoutMap[layoutType].convert(ch);
	}

	if (ch === prevCh) {
		count++;
	} else {
		timelapse.writeFramesForKey(ch, count);
		count = 1;
	}
}

if (count > 1) {
	timelapse.writeFramesForKey(ch, count);
}

console.log(__dirname);