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

	const person = {
		gender: gender,
		firstName: name,
		lastName: lastName,
		age: age,
	};

	people.push(person);
}
const peopleJSON = people.map((person) => JSON.stringify(person)).join(',\n');
const formattedPeopleJSON = `[\n${peopleJSON}\n]`;

fs.writeFile('people.json', formattedPeopleJSON, (err) => {
	if (err) {
		console.error('Something went wrong...', err);
		return;
	}

	console.log('File has been saved!');
});
