'use strict';

var keyFrameMap = require('./key-frame-map');
var fs = require('fs-extra');
var path = require('path');

function _padNum(n, width) {
	var z = '0';
	var num = n + '';
	return num.length >= width ? num : new Array(width - num.length + 1).join(z) + num;
}

module.exports = function(opts) {
	var outputDir = opts.outputDir;
	var layoutType = opts.layoutType;
	var equalFramesPerKey = opts.equalFramesPerKey;
	var atFrame = 0;
	var maxFramesPerKey = 5;

	function _getNextOutputFrameName() {
		return "img_" + _padNum(++atFrame, 5) + ".jpg";
	}

	this.writeFramesForKey = function(ch, count) {
		
		var frames = keyFrameMap[ch];
		var ii, len, pos, item;
		if (frames) {
			
			try {
				len = equalFramesPerKey ? maxFramesPerKey : frames.length;

				for (ii = 0; ii < len; ii++) {
					pos = ii;

					// If we've equalized the frames per key, we need to make sure a frame exists
					// if not, use the first frame
					if (ii >= frames.length) {
						pos = 0;
					}
					item = frames[pos];

					var outpath = path.resolve(outputDir, _getNextOutputFrameName() );
					fs.copySync( item, outpath  );
				}
			} catch(err) {
				console.warn('There was an error for chracter:'+ ch);
				console.dir(err);
			}

		} else {
			console.warn('No image frames for:'+ ch);
		}
	};
};