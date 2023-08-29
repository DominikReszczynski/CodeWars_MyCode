snail = function (array) {
	let times = array.length;
	let i = 0,
		j = times - 1,
		step = 1,
		count = 0;
	let result = array[0].slice();

	while (times > 0) {
		times -= 1;
		for (count = 0; count < times; count++) {
			i += step;
			result.push(array[i][j]);
		}
		step *= -1;
		for (count = 0; count < times; count++) {
			j += step;
			result.push(array[i][j]);
		}
	}
	return result;
};
