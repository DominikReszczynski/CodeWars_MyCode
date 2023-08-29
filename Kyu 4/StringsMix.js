function mix(s1, s2) {
	const result = {};
	const temporaryResult = [];
	const letterRegex = /[a-z]/g;

	const sortResult = (a, b) => {
		if (a[1].length > b[1].length) return -1;
		if (a[1].length < b[1].length) return 1;
		if (a[0] === '=' && b[0] !== '=') return 1;
		if (a[0] !== '=' && b[0] === '=') return -1;
		if (a[0] !== '=' && b[0] !== '=') {
			if (a[0] > b[0]) return 1;
			if (a[0] < b[0]) return -1;
		}
		return a[1].localeCompare(b[1]);
	};

	const processLetters = (i, p) => {
		result[p] ? null : (result[p] = ['', '']);
		result[p][i] += p;
	};

	const checkResult = (arr, i) => {
		if (result[i][1].length > result[i][0].length) return [2, result[i][1]];
		if (result[i][1].length < result[i][0].length) return [1, result[i][0]];
		return ['=', result[i][0]];
	};

	s1.replace(letterRegex, processLetters.bind({}, 0));
	s2.replace(letterRegex, processLetters.bind({}, 1));

	for (const i in result)
		if (result[i][0].length > 1 || result[i][1].length > 1)
			temporaryResult.push(checkResult(result, i));

	return temporaryResult
		.sort(sortResult)
		.map((e) => e.join(':'))
		.join('/');
}
