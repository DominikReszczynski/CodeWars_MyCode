function alphabetPosition(text) {
	const alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	let result = '';
	text = text.toLowerCase();
	text = text.replace(/\s/g, ''); // usuwanie białych znaków z str
	text = text.replace(/[^a-z]/gi, ''); // usuwanie wszystkich znaków które nie są od a-z z str
	console.log(text);
	for (let i = 0; i < text.length; i++) {
		result += String(alphabet.indexOf(text[i]) + 1) + ' ';
		console.log(result);
	}
	result = result.slice(0, -1);
	return result;
}
