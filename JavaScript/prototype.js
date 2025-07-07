let myhero = ["thor", "ironman", "hulk"];
let dcheros = ["batman", "superman", "spiderman"];
let heropower = {
  thor: "lightning",
  ironman: "technology",
  hulk: "strength",
  batman: "intelligence",

  getthorpower: function () {
    console.log("Thor's power is " + this.thor);
  },
};
Object.prototype.Asit = function () {
  console.log("Asit is a good");
};

console.log(myhero.Asit()); // []
console.log(heropower.Asit()); // []
Array.prototype.heyasit = function () {
  console.log("Hey Asit, I am an array method now!");
};

console.log(myhero.heyasit()); // Hey Asit, I am an array method now!
// console.log(heropower.heyasit()); // Hey Asit, I am an array method

// inheritance
const User = {
  name: "Asit",
  age: 25,
  email: "Asitshakya789@gmail.com",
};

const teacher = {
  makevideo: true,
};

const teachingsupport = {
  isAvailable: true,
};

const taassignament = {
  makeassignment: "Js  Assignemet",
  fulltime: true,
  __proto__: teachingsupport,
};
Object.setPrototypeOf(teachingsupport, teacher);

console.log(taassignament.makeassignment); // Js  Assignemet

String.prototype.truelength = function () {
  console.log(
    `The true length of the string is ${this.trim().length} characters.`
  );
};

"Hello World!  ".truelength(); // The true length of the string is 12 characters.
"   Asit Shakya      ".truelength(); // The true length of the string is 14 characters.
