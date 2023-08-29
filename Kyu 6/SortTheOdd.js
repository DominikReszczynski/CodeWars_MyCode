function sortArray(array) {
	const oddNumbers = array.filter((num) => num % 2 !== 0);
	oddNumbers.sort((a, b) => a - b);

	let oddIndex = 0;
	const result = array.map((num) => {
		if (num % 2 !== 0) {
			const oddNum = oddNumbers[oddIndex];
			oddIndex++;
			return oddNum;
		} else {
			return num;
		}
	});

	return result;
}
