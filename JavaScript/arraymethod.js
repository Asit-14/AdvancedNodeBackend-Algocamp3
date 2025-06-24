let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.push(11); // Adds 11 to the end of the array
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


arr.pop(); // Removes the last element (11)
console.log(arr); // Output: [1, 2, 3, 4,


arr.shift(); // Removes the first element (1)
console.log(arr); // Output: [2, 3, 4, 5,

arr.unshift(1); // Adds 0 to the beginning of the array
console.log(arr); // Output: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10]




let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr3 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let arr4 = arr2.concat(arr3); // Combines arr2 and arr3
console.log(arr4); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


let arr5 = arr4.join("$");
console.log(arr5); // Output: "1$2$3$4$5$6$7$8$9$10$11$12$13$14$15$16$17$18$19$20"


arr4.reverse();
console.log(arr4); // Output: [20, 19, 18, 17

console.log(arr4.indexOf(5)); // Output: 4 (index of element 5 in arr4	)


let ar = [1, 2, 4, 5, 6, 7, 8, 9, 10];
console.log(ar.slice(2, 5));


ar.splice(2, 3, 11, 12, 13); // Removes 3 elements starting from index 2 and adds 11, 12, 13
console.log(ar); // Output: [1, 2, 11, 12,
