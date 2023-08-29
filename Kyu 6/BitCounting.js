var countBits = function (n) {
	let result = 0;
	const binArray = [];
	let bit = 0;
	while (n > 0) {
		bit = n % 2;
		binArray.push(bit);
		if (bit === 1) result++;
		n = Math.floor(n / 2);
		console.log(n);
	}
	console.log(binArray);
	return result;
};
