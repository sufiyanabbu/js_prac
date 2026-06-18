const student = {
    name : "Sufiyan",
    age : 21,
    cgpa : 7.8,
    isPass : true
}
console.log(student);
const person = {
    userName : "Abu_sufiyan",
    following : 340,
    follower : 520,
    isActive : true
}
console.log(person);
//this is single line comment
const product = {
    title : "Pen",
    rating : 4.5,
    price : 150
}
console.log(product);
let a = 5;
let b = 3;
console.log("a == b = ",a==b);
console.log("a != b = ",a!=b);
console.log(a==b && a!=b);
//Conditional statements
let mode = "dark";
let color;
if(mode === "dark"){
    color = "black";
}
if(mode === "light"){
    color = "white";
}
console.log(color);
// if-else statement
let age = 12;
if(age>=18){
    console.log("you can vote");
}
else{
    console.log("you can not vote");
}
//checking odd or even number
let num = 12;
if(num%2 == 0){
    console.log(num," is an even number");
}
else{
    console.log(num," is an odd number");
}
//else if condition
let marks = 22;
if(marks<33 && marks>1){
    console.log("Fail");
}
else if(marks>=33 && marks<70){
    console.log("Pass\n Good");
}
else{
console.log("Pass\nVery Good")
}
// checking seniro or junior 

let Age = 22;
if(Age>=18){
    console.log("Senior");
}
else if(Age<18 && Age>15){
    console.log("Junior");
}
else{
    console.log("Kid")
}
//ternery operators 

let myAge = 25;
let result = myAge >= 18 ? "Adutl" : "not Adult";
console.log(result);
let man = 25 ;
let marry = man >=21 ? "Married" : "Not Married";
console.log(marry);
//take input from user and check whether its multiple 5 or not 
let number = prompt("enter a number");
console.log(number);
if(number%5 == 0){
    console.log(number," is multiple of 5");
}
else{
    console.log(number," is not multiple of")
}