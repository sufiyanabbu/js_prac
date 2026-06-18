//print hello 5 times
for(let i=0;i<5;i++){
    console.log(i,"hello");
}
//calculate sum of n numbers
let n = prompt("enter a number");
let sum=0;
for(let i=0;i<=n;i++){
    sum+=i;
}
console.log("the sum of n number is",sum);

//calculate sum of n num using while loop

let s = 0;
let i=1;
while(i<=n){
    s+=i;
    i++
}
console.log("the sum of n number is ",s);

//calculate the sum of n number using do-while loop

// let x = 0;
// let j = 1;
// do{
//     x=x+i;
//     i++;
// } while(j<=n);
// console.log("the sum of n number is",x);
let str = "SUFIYAN";
for(let i of str){
    console.log(i);
}