function permutations(string) {
	let sortedChars, permutations, firstIdx, secondIdx, leftIdx, rightIdx;
	sortedChars = string.split('').sort();
	permutations = [sortedChars.join('')];
	while (true) {
		firstIdx = sortedChars.length - 2;
		while (firstIdx != -1 && sortedChars[firstIdx] >= sortedChars[firstIdx + 1])
			firstIdx--;
		if (firstIdx == -1) break;

		secondIdx = sortedChars.length - 1;
		while (sortedChars[firstIdx] >= sortedChars[secondIdx]) secondIdx--;

		[sortedChars[firstIdx], sortedChars[secondIdx]] = [
			sortedChars[secondIdx],
			sortedChars[firstIdx],
		];
		leftIdx = firstIdx + 1;
		rightIdx = sortedChars.length - 1;
		while (leftIdx < rightIdx) {
			[sortedChars[leftIdx], sortedChars[rightIdx]] = [
				sortedChars[rightIdx],
				sortedChars[leftIdx],
			];
			leftIdx++;
			rightIdx--;
		}
		permutations.push(sortedChars.join(''));
	}
	return permutations;
}
