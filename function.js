function intro(){
    console.log("i am sufiyan");
    console.log("i love coding ");
    console.log("i am 21 years old");
}

let a=prompt("enter a");
let b=prompt("enter b");
function add(a,b){
    console.log(a+b);
}

intro();
add(a,b);
console.log("thank you");
intro();
// function add(a,b){
//     console.log(a+b);
// }

// function sub(x,y){
//     let z = x-y;
//     return z;
// }
// let sol = sub(100,30);
// console.log(sol);

//counting vowels of a string 

// let Name = prompt("enter your name");
// let count=0;
// function name(Name){
//     for(let i of Name){
//         if(i=="a"|| i=="e" || i=="o" || i=="i" || i=="u" ){
//             console.log("Vowels in your name:",i);
//             count++;
//         }
//     }
//     console.log(count);
// }  
// name(Name);

//arrow-function

// let ttlcount=0;
// let arrowfunc = (Name) =>{
//     for(let i of Name){
//         if(i=="a"|| i=="e" || i=="o" || i=="i" || i=="u" ){
//             console.log("Vowels in your name:",i);
//             ttlcount++;
//         }
//     }
//     console.log(ttlcount);
// }
// arrowfunc(Name);

//forEach loop in Arrays
let arr = [10,20,30,40,50,60];

//arr.forEach((val)=>{//we can aslo pass the index and a whole function as parameter
//     console.log(val);
// });

//Que: using forEach loop

// let array = [2,3,4,5,6,7];
// array.forEach((value) =>{
//     console.log(value*value);
// let square = value*value;
// console.log(`the square of ${value} => ${square}`);
// });

//one more way to pass callbackfunction 

// let nums = [10,20,30,40];
// let callbackfunc = (nums) => {
//     console.log(nums*nums);
// }

// nums.forEach(callbackfunc);

//using map method

// let number = [2,4,6,8,10];
// let newarr = number.map((values) => {
//     return values+values;
// });

// console.log(newarr);

// filter method 

// let mens = [10,22,33,25,40];

// let newLine = mens.filter((con) => {
//     return con % 5 == 0;
// });

// console.log(newLine);

//Question 

let marks = [91,92,78,67,89,90];

let topper = (marks)=>{
    if(marks>89){   
        console.log(marks);
    }
};

marks.forEach(topper);

let newArr = marks.filter((mark)=> mark>89);
console.log(newArr)

