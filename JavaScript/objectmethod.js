let emp = {
	name: "John",
	age: 30,
	employeeId: 12345,
}

let keys = Object.keys(emp);
let values = Object.values(emp);
console.log("Keys:", keys);
console.log("Values:", values);

let entries = Object.entries(emp);
console.log("Entries:", entries);


Object.freeze(emp); // Prevents any changes to the object

emp.name = "Asit Kumar"; // This will not change the name
console.log("After freeze, name:", emp.name);

Object.seal(emp); // Prevents adding or removing properties, but allows modification of existing properties
emp.age = 31; // This will change the age
console.log("After seal, age:", emp.age);

