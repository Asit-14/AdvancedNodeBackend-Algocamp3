class Product{
    constructor(name, age, cty) {
        this.name = name;
        this.age = age;
        this.city = cty;
    }

    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
}
let product1 = new Product("Asit Kumar", 25, "Ghaziabad");
let product2 = new Product("John Doe", 30, "New York");
product1.display();
product2.display();



