// const powertwo = (n) => {
// 	return n ** 2
// }



// // higher order function  function  treated  as  a  variable

// function powercube(powertwo, n) {
// 	return powertwo(n) * n;
// }

// console.log(powercube(powertwo, 3))






// function sayhello() {
// 	return () => {
// 		console.log("Hellow  Asit ");
// 	}
// }

// let guessvalue = sayhello();

// console.log(guessvalue);

// guessvalue();






// const higherorder = n => {
// 	const onefun = m => {
// 		const twofun = p => {
// 			return m + n + p;
// 		}
// 		return twofun;
// 	}
// 	return onefun;
// }
// console.log(higherorder(2)(3)(4))




// const mynums = [2, 3, 4, 5]

// const sumarray = arr => {
// 	let total = 0; 

// 	arr.forEach(function (elememt) {
// 		total += elememt;
// 	});
// 	return total;
// }

// console.log((sumarray(mynums)));





function onemorehello() {
	console.log("hello Asit Shakya", Math.random());
}
setInterval(onemorehello, 1000)

// setTimeout(onemorehello, 2000)