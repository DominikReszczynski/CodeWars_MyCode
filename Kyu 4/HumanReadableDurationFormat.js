function formatDuration(seconds) {
	if (seconds === 0) {
		return 'now';
	}
	const timeUnits = {
		year: 365 * 24 * 60 * 60,
		day: 24 * 60 * 60,
		hour: 60 * 60,
		minute: 60,
		second: 1,
	};
	const timeUnitNames = {
		year: 'year',
		day: 'day',
		hour: 'hour',
		minute: 'minute',
		second: 'second',
	};
	const timeComponents = [];
	for (const [unit, duration] of Object.entries(timeUnits)) {
		if (seconds >= duration) {
			const count = Math.floor(seconds / duration);
			seconds %= duration;
			const unitName = timeUnitNames[unit];
			const pluralSuffix = count > 1 ? 's' : '';
			timeComponents.push(`${count} ${unitName}${pluralSuffix}`);
		}
	}
	const formattedTime = timeComponents.join(', ');
	if (timeComponents.length > 1) {
		const lastCommaIndex = formattedTime.lastIndexOf(',');
		if (lastCommaIndex !== -1) {
			const beforeAnd = formattedTime.slice(0, lastCommaIndex);
			const afterAnd = formattedTime.slice(lastCommaIndex + 2);
			return `${beforeAnd} and ${afterAnd}`;
		}
	}
	return formattedTime;
}
