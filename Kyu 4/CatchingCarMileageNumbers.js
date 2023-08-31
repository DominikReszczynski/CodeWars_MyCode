function isInteresting(number, awesomePhrases) {
	const isInterestingNumber = (num) => {
		if (num < 100) return false;
		if (awesomePhrases.includes(num)) return true;
		const numStr = num.toString();
		return (
			numStr.match(/^(\d)\1*$/) ||
			numStr.match(/^\d0+$/) ||
			'1234567890'.includes(numStr) ||
			'9876543210'.includes(numStr) ||
			numStr === numStr.split('').reverse().join('')
		);
	};
	if (isInterestingNumber(number)) return 2;
	if (isInterestingNumber(number + 1) || isInterestingNumber(number + 2))
		return 1;
	return 0;
}
