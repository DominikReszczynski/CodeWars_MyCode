const CHARS =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?!.,- ';
device.decode = (input) => {
	const result = input.split('');
	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < CHARS.length; j++) {
			const originalChar = result[i];
			result[i] = CHARS[j];
			const attempt = device.encode(result.join(''));
			if (attempt[i] === input[i]) break;
			result[i] = originalChar;
		}
	}
	return result.join('');
};
