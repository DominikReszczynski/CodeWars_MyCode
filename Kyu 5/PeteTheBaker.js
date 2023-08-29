function cakes(recipe, available) {
	const tab = Object.keys(recipe);
	let result = Infinity;
	const howManyCakes = [];
	if (!tab.every((key) => available.hasOwnProperty(key))) {
		return 0;
	} else {
		for (const element of tab) {
			const howManyCakeFromThisProduct = Math.floor(
				available[element] / recipe[element]
			);
			result = Math.min(result, howManyCakeFromThisProduct);
		}
	}
	return result;
}
