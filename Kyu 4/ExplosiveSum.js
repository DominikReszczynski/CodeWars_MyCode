const sum = (num) => {
	const dp = [1, ...new Array(num).fill(0)];

	for (let i = 1; i <= num; i++) {
		for (let j = i; j <= num; j++) {
			dp[j] += dp[j - i];
		}
	}

	return dp[num];
};
