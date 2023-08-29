function countSmileys(arr) {
	const validSmileyRegex = /^[:;][-~]?[)D]$/; // Regular expression for valid smiley faces
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (validSmileyRegex.test(arr[i])) {
			count++;
		}
	}

	return count;
}
