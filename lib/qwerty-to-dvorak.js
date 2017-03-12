var keyMap = {};

keyMap['A'] = 'A';
keyMap['a'] = 'a';
keyMap['B'] = 'X';
keyMap['b'] = 'x';
keyMap['C'] = 'J';
keyMap['c'] = 'j';
keyMap['D'] = 'E';
keyMap['d'] = 'e';
keyMap['E'] = '.';
keyMap['e'] = '>';
keyMap['F'] = 'U';
keyMap['f'] = 'u';
keyMap['G'] = 'I';
keyMap['g'] = 'i';
keyMap['H'] = 'D';
keyMap['h'] = 'd';
keyMap['I'] = 'C';
keyMap['i'] = 'c';
keyMap['J'] = 'H';
keyMap['j'] = 'h';
keyMap['K'] = 'T';
keyMap['k'] = 't';
keyMap['L'] = 'N';
keyMap['l'] = 'n';
keyMap['M'] = 'M';
keyMap['m'] = 'm';
keyMap['N'] = 'B';
keyMap['n'] = 'b';
keyMap['O'] = 'R';
keyMap['o'] = 'r';
keyMap['P'] = 'L';
keyMap['p'] = 'l';
keyMap['Q'] = '"';
keyMap['q'] = '\'';
keyMap['R'] = 'P';
keyMap['r'] = 'p';
keyMap['S'] = 'O';
keyMap['s'] = 'o';
keyMap['T'] = 'Y';
keyMap['t'] = 'y';
keyMap['U'] = 'G';
keyMap['u'] = 'g';
keyMap['V'] = 'K';
keyMap['v'] = 'k';
keyMap['W'] = '<';
keyMap['w'] = ',';
keyMap['X'] = 'Q';
keyMap['x'] = 'q';
keyMap['Y'] = 'F';
keyMap['y'] = 'f';
keyMap['Z'] = ':';
keyMap['z'] = ';';

keyMap['_'] = '{';
keyMap['-'] = '[';
keyMap['+'] = '}';
keyMap['='] = ']';

keyMap['{'] = '?';
keyMap['['] = '/';
keyMap['}'] = '+';
keyMap[']'] = '=';
keyMap['|'] = '|';
keyMap['\\'] = '\\';

keyMap[':'] = 'S';
keyMap[';'] = 's';
keyMap['"'] = '_';
keyMap['\''] = '-';

keyMap[','] = 'W';
keyMap['<'] = 'w';
keyMap['.'] = 'v';
keyMap['>'] = 'V';
keyMap['/'] = 'Z';
keyMap['?'] = 'Z';

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