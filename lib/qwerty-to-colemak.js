var keyMap = {};

keyMap['A'] = 'A';
keyMap['a'] = 'a';
keyMap['B'] = 'B';
keyMap['b'] = 'b';
keyMap['C'] = 'C';
keyMap['c'] = 'c';
keyMap['D'] = 'S';
keyMap['d'] = 's';
keyMap['E'] = 'F';
keyMap['e'] = 'f';
keyMap['F'] = 'T';
keyMap['f'] = 't';
keyMap['G'] = 'D';
keyMap['g'] = 'd';
keyMap['H'] = 'H';
keyMap['h'] = 'h';
keyMap['I'] = 'U';
keyMap['i'] = 'u';
keyMap['J'] = 'N';
keyMap['j'] = 'n';
keyMap['K'] = 'E';
keyMap['k'] = 'e';
keyMap['L'] = 'I';
keyMap['l'] = 'i';
keyMap['M'] = 'M';
keyMap['m'] = 'm';
keyMap['N'] = 'K';
keyMap['n'] = 'k';
keyMap['O'] = 'Y';
keyMap['o'] = 'y';
keyMap['P'] = ':';
keyMap['p'] = ';';
keyMap['Q'] = 'Q';
keyMap['q'] = 'q';
keyMap['R'] = 'P';
keyMap['r'] = 'p';
keyMap['S'] = 'R';
keyMap['s'] = 'r';
keyMap['T'] = 'G';
keyMap['t'] = 'g';
keyMap['U'] = 'L';
keyMap['u'] = 'l';
keyMap['V'] = 'V';
keyMap['v'] = 'v';
keyMap['W'] = 'W';
keyMap['w'] = 'w';
keyMap['X'] = 'X';
keyMap['x'] = 'x';
keyMap['Y'] = 'J';
keyMap['y'] = 'j';
keyMap['Z'] = 'Z';
keyMap['z'] = 'z';

keyMap[':'] = 'O';
keyMap[';'] = 'o';
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