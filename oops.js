class ToyotaCar {
    constructor(name,brand){
        this.price = name;
        this.brand = brand;
        console.log("create new object.")
    }
    start() {
        console.log("car has started");
    }
    stop() {
        console.log("car has stopped");
    }
    addMoney(price) {
        this.price = price;
        console.log(`this is the price ${this.price}`);
    }
}

let obj1 = new ToyotaCar("fortuner",10);
// obj1.start();
// obj1.stop();
// obj1.addMoney(2000000);
console.log(obj1);
let obj2 = new ToyotaCar("lexus",20);
// obj2.start();
// obj2.stop();
console.log(obj2);

// inheritance 

class Animal {
    speak(){
        console.log("Animal make a sound.");
    }
}
class Dog extends Animal {
    bark(){
        console.log("woof");
    }
}

let dog = new Dog();
dog.speak();
dog.bark();

class Vehicle{
    constructor(name){
        this.name = name;
    }
    run(){
        console.log("vehicle runs");
    }
}
class Car extends Vehicle{
    constructor(name,model){
        super(name);
        this.model=model;
    }
    run(){
        super.run();
        console.log("car runs");
    }
}

let car = new Car("lexus","benz");
console.log(car.name);
console.log(car.model);
console.log(car.run());

practice question 

class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(`Name: ${this.name} | E-mail: ${this.email}`);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
        this.name=name;
        this.email=email;
    }
    editData(){
        console.log(`Name: ${this.name} | Email: ${this.email}`);
    }
}
let user = new User("sufiyan","sufi@gmail.com");
user.viewData();

let admin = new Admin("Abu","abu@gmail.com");
admin.editData();