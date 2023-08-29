function squareDigits(num) {
	num = num.toString();
	let result = [];
	num.split('').map(function (number) {
		result.push((number = parseInt(number) ** 2));
	});
	return parseInt(result.join(''));
}
