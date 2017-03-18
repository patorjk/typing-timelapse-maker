'use strict';

var path = require('path');

var keyMap = {};

// HOME ROW
keyMap['a'] = [
	path.resolve(__dirname, '../images/DSC_0056.jpg'),
	path.resolve(__dirname, '../images/DSC_0055.jpg'),
];
keyMap['A'] = keyMap['a'];

keyMap['s'] = [
	path.resolve(__dirname, '../images/DSC_0056.jpg'),
	path.resolve(__dirname, '../images/DSC_0057.jpg'),
];
keyMap['S'] = keyMap['s'];

keyMap['d'] = [
	path.resolve(__dirname, '../images/DSC_0058.jpg'),
	path.resolve(__dirname, '../images/DSC_0059.jpg'),
];
keyMap['D'] = keyMap['d'];

keyMap['f'] = [
	path.resolve(__dirname, '../images/DSC_0060.jpg'),
	path.resolve(__dirname, '../images/DSC_0061.jpg'),
];
keyMap['F'] = keyMap['f'];

keyMap['g'] = [
	path.resolve(__dirname, '../images/DSC_0060.jpg'),
	path.resolve(__dirname, '../images/DSC_0062.jpg'),
	path.resolve(__dirname, '../images/DSC_0063.jpg'),
	path.resolve(__dirname, '../images/DSC_0064.jpg'),
	path.resolve(__dirname, '../images/DSC_0062.jpg'),
];
keyMap['G'] = keyMap['g'];

keyMap['h'] = [
	path.resolve(__dirname, '../images/DSC_0066.jpg'),
	path.resolve(__dirname, '../images/DSC_0067.jpg'),
	path.resolve(__dirname, '../images/DSC_0068.jpg'),
	path.resolve(__dirname, '../images/DSC_0069.jpg'),
	path.resolve(__dirname, '../images/DSC_0067.jpg'),
];
keyMap['H'] = keyMap['h'];

// ugh, I forgot to type the J key, here we fake it
keyMap['j'] = [
	path.resolve(__dirname, '../images/DSC_0066.jpg'),
	path.resolve(__dirname, '../images/DSC_0071.jpg'),
];
keyMap['J'] = keyMap['j'];

keyMap['k'] = [
	path.resolve(__dirname, '../images/DSC_0070.jpg'),
	path.resolve(__dirname, '../images/DSC_0071.jpg'),
];
keyMap['K'] = keyMap['k'];

keyMap['l'] = [
	path.resolve(__dirname, '../images/DSC_0072.jpg'),
	path.resolve(__dirname, '../images/DSC_0073.jpg'),
];
keyMap['L'] = keyMap['l'];

keyMap[';'] = [
	path.resolve(__dirname, '../images/DSC_0074.jpg'),
	path.resolve(__dirname, '../images/DSC_0075.jpg'),
];
keyMap[':'] = keyMap[';'];

keyMap['"'] = [
	path.resolve(__dirname, '../images/DSC_0074.jpg'), // screwed up here too, so re-using this home row position
	path.resolve(__dirname, '../images/DSC_0076.jpg'),
	path.resolve(__dirname, '../images/DSC_0077.jpg'),
	path.resolve(__dirname, '../images/DSC_0078.jpg'),
	path.resolve(__dirname, '../images/DSC_0076.jpg'),
];
keyMap["'"] = keyMap['"'];

keyMap['\n'] = [
	path.resolve(__dirname, '../images/DSC_0079.jpg'), 
	path.resolve(__dirname, '../images/DSC_0080.jpg'),
	path.resolve(__dirname, '../images/DSC_0081.jpg'),
	path.resolve(__dirname, '../images/DSC_0082.jpg'),
	path.resolve(__dirname, '../images/DSC_0080.jpg'),
];

keyMap['q'] = [
	path.resolve(__dirname, '../images/DSC_0083.jpg'), 
	path.resolve(__dirname, '../images/DSC_0084.jpg'),
	path.resolve(__dirname, '../images/DSC_0085.jpg'),
	path.resolve(__dirname, '../images/DSC_0086.jpg'),
	path.resolve(__dirname, '../images/DSC_0084.jpg'),
];
keyMap['Q'] = keyMap['q'];

keyMap['w'] = [
	path.resolve(__dirname, '../images/DSC_0087.jpg'), 
	path.resolve(__dirname, '../images/DSC_0088.jpg'),
	path.resolve(__dirname, '../images/DSC_0089.jpg'),
	path.resolve(__dirname, '../images/DSC_0090.jpg'),
	path.resolve(__dirname, '../images/DSC_0088.jpg'),
];
keyMap['W'] = keyMap['w'];

keyMap['e'] = [
	path.resolve(__dirname, '../images/DSC_0091.jpg'), 
	path.resolve(__dirname, '../images/DSC_0092.jpg'),
	path.resolve(__dirname, '../images/DSC_0093.jpg'),
	path.resolve(__dirname, '../images/DSC_0094.jpg'),
	path.resolve(__dirname, '../images/DSC_0092.jpg'),
];
keyMap['E'] = keyMap['e'];

keyMap['r'] = [
	path.resolve(__dirname, '../images/DSC_0091.jpg'), // ugh, messed photo up so am re-using a homerow image from earlier
	path.resolve(__dirname, '../images/DSC_0096.jpg'),
	path.resolve(__dirname, '../images/DSC_0097.jpg'),
	path.resolve(__dirname, '../images/DSC_0098.jpg'),
	path.resolve(__dirname, '../images/DSC_0096.jpg'),
];
keyMap['R'] = keyMap['r'];

keyMap['t'] = [
	path.resolve(__dirname, '../images/DSC_0099.jpg'),
	path.resolve(__dirname, '../images/DSC_0100.jpg'),
	path.resolve(__dirname, '../images/DSC_0101.jpg'),
	path.resolve(__dirname, '../images/DSC_0102.jpg'),
	path.resolve(__dirname, '../images/DSC_0100.jpg'),
];
keyMap['T'] = keyMap['t'];

keyMap['y'] = [
	path.resolve(__dirname, '../images/DSC_0103.jpg'),
	path.resolve(__dirname, '../images/DSC_0104.jpg'),
	path.resolve(__dirname, '../images/DSC_0105.jpg'),
	path.resolve(__dirname, '../images/DSC_0106.jpg'),
	path.resolve(__dirname, '../images/DSC_0104.jpg'),
];
keyMap['Y'] = keyMap['y'];

keyMap['u'] = [
	path.resolve(__dirname, '../images/DSC_0107.jpg'),
	path.resolve(__dirname, '../images/DSC_0108.jpg'),
	path.resolve(__dirname, '../images/DSC_0109.jpg'),
	path.resolve(__dirname, '../images/DSC_0110.jpg'),
	path.resolve(__dirname, '../images/DSC_0108.jpg'),
];
keyMap['U'] = keyMap['u'];

keyMap['i'] = [
	path.resolve(__dirname, '../images/DSC_0111.jpg'),
	path.resolve(__dirname, '../images/DSC_0112.jpg'),
	path.resolve(__dirname, '../images/DSC_0113.jpg'),
	path.resolve(__dirname, '../images/DSC_0114.jpg'),
	path.resolve(__dirname, '../images/DSC_0112.jpg'),
];
keyMap['I'] = keyMap['i'];

keyMap['o'] = [
	path.resolve(__dirname, '../images/DSC_0115.jpg'),
	path.resolve(__dirname, '../images/DSC_0116.jpg'),
	path.resolve(__dirname, '../images/DSC_0117.jpg'),
	path.resolve(__dirname, '../images/DSC_0118.jpg'),
	path.resolve(__dirname, '../images/DSC_0116.jpg'),
];
keyMap['O'] = keyMap['o'];

keyMap['p'] = [
	path.resolve(__dirname, '../images/DSC_0119.jpg'),
	path.resolve(__dirname, '../images/DSC_0120.jpg'),
	path.resolve(__dirname, '../images/DSC_0122.jpg'),
	path.resolve(__dirname, '../images/DSC_0123.jpg'),
	path.resolve(__dirname, '../images/DSC_0120.jpg'),
];
keyMap['P'] = keyMap['p'];

keyMap['['] = [
	path.resolve(__dirname, '../images/DSC_0124.jpg'),
	path.resolve(__dirname, '../images/DSC_0125.jpg'),
	path.resolve(__dirname, '../images/DSC_0126.jpg'),
	path.resolve(__dirname, '../images/DSC_0127.jpg'),
	path.resolve(__dirname, '../images/DSC_0125.jpg'),
];
keyMap['{'] = keyMap['['];

keyMap[']'] = [
	path.resolve(__dirname, '../images/DSC_0128.jpg'),
	path.resolve(__dirname, '../images/DSC_0129.jpg'),
	path.resolve(__dirname, '../images/DSC_0130.jpg'),
	path.resolve(__dirname, '../images/DSC_0131.jpg'),
	path.resolve(__dirname, '../images/DSC_0129.jpg'),
];
keyMap['}'] = keyMap[']'];

keyMap['\\'] = [
	path.resolve(__dirname, '../images/DSC_0132.jpg'),
	path.resolve(__dirname, '../images/DSC_0133.jpg'),
	path.resolve(__dirname, '../images/DSC_0134.jpg'),
	path.resolve(__dirname, '../images/DSC_0135.jpg'),
	path.resolve(__dirname, '../images/DSC_0133.jpg'),
];
keyMap['|'] = keyMap['\\'];

keyMap['z'] = [
	path.resolve(__dirname, '../images/DSC_0136.jpg'),
	path.resolve(__dirname, '../images/DSC_0137.jpg'),
	path.resolve(__dirname, '../images/DSC_0138.jpg'),
	path.resolve(__dirname, '../images/DSC_0138-Edit.jpg'), // made an edit
	path.resolve(__dirname, '../images/DSC_0137.jpg'),
];
keyMap['Z'] = keyMap['z'];

keyMap['x'] = [
	path.resolve(__dirname, '../images/DSC_0140.jpg'),
	path.resolve(__dirname, '../images/DSC_0141.jpg'),
	path.resolve(__dirname, '../images/DSC_0142.jpg'),
	path.resolve(__dirname, '../images/DSC_0143.jpg'),
	path.resolve(__dirname, '../images/DSC_0141.jpg'),
];
keyMap['X'] = keyMap['x'];

keyMap['c'] = [
	path.resolve(__dirname, '../images/DSC_0144.jpg'),
	path.resolve(__dirname, '../images/DSC_0145.jpg'),
	path.resolve(__dirname, '../images/DSC_0146.jpg'),
	path.resolve(__dirname, '../images/DSC_0147.jpg'),
	path.resolve(__dirname, '../images/DSC_0145.jpg'),
];
keyMap['C'] = keyMap['c'];

keyMap['v'] = [
	path.resolve(__dirname, '../images/DSC_0148.jpg'),
	path.resolve(__dirname, '../images/DSC_0149.jpg'),
	path.resolve(__dirname, '../images/DSC_0150.jpg'),
	path.resolve(__dirname, '../images/DSC_0151.jpg'),
	path.resolve(__dirname, '../images/DSC_0149.jpg'),
];
keyMap['V'] = keyMap['v'];

keyMap['b'] = [
	path.resolve(__dirname, '../images/DSC_0152.jpg'),
	path.resolve(__dirname, '../images/DSC_0153.jpg'),
	path.resolve(__dirname, '../images/DSC_0154.jpg'),
	path.resolve(__dirname, '../images/DSC_0155.jpg'),
	path.resolve(__dirname, '../images/DSC_0153.jpg'),
];
keyMap['B'] = keyMap['b'];

keyMap['n'] = [
	path.resolve(__dirname, '../images/DSC_0156.jpg'),
	path.resolve(__dirname, '../images/DSC_0157.jpg'),
	path.resolve(__dirname, '../images/DSC_0158.jpg'),
	path.resolve(__dirname, '../images/DSC_0159.jpg'),
	path.resolve(__dirname, '../images/DSC_0157.jpg'),
];
keyMap['N'] = keyMap['n'];

keyMap['m'] = [
	path.resolve(__dirname, '../images/DSC_0160.jpg'),
	path.resolve(__dirname, '../images/DSC_0161.jpg'),
	path.resolve(__dirname, '../images/DSC_0162.jpg'),
	path.resolve(__dirname, '../images/DSC_0163.jpg'),
	path.resolve(__dirname, '../images/DSC_0161.jpg'),
];
keyMap['M'] = keyMap['m'];

keyMap[','] = [
	path.resolve(__dirname, '../images/DSC_0164.jpg'),
	path.resolve(__dirname, '../images/DSC_0165.jpg'),
	path.resolve(__dirname, '../images/DSC_0166.jpg'),
	path.resolve(__dirname, '../images/DSC_0167.jpg'),
	path.resolve(__dirname, '../images/DSC_0165.jpg'),
];
keyMap['<'] = keyMap[','];

keyMap['.'] = [
	path.resolve(__dirname, '../images/DSC_0168.jpg'),
	path.resolve(__dirname, '../images/DSC_0169.jpg'),
	path.resolve(__dirname, '../images/DSC_0170.jpg'),
	path.resolve(__dirname, '../images/DSC_0171.jpg'),
	path.resolve(__dirname, '../images/DSC_0169.jpg'),
];
keyMap['>'] = keyMap['.'];

keyMap['/'] = [
	path.resolve(__dirname, '../images/DSC_0172.jpg'),
	path.resolve(__dirname, '../images/DSC_0173.jpg'),
	path.resolve(__dirname, '../images/DSC_0174.jpg'),
	path.resolve(__dirname, '../images/DSC_0175.jpg'),
	path.resolve(__dirname, '../images/DSC_0173.jpg'),
];
keyMap['?'] = keyMap['/'];

keyMap['\t'] = [
	path.resolve(__dirname, '../images/DSC_0184.jpg'),
	path.resolve(__dirname, '../images/DSC_0185.jpg'),
	path.resolve(__dirname, '../images/DSC_0186.jpg'),
	path.resolve(__dirname, '../images/DSC_0187.jpg'),
	path.resolve(__dirname, '../images/DSC_0185.jpg'),
];

keyMap['`'] = [
	path.resolve(__dirname, '../images/DSC_0188.jpg'),
	path.resolve(__dirname, '../images/DSC_0189.jpg'),
	path.resolve(__dirname, '../images/DSC_0190.jpg'),
	path.resolve(__dirname, '../images/DSC_0191.jpg'),
	path.resolve(__dirname, '../images/DSC_0189.jpg'),
];
keyMap['~'] = keyMap['`'];

keyMap['1'] = [
	path.resolve(__dirname, '../images/DSC_0192.jpg'),
	path.resolve(__dirname, '../images/DSC_0193.jpg'),
	path.resolve(__dirname, '../images/DSC_0194.jpg'),
	path.resolve(__dirname, '../images/DSC_0195.jpg'),
	path.resolve(__dirname, '../images/DSC_0193.jpg'),
];
keyMap['!'] = keyMap['1'];

keyMap['2'] = [
	path.resolve(__dirname, '../images/DSC_0196.jpg'),
	path.resolve(__dirname, '../images/DSC_0197.jpg'),
	path.resolve(__dirname, '../images/DSC_0198.jpg'),
	path.resolve(__dirname, '../images/DSC_0199.jpg'),
	path.resolve(__dirname, '../images/DSC_0197.jpg'),
];
keyMap['@'] = keyMap['2'];

keyMap['3'] = [
	path.resolve(__dirname, '../images/DSC_0200.jpg'),
	path.resolve(__dirname, '../images/DSC_0201.jpg'),
	path.resolve(__dirname, '../images/DSC_0202.jpg'),
	path.resolve(__dirname, '../images/DSC_0203.jpg'),
	path.resolve(__dirname, '../images/DSC_0201.jpg'),
];
keyMap['#'] = keyMap['3'];

keyMap['4'] = [
	path.resolve(__dirname, '../images/DSC_0204.jpg'),
	path.resolve(__dirname, '../images/DSC_0205.jpg'),
	path.resolve(__dirname, '../images/DSC_0206.jpg'),
	path.resolve(__dirname, '../images/DSC_0207.jpg'),
	path.resolve(__dirname, '../images/DSC_0205.jpg'),
];
keyMap['$'] = keyMap['4'];

keyMap['5'] = [
	path.resolve(__dirname, '../images/DSC_0208.jpg'),
	path.resolve(__dirname, '../images/DSC_0209.jpg'),
	path.resolve(__dirname, '../images/DSC_0210.jpg'),
	path.resolve(__dirname, '../images/DSC_0211.jpg'),
	path.resolve(__dirname, '../images/DSC_0209.jpg'),
];
keyMap['%'] = keyMap['5'];

keyMap['6'] = [
	path.resolve(__dirname, '../images/DSC_0212.jpg'),
	path.resolve(__dirname, '../images/DSC_0213.jpg'),
	path.resolve(__dirname, '../images/DSC_0214.jpg'),
	path.resolve(__dirname, '../images/DSC_0215.jpg'),
	path.resolve(__dirname, '../images/DSC_0213.jpg'),
];
keyMap['^'] = keyMap['6'];

keyMap['7'] = [
	path.resolve(__dirname, '../images/DSC_0216.jpg'),
	path.resolve(__dirname, '../images/DSC_0217.jpg'),
	path.resolve(__dirname, '../images/DSC_0218.jpg'),
	path.resolve(__dirname, '../images/DSC_0219.jpg'),
	path.resolve(__dirname, '../images/DSC_0217.jpg'),
];
keyMap['&'] = keyMap['7'];

keyMap['8'] = [
	path.resolve(__dirname, '../images/DSC_0220.jpg'),
	path.resolve(__dirname, '../images/DSC_0221.jpg'),
	path.resolve(__dirname, '../images/DSC_0222.jpg'),
	path.resolve(__dirname, '../images/DSC_0223.jpg'),
	path.resolve(__dirname, '../images/DSC_0221.jpg'),
];
keyMap['*'] = keyMap['8'];

keyMap['9'] = [
	path.resolve(__dirname, '../images/DSC_0224.jpg'),
	path.resolve(__dirname, '../images/DSC_0225.jpg'),
	path.resolve(__dirname, '../images/DSC_0226.jpg'),
	path.resolve(__dirname, '../images/DSC_0227.jpg'),
	path.resolve(__dirname, '../images/DSC_0225.jpg'),
];
keyMap['('] = keyMap['9'];

keyMap['0'] = [
	path.resolve(__dirname, '../images/DSC_0228.jpg'),
	path.resolve(__dirname, '../images/DSC_0229.jpg'),
	path.resolve(__dirname, '../images/DSC_0230.jpg'),
	path.resolve(__dirname, '../images/DSC_0231.jpg'),
	path.resolve(__dirname, '../images/DSC_0229.jpg'),
];
keyMap[')'] = keyMap['0'];

keyMap['-'] = [
	path.resolve(__dirname, '../images/DSC_0232.jpg'),
	path.resolve(__dirname, '../images/DSC_0233.jpg'),
	path.resolve(__dirname, '../images/DSC_0234.jpg'),
	path.resolve(__dirname, '../images/DSC_0235.jpg'),
	path.resolve(__dirname, '../images/DSC_0233.jpg'),
];
keyMap['_'] = keyMap['-'];

keyMap['='] = [
	path.resolve(__dirname, '../images/DSC_0236.jpg'),
	path.resolve(__dirname, '../images/DSC_0237.jpg'),
	path.resolve(__dirname, '../images/DSC_0238.jpg'),
	path.resolve(__dirname, '../images/DSC_0239.jpg'),
	path.resolve(__dirname, '../images/DSC_0237.jpg'),
];
keyMap['+'] = keyMap['='];

keyMap[' '] = [
	path.resolve(__dirname, '../images/DSC_0241.jpg'),
	path.resolve(__dirname, '../images/DSC_0242.jpg'),
];

module.exports = keyMap;