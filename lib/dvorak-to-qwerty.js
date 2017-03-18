var keyMap = {};

keyMap['A'] = 'A';
keyMap['a'] = 'a';
keyMap['X'] = 'B';
keyMap['x'] = 'b';
keyMap['J'] = 'C';
keyMap['j'] = 'c';
keyMap['E'] = 'D';
keyMap['e'] = 'd';
keyMap['.'] = 'E';
keyMap['>'] = 'e';
keyMap['U'] = 'F';
keyMap['u'] = 'f';
keyMap['I'] = 'G';
keyMap['i'] = 'g';
keyMap['D'] = 'H';
keyMap['d'] = 'h';
keyMap['C'] = 'I';
keyMap['c'] = 'i';
keyMap['H'] = 'J';
keyMap['h'] = 'j';
keyMap['T'] = 'K';
keyMap['t'] = 'k';
keyMap['N'] = 'L';
keyMap['n'] = 'l';
keyMap['M'] = 'M';
keyMap['m'] = 'm';
keyMap['B'] = 'N';
keyMap['b'] = 'n';
keyMap['R'] = 'O';
keyMap['r'] = 'o';
keyMap['L'] = 'P';
keyMap['l'] = 'p';
keyMap['"'] = 'Q';
keyMap['\''] = 'q';
keyMap['P'] = 'R';
keyMap['p'] = 'r';
keyMap['O'] = 'S';
keyMap['o'] = 's';
keyMap['Y'] = 'T';
keyMap['y'] = 't';
keyMap['G'] = 'U';
keyMap['g'] = 'u';
keyMap['K'] = 'V';
keyMap['k'] = 'v';
keyMap['<'] = 'W';
keyMap[','] = 'w';
keyMap['Q'] = 'X';
keyMap['q'] = 'x';
keyMap['F'] = 'Y';
keyMap['f'] = 'y';
keyMap[':'] = 'Z';
keyMap[';'] = 'z';

keyMap['{'] = '_';
keyMap['['] = '-';
keyMap['}'] = '+';
keyMap[']'] = '=';

keyMap['?'] = '{';
keyMap['/'] = '[';
keyMap['+'] = '}';
keyMap['='] = ']';
keyMap['|'] = '|';
keyMap['\\'] = '\\';

keyMap['S'] = ':';
keyMap['s'] = ';';
keyMap['_'] = '"';
keyMap['-'] = '\'';

keyMap['W'] = ',';
keyMap['w'] = '<';
keyMap['v'] = '.';
keyMap['V'] = '>';
keyMap['z'] = '/';
keyMap['Z'] = '?';

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