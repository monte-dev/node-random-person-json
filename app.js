const os = require('os');

console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('User Info', os.userInfo().username);

const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Tom', 'Joe', 'Mark', 'Michael', 'John'];
const femaleNames = ['Rachel', 'Olivia', 'Emma', 'Emily', 'Michelle'];
const lastNames = ['Smith', 'Doe', 'Pitt', 'Brown', 'Jones'];

function randChoice(arr) {
	const random = Math.floor(Math.random() * arr.length);
	return arr[random];
}

function generatePhoneNumber() {
	const countryCodes = ['+48 ', '+45 ', '+1 ', '+353 ', '+31 '];
	const randomCountryCode = randChoice(countryCodes);

	let phoneNumber = randomCountryCode;
	for (let i = 0; i < 9; i++) {
		phoneNumber += Math.floor(Math.random() * 10);
	}
	return phoneNumber;
}
const people = [];

for (let i = 0; i < 20; i++) {
	const gender = randChoice(genders);
	let name;
	if (gender === 'M') {
		name = randChoice(maleNames);
	} else {
		name = randChoice(femaleNames);
	}

	const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);
	const lastName = lastNames[randomLastNameIndex];
	const age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;

	const email = `${name.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
	const phoneNumber = generatePhoneNumber();

	const person = {
		gender: gender,
		firstName: name,
		lastName: lastName,
		age: age,
		email: email,
		phoneNumber: phoneNumber,
	};

	people.push(person);
}
const formattedPeopleJSON = JSON.stringify(people, null, 2);

fs.writeFile('people.json', formattedPeopleJSON, (err) => {
	if (err) {
		console.error('Something went wrong...', err);
		return;
	}

	console.log('File has been saved!');
});
