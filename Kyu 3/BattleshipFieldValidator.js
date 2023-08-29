function validateBattlefield(field) {
	let sum = field.flat().reduce((a, b) => a + b);
	let shipColumn = 0;
	let shipLine = 0;
	let arrColumn = [];
	let arrLine = [];
	if (sum !== 20) return false;

	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			if (
				(field[i][j] && field[i + 1][j - 1]) ||
				(field[i][j] && field[i + 1][j + 1])
			)
				return false;
		}
	}

	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			if (field[j][i]) {
				++shipColumn;
			} else if (!field[j][i]) {
				arrColumn.push(shipColumn);
				shipColumn = 0;
			}
			if (field[i][j]) {
				shipLine++;
			} else if (!field[i][j]) {
				arrLine.push(shipLine);
				shipLine = 0;
			}
		}
	}
	let arrShip = [...arrColumn, ...arrLine].filter((e) => e);
	let ship1 = 0;
	let ship2 = 0;
	let ship3 = 0;
	let ship4 = 0;
	for (let ship of arrShip) {
		if (ship === 1) ship1++;
		else if (ship === 2) ship2++;
		else if (ship === 3) ship3++;
		else if (ship === 4) ship4++;
	}
	if (ship1 !== 24 || ship2 !== 3 || ship3 !== 2 || ship4 !== 1) {
		return false;
	}
	return true;
}
