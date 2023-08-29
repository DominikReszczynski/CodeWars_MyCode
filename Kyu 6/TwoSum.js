function twoSum(numbers, target) {
	let i = 0;
	let j = 0;
	const result = [];
	for (i; i < numbers.length; i++) {
		for (j = i + 1; j < numbers.length; j++) {
			if (numbers[i] + numbers[j] === target) {
				result.push(i);
				result.push(j);

				console.log(result);
				return result;
			}
		}
	}
}
