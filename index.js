/*
Example usage:

$ node index -i inputs/75_most_common_words.txt -o ./output -e -l dvorak

- Input file will be "inputs/75_most_common_words.txt".
- Output directory for timelapse images will be ./output
- 5 frames will be used for each keystroke (e means equal frames). If you don't want this, just don't include the "-e" parameter.
- Layout will be dvorak. If "-l" is omitted, QWERTY will be the layout (probably what you want).

*** Making the Video
* Once the image set has been created, you'll need a tool to put them together into a video. 
  I highly recommend TLDF (http://timelapsedeflicker.com/). It will smooth out the flickering
  between images. The free version also supports the size of the images this app uses.
* If you can't use TLDF, Time Lapse Assembler (http://www.dayofthenewdan.com/projects/time-lapse-assembler-1/)
  is another option. However, it wont de-flicker the images.

*** Your Own Images
* If you want to use your own images, you'll just need to modify the "lib/key-frame-map.js" file.
* If your image set requires more than 5 frames per key press, you'll need to edit the
  "lib/typing-timelapse-maker.js" file (change the 5 to whatever).

*/

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var TypingTimelapseMaker = require('./lib/typing-timelapse-maker');

var layoutMap = {};
layoutMap.dvorak = require('./lib/dvorak-to-qwerty');
layoutMap.colemak = require('./lib/colemak-to-qwerty');

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