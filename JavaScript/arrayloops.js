// let arr = [2, 3, 4, 5]

// arr.forEach(function (element, index, arr) {
// 	console.log(index, element, arr);
// })


// arr.forEach((element, index, arr) => {
// 	console.log("=>",index, element, arr);
// })

// const heros = ["Virat", "Tiger", "salman", "varun"];
// heros.forEach((el) => {
// 	console.log(el.toUpperCase());
// })

// arr.map((element, index, arr) => {
// 	console.log(element, index, arr)
// })


// heros.map((h) => {
// 	console.log(h.toUpperCase());
// });




// filters



// const heros = ["Virat", "Tiger", "salman", "varun"];
// console.log(heros);

// const herowitman = heros.filter((h) => {
// 	return h.endsWith("man")
// })
// console.log(herowithman)



// // shoping cart

// const cartbill = [20, 30, 50];
// const sumofcartbill = cartbill.reduce((prev, curr) => {
// 	prev + curr,0;
// })

// console.log(sumofcartbill);



// const gamescore = [200, 300, 400, 250]

// //check if  all  values  are  number
// const gamescorecheck = gamescore.every((v) => {
// 	typeof v === Number;
// });

// console.log("check", gamescorecheck);



// find  score  aboe  200;

const above200 = gamescore.find((v) => {
	scorr > 200;
})
console.log(above200);