function solution(list) {
	let result = [];
	let index = [];
	for (let i = 0; i < list.length; i++) {
		if (list[i] === list[i + 1] - 1) {
			index.push(i + 1);
		} else {
			if (index.length >= 2) {
				result.push(`${list[i - index.length]}-${list[i]}`);
			} else {
				result.push(`${list[i - index.length]}`);
				if (index.length > 0) {
					result.push(`${list[i]}`);
				}
			}
			index = [];
		}
	}
	return result.join(',');
}
