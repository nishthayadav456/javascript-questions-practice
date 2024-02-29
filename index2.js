// let first = document.getElementById("Parent");
// console.log(first);
// console.log(first.innerHTML);
// console.log(first.innerText);
// console.log(first.textContent);

// let second = document.getElementsByClassName('child');
// console.log(second);
// console.log(second[2].textContent);
// console.log(second[3].textContent);
//  console.log(second[1].textContent);
// console.log(second[0].textContent);

// let third = document.getElementsByTagName("div")
// console.log(third)

// let fourth = document.querySelector("#Parent")
// let five = document.querySelector(".child")

// let six = document.querySelector("div")

// console.log(fourth)
// console.log(five)
// console.log(six)

// let seven = document.querySelectorAll("#Parent")
// console.log(seven[2])
// let eight = document.querySelectorAll(".child")
// console.log(eight)
// let nine= document.querySelectorAll("div")
// console.log(nine)

let change= document.getElementsByClassName("changeText")
console.log(change)
console.log(change[0].innerHTML)
change[0].innerHTML="hello world"
console.log(change[0].innerText)
change[0].innerHTML="hello duniya"

function changeMe(){
    change[0].innerHTML="hello world"
}
let count=0;
change[0].addEventListener('click',()=>{
    change[0].innerHTML="hello nishu"
    change[0].style.color="red"
    change[0].style.fontSize= "50px"
    
    if(count %2 ===0){
        change[0].innerHTML= "hello duniya"
        change[0].style.color="red"
        count++;
        //change[0].style.fontSize= "50px"
    }
    else{
        change[0].innerHTML= "hello shubhi"
        change[0].style.color="red"
        count--;   
    }
})
// let parent=document.querySelector(".parent");
// let count=true;
// function changeDirection(){
   
//     if(count){
//         parent.style.display="block"
//         count=false;
//     }
//     else{
//         parent.style.display="flex"
//         count=true;
//     }
// }
// let display=document.querySelectorAll("h1")
// display[0].addEventListener("click",()=>{
// let time =new Date();
// let hrs = time.getHours();
// let mins = time.getMinutes();
// let secs = time.getseconds();
// let AMPM="AM";
// if(hrs>12){
//     hrs-=12;
//     AMPM="PM"
// }

// console.log(`Time :${hrs}:${mins}:${secs}`);
// //console.log(hrs+ :+mins+:+secs);
// //display[1].innerHTML=`${hrs}: ${mins}:${secs}`
// setInterval(()=>{
//     startClock();
//     console.log("hello EA23");
// },1000)

// })
//random number generator
//let randomNumber=parseInt(Math.random()*100+1);
// let inputvalue=document.querySelector("input")
// let randomNumber =Math.random()*100;
// console.log(randomNumber);
// function checkNumber(){
//     console.log(inputvalue.value);
//     if(randomNumber > inputvalue.value){
//  console.log("your guess is low")
//     }
//     else if(randomNumber < inputvalue.value){
//         console.log("your guess is high")
//     }
//     else{
//         console.log("your gusess is right")
//     }
// }
//000.7*100
//097/10=00.7
//97.765*100=9776.5
//0.987*100=98.7
//0.1000*100=10.0
//9999*100=99.99

// var a=10;
// function callme(p){
//     var result=p+p;
//     return result;
// }

// console.log(callme(a));
// callme(30);
// var result1=callme(a);
// var result2=callme(20);
// console.log(result1);
// console.log(result2);


//  a=10;
//  console.log(a)
// nishtha="nishu"
// console.log("nishtha")
function abc(){
    console.log("hello world!")
}
abc();
//2
function callme(){
    var a = 3 + 7;
    console.log(a)
}
callme();
