function add(a, b) {
	let carry = 0;
	let keeps = '';
	[a, b] = zero(a, b);
	const length = a.length;

	function zero(x, y) {
		const maxlen = Math.max(x.length, y.length);
		return [x.padStart(maxlen, '0'), y.padStart(maxlen, '0')];
	}

	for (let i = 1; i <= length; i++) {
		const p = carry + Number(a[length - i]) + Number(b[length - i]);
		carry = Math.trunc(p / 10);
		keeps = (p % 10) + keeps;
	}
	return carry === 0 ? keeps : carry + keeps;
}
