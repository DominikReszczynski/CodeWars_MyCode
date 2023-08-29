function isIsogram(str) {
	str = str.toUpperCase();
	str = str.split('');
	str = str.sort();
	let i = 1;
	for (i; i < str.length; ++i) {
		if (str[i - 1] === str[i]) return false;
	}
	return true;
}
