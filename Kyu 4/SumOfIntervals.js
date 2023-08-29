function sumIntervals(intervals) {
	//   console.log(intervals)
	//   const result = [];

	//   for (let i = 0; i < intervals.length; i++){
	//     //result.push(i)
	//     for (let j = intervals[i][0]; j<intervals[i][1]; j++){
	//       result.push(j)
	//     }
	//   }
	//   let result2= [...new Set(result)]
	//   console.log(result2)
	//   return result2.length
	let totalLength = 0;
	const mergedIntervals = [];

	intervals.sort((a, b) => a[0] - b[0]);

	for (const interval of intervals) {
		if (
			mergedIntervals.length === 0 ||
			interval[0] > mergedIntervals[mergedIntervals.length - 1][1]
		) {
			mergedIntervals.push(interval);
		} else {
			mergedIntervals[mergedIntervals.length - 1][1] = Math.max(
				mergedIntervals[mergedIntervals.length - 1][1],
				interval[1]
			);
		}
	}

	for (const interval of mergedIntervals) {
		totalLength += interval[1] - interval[0];
	}

	return totalLength;
}
