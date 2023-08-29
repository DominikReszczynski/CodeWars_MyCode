function createPhoneNumber(numbers) {
	numbers.splice(0, 0, `(`);
	numbers.splice(4, 0, `)`);
	numbers.splice(5, 0, ` `);
	numbers.splice(9, 0, `-`);
	let phoneNumber = numbers.toString();
	//phoneNumber = phoneNumber.replace(",","")
	console.log(phoneNumber.length);
	for (let i = 0; i <= 13; i++) {
		phoneNumber = phoneNumber.replace(',', '');
	}
	return phoneNumber;
}
