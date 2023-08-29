function addBinary(a, b) {
	let sum = a + b;
	let answer = '';

	if (sum === 0) {
		return '0';
	}

	while (sum > 0) {
		const moduloResult = sum % 2;
		answer = moduloResult + answer;
		sum = Math.floor(sum / 2);
	}

	return answer;
}
