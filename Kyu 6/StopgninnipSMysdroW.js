function spinWords(string) {
	const array = string.split(' ');

	console.log(array);

	const newArray = array.map((wyraz) => {
		if (wyraz.length > 4) {
			const wyrazRev = wyraz.split('').reverse().join('');
			return wyrazRev;
		} else {
			return wyraz;
		}
	});
	const result = newArray.join(' ');
	console.log(result);
	return result;
}
