function spiralize(size) {
	if (size === 0) return [];

	const spiral = [];
	for (let i = 0; i < size; i++) {
		spiral.push(new Array(size).fill(0));
	}

	let i = 0;
	let j = 0;
	let di = 0;
	let dj = 1;
	let rotated = 0;

	function canMove(i, j, di, dj) {
		const n = spiral.length;

		i += di;
		j += dj;

		if (i < 0 || i >= n || j < 0 || j >= n) return false;

		if (spiral[i][j] === 1) return false;

		i += di;
		j += dj;

		if (i < 0 || i >= n || j < 0 || j >= n) return true;
		if (spiral[i][j] === 1) return false;

		return true;
	}

	while (rotated < 2) {
		spiral[i][j] = 1;

		if (canMove(i, j, di, dj)) {
			i += di;
			j += dj;
			rotated = 0;
		} else {
			[di, dj] = [dj, -di];
			rotated += 1;
		}
	}

	di = -dj;
	dj = di;

	if (
		i + di >= 0 &&
		i + di < size &&
		j + dj >= 0 &&
		j + dj < size &&
		spiral[i + di][j + dj] === 1
	) {
		spiral[i][j] = 0;
	}

	return spiral;
}
