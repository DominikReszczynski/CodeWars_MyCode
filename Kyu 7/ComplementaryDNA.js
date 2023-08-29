function DNAStrand(dna) {
	let array = dna.split('');
	let dnaTest = '';
	console.log(dna);
	for (let i = 0; i < array.length; i++) {
		if (array[i] === 'A') {
			array[i] = 'T';
		} else if (array[i] === 'T') {
			array[i] = 'A';
		} else if (array[i] === 'G') {
			array[i] = 'C';
		} else if (array[i] === 'C') {
			array[i] = 'G';
		}
	}
	console.log(`to jest tablica rozwiązana ${array}`);
	for (const element of array) {
		dnaTest += element;
	}
	console.log(`to jest tablica rozwiązana ${dnaTest}`);
	return dnaTest;
}
