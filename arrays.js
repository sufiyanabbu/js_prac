let nums = [2,4,6,8,9,10];
let fruits = ["apple","banana","mango","orange"];
nums[1] = 3;
console.log(nums[1]);
//for of looping over array
for(let fruit of fruits){
    console.log(fruit.toUpperCase(fruit));
}
//for looping over array
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}

//Que 1
let arr = [85,97,44,37,76,60];
let sum =0;
let size = 0;
for(let i=0;i<arr.length;i++){
    sum = sum+arr[i];
    size++;
}
let avg = sum/size;
console.log(avg);

// Que1 with for of loop
let s=0;
for(let a of arr){
    s+=a;
}
let average = s/arr.length;
console.log(`the average of the class is ${average}`);

//Que 2

let marks = [250,645,300,900,50];
let fp=0;
let percent=0;
let offer=0;
for(let mark of marks){
     offer = mark/10;
     mark = mark-offer;
     console.log(`the final price are ${mark}`);
}
