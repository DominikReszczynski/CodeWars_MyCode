function moveZeros(arr) {
	let count = 0;
	const arrWithout0 = arr.filter((element) => {
		if (element === 0) {
			count++;
		}
		return element !== 0;
	});

	while (count > 0) {
		arrWithout0.push(0);
		count--;
	}

	console.log(count);
	console.log(arrWithout0);
	return arrWithout0;
}
