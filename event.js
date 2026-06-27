let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("button was clicked");
    let n = 25;
    n++;
    console.log(n);
}

let box = document.querySelector(".box");
box.onmouseover = (evt) => {
    console.log(evt.type);
    console.log("this is a div");
}

let para = document.querySelector("p");

para.onclick = () => {
    console.log("you clicked a paragraph");
}

let con = document.createElement("button");
con.innerText = "click here";
let btn = document.querySelector(".container");
btn.append(con);


let span = document.querySelector("#s1");

span.addEventListener("click",(el)=>{
    console.log(el.type);
    console.log("you are on span kick it");
});

let section = document.querySelector(".section");
let handler = ()=>{
    console.log("you are in section tag");
}
section.addEventListener("mouseover",handler);

// question - 

let modebtn = document.querySelector(".toggle");
let currentMode = "ligth";
modebtn.addEventListener("click",() => {
   if(currentMode == "light"){
    currentMode="dark";
    document.querySelector("body").style.backgroundColor = "black";
   } 
   else{
    currentMode="light";
    document.querySelector("body").style.backgroundColor = "white";
   }
   console.log(currentMode);
});

let div = document.querySelector("#d1");
let box1 = "light";
console.log(div);

div.addEventListener("mouseover", () => {
    if(box1 === "light"){
        box1 = "dark";
        div.style.backgroundColor = "pink";
        div.style.textAlign = "center";
    }
    else{
        box1 = "light";
    div.style.backgroundColor = "blue";
    div.style.textAlign = "left";
    }
});