var uniqueInOrder = function (iterable) {
	let array = [];
	if (typeof iterable === 'number') {
		array = String(iterable)
			.split('')
			.map((iterable) => {
				return Number(iterable);
			});
	} else if (Array.isArray(iterable)) {
		array = iterable;
	} else {
		array = iterable.split('');
	}
	for (let i = 1; i < array.length; i++) {
		if (array[i - 1] === array[i]) {
			array.splice(i, 1);
			--i;
		} else {
			continue;
		}
	}
	return array;
};
