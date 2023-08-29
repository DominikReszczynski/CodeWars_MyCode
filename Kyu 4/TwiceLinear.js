function dblLinear(n) {
	const thisIsInRow = (item) => {
		if (item === 1) return true;
		if ((item - 1) % 3 === 0 && (item - 1) % 2 === 0) {
			return thisIsInRow((item - 1) / 3) || thisIsInRow((item - 1) / 2);
		}
		if ((item - 1) % 3 === 0) return thisIsInRow((item - 1) / 3);
		if ((item - 1) % 2 === 0) return thisIsInRow((item - 1) / 2);
		return false;
	};
	let i = 0,
		j = 0;
	while (j - 1 < n) if (thisIsInRow(++i)) j++;
	return i;
}
