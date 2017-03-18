var keyMap = {};

keyMap['A'] = 'A';
keyMap['a'] = 'a';
keyMap['B'] = 'B';
keyMap['b'] = 'b';
keyMap['C'] = 'C';
keyMap['c'] = 'c';
keyMap['S'] = 'D';
keyMap['s'] = 'd';
keyMap['F'] = 'E';
keyMap['f'] = 'e';
keyMap['T'] = 'F';
keyMap['t'] = 'f';
keyMap['D'] = 'G';
keyMap['d'] = 'g';
keyMap['H'] = 'H';
keyMap['h'] = 'h';
keyMap['U'] = 'I';
keyMap['u'] = 'i';
keyMap['N'] = 'J';
keyMap['n'] = 'j';
keyMap['E'] = 'K';
keyMap['e'] = 'k';
keyMap['I'] = 'L';
keyMap['i'] = 'l';
keyMap['M'] = 'M';
keyMap['m'] = 'm';
keyMap['K'] = 'N';
keyMap['k'] = 'n';
keyMap['Y'] = 'O';
keyMap['y'] = 'o';
keyMap[':'] = 'P';
keyMap[';'] = 'p';
keyMap['Q'] = 'Q';
keyMap['q'] = 'q';
keyMap['P'] = 'R';
keyMap['p'] = 'r';
keyMap['R'] = 'S';
keyMap['r'] = 's';
keyMap['G'] = 'T';
keyMap['g'] = 't';
keyMap['L'] = 'U';
keyMap['l'] = 'u';
keyMap['V'] = 'V';
keyMap['v'] = 'v';
keyMap['W'] = 'W';
keyMap['w'] = 'w';
keyMap['X'] = 'X';
keyMap['x'] = 'x';
keyMap['J'] = 'Y';
keyMap['j'] = 'y';
keyMap['Z'] = 'Z';
keyMap['z'] = 'z';

keyMap['O'] = ':';
keyMap['o'] = ';';
keyMap['"'] = '"';
keyMap['\''] = '\'';

module.exports = {
	convert: function(ch) {
		var newKey = keyMap[ch];
		if (typeof newKey === 'undefined' && ch !== ' ' && ch !== '\n' && ch !== '\t') {
			console.warn('Key not found:'+ch);
			console.warn('Will map to QWERTY position (sometimes this is fine).');
		}
		return (typeof newKey === 'undefined') ? ch : newKey;
	}
};