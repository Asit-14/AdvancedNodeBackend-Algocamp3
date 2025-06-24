let obj = {
	name: "Asit Kumar",
	age: 25,
	city: "Ghaziabad",
	hobbies: ["reading", "coding", "gaming"],
	isStudent: true
}

// Accessing object properties


let emp = new Object();
emp.name = "John Doe";
emp.age = 30;
emp.city = "New York";
emp.hobbies = ["traveling", "photography"];
emp.isEmployee = true;
console.log(emp);

console.log(obj);


// Constructor function to create an employee object
function empobject(name, age, city, hobbies, isEmployee) {
	this.name = name;
	this.age = age;
	this.city = city;
	this.hobbies = hobbies;
	this.isEmployee = isEmployee;
}

// Creating an employee object using the constructor function
const e =  new  empobject("Asit kumar", 23, "Ghaziabad", ["reading", "coding"], true);
console.log(e);	



// Accessing properties using dot notatio
console.log(emp.age); // Output: 30
console.log(emp["age"]); // Output: 30

emp.email = "asitshakya789gmali.com";
console.log(emp); // Output: asitshakya789gmali.comdele


delete emp.age;