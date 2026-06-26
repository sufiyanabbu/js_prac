// let heading = document.getElementById("s1");
// console.dir(heading);

// let headings = document.getElementsByClassName("head");
// console.dir(headings);

// let parah = document.getElementsByTagName("p");
// console.dir(parah);
// console.log(parah);

// let query = document.querySelector("#s1");
// console.dir(query);

// let query1 = document.querySelectorAll(".head");
// console.dir(query1);

// let firstEl = document.querySelector("p");
// console.dir(firstEl);

// let div = document.querySelector("div");
// console.log(div);

// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText+" from apna college" //this is called concatination
// console.log(h2);

// let divs = document.querySelectorAll(".box");
// console.dir(divs);

// let idx=0;
// for(div of divs){
//     let print = div.innerText = `this is box ${idx}`;
//     console.log(print);
//     idx++;
// }

// divs[0].innerText = "unique val 1"; 
// divs[1].innerText = "unique val 2";
// divs[2].innerText = "unique val 3";

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

let box = document.querySelector("div");
console.log(box.setAttribute("class","new-box"));

let el = document.createElement("button");
el.innerText = "click 1!";

let el1 = document.createElement("button");
el1.innerText = "click 2!";

let el3 = document.createElement("button");
el3.innerText = "click 3!";

let ball = document.querySelector("#ball");

ball.append(el);

let b1 = document.querySelector("#b1");
b1.prepend(el1);

let b2 = document.querySelector("#b2");
b2.before(el3);

//Question solving 

let newButton = document.createElement("button");
newButton.innerText = "click me!";

newButton.style.backgroundColor = "red";
newButton.style.color = "white";

let body = document.querySelector("body");

body.append(newButton);