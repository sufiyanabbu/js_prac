//print hello 5 times
// for(let i=0;i<5;i++){
//     console.log(i,"hello");
// }
//calculate sum of n numbers
// let n = prompt("enter a number");
// let sum=0;
// for(let i=0;i<=n;i++){
//     sum+=i;
// }
// console.log("the sum of n number is",sum);

//calculate sum of n num using while loop

// let s = 0;
// let i=1;
// while(i<=n){
//     s+=i;
//     i++
// }
// console.log("the sum of n number is ",s);

//calculate the sum of n number using do-while loop

// let x = 0;
// let j = 1;
// do{
//     x=x+i;
//     i++;
// } while(j<=n);
// console.log("the sum of n number is",x);

//for of loop

//for in loop
// let student = {
//     name:"sufiyan",
//     age: 21
// }
// for(let key in student){
//     console.log(student[key]);
// }

// que 1
// let size = 0;
// let string = "javascript";
// for(let s of string){
//     console.log("s: ",s);
//     size++;
// }
// console.log("the size of the string is",size);

//using for in loop for objects

// let Student = {
//     name:"sufiyan khan",
//     age:21,
//     cgpa: 7.5,
//     isPass : true
// }
// for(let std in Student){
//     console.log(Student[std]);
// }

//print 1 to 10

// for(let i=0;i<=10;i++){
//     console.log(i);
// }

//print all even numbers till 10

// for(let num=0;num<=10;num++){
//     if(num%2==0){ // even number
//         console.log(num);
//     }
// }

// create a game 
// let num;
// while(true){
//      if(num!=7){
//  num = prompt("guess a number from 1-10 to start the game");
//     }
//    else if(num==7){
//         console.log("game is starting");
//         break;
//     }
   
// }

// guessing number 

// let gamenum = 3;
// let usernum = prompt("duess a number");

// while(usernum != gamenum){
//     usernum = prompt("wrong number. guess again");
// }
// console.log("Congratulations.... game is starting");

//string 
// let name = "sufiyan";
// console.log(name.length);
// let lang = 'javascript';
// console.log(lang);
// let intro = `hello i am ${name} and i am learning ${lang}`;
// console.log(intro)
// let str = "Hello"
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// for(let i of name){
//     console.log(i);
// }
// question 1

let name = prompt("Enter your name");
let email = `@${name}`;
let username = "@"+name+""+name.length;
console.log(username);
console.log(email+""+name.length);
console.log("@"+name+""+name.length);