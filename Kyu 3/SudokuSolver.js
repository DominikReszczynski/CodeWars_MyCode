function sudoku(puzzle) {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let emptyCells = findEmptyCells(puzzle);

	while (emptyCells.length > 0) {
		let cell = emptyCells.pop();
		let [i, j] = cell;
		let possibleNumbers = findPossibleNumbers(i, j, puzzle);

		if (possibleNumbers.length === 1) {
			puzzle[i][j] = possibleNumbers[0];
			emptyCells = findEmptyCells(puzzle); // Zaktualizuj puste komórki
		}
	}

	return puzzle;
}

function findEmptyCells(puzzle) {
	const emptyCells = [];
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (puzzle[i][j] === 0) {
				emptyCells.push([i, j]);
			}
		}
	}
	return emptyCells;
}

function findPossibleNumbers(row, col, puzzle) {
	const rowValues = puzzle[row];
	const colValues = puzzle.map((r) => r[col]);
	const squareValues = [];
	const rowStart = Math.floor(row / 3) * 3;
	const colStart = Math.floor(col / 3) * 3;

	for (let i = rowStart; i < rowStart + 3; i++) {
		for (let j = colStart; j < colStart + 3; j++) {
			squareValues.push(puzzle[i][j]);
		}
	}

	const usedValues = [...rowValues, ...colValues, ...squareValues];
	return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((num) => !usedValues.includes(num));
}
