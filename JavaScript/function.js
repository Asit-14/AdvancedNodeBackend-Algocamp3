function greet() {
	console.log("Hello, World!");
	console.log("Welcome to JavaScript programming!");
	console.log("Let's learn together!");
	console.log("Happy coding!");
	console.log("Enjoy your day!");
	console.log("Keep smiling!");
	console.log("Stay curious!");

}
function sqr(x) {
	console.log(x*x)
}


// greet();
// sqr(5);
function add(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;
}
function multiply(a, b) {
	return a * b;
}
function divide(a, b) {
	if (b === 0) {
		console.log("Error: Division by zero is not allowed.");
		return null;
	}
	return a / b;
}3
console.log(divide(8, 0)); // Error: Division by zero is not allowed.
console.log(add(8, 2)); // 4
console.log(subtract(10, 5)); // 5
console.log(multiply(3, 4)); // 12






function sumofallparameter() {
	let sum = 0; 
	for (var i = 0; i < arguments.length; i++){
		sum += arguments[i];

	}
	console.log("Sum of all parameters: " + sum);
}

sumofallparameter(1, 2, 3); // Sum of all parameters: 6
// sumofallparameter(1, 2, 3, 4, 5); // Sum of all parameters: 15





const sqrt = (x) => x * x;
console.log(sqrt(5)); // 25