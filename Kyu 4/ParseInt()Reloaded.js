function parseInt(string) {
	const wordToNumber = {
		zero: 0,
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
		ten: 10,
		eleven: 11,
		twelve: 12,
		thirteen: 13,
		fourteen: 14,
		fifteen: 15,
		sixteen: 16,
		seventeen: 17,
		eighteen: 18,
		nineteen: 19,
		twenty: 20,
		thirty: 30,
		forty: 40,
		fifty: 50,
		sixty: 60,
		seventy: 70,
		eighty: 80,
		ninety: 90,
		hundred: 100,
		thousand: 1000,
		million: 1000000,
	};

	const words = string.replace(/-/g, ' ').replace(/ and /g, ' ').split(' ');

	let total = 0;
	let currentNumber = 0;
	let lastNumber = 0;

	for (const word of words) {
		if (word === 'million' || word === 'thousand') {
			total += currentNumber * wordToNumber[word];
			currentNumber = 0;
		} else if (word === 'hundred') currentNumber *= wordToNumber[word];
		else currentNumber += wordToNumber[word];
	}
	total += currentNumber;
	return total;
}
// function parseInt(string) {
//   console.log(string);
//   const words = string.toLowerCase().split(/\s+/);
//   let number = 0;

//   const wordToNumber = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//     ten: 10,
//     eleven: 11,
//     twelve: 12,
//     thirteen: 13,
//     fourteen: 14,
//     fifteen: 15,
//     sixteen: 16,
//     seventeen: 17,
//     eighteen: 18,
//     nineteen: 19,
//     twenty: 20,
//     thirty: 30,
//     forty: 40,
//     fifty: 50,
//     sixty: 60,
//     seventy: 70,
//     eighty: 80,
//     ninety: 90,
//     and: 0,
//   };

//   let owords = words.map((word)=>{
//     if(word.includes('-')) return word.split('-')
//     return word
//   })

//   for (let i = 0 ; i<owords.length ; i++){
//     if (owords[i] in wordToNumber) owords[i]=wordToNumber[owords[i]]
//     if (typeof owords[i] === 'object') {
//       for (let j = 0; j < owords[i].length; j++) {
//         owords[i][j] = wordToNumber[owords[i][j]];
//       }
//         let value = owords[i].reduce((acc, curr) => acc + curr, 0);
//         if (i + 1 < owords.length && owords[i + 1] < owords[i]) {
//           value -= owords[i + 1].reduce((acc, curr) => acc + curr, 0);
//           i++;
//       }
//      owords[i] = value;
//     }
//     if (words[i]==='hundred') owords[i] = 100
//     else if(words[i]==='thousand') owords[i] = 1000
//     else if(words[i]==='million') owords[i] = 1000000
//   }
//   console.log(owords)

//   for (let i = 0; i<owords.length ; i++){
//     if (owords[i] < 100) {
//       number += owords[i];
//     }else if( owords[i] > 99 ){
//       number *= owords[i];
//     }
//     else number += owords[i]
//   }

//   console.log(number);
//   return number;
// }
