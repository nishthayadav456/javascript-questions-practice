// var a=10
// function abc(){
//     var a=20
//     console.log(a)
// }
// abc()
// console.log(a)
//1-
// function calculate(){
//     var num1=parseInt(document.getElementById("num1").value);
//     var num1=parseInt(document.getElementById("num2").value);
//     var result=num1+num2;
//     document.getElementById("result").innerText="result:"+result;
// }
// function sum(a,b){
//     return a+b;
// }
// sum(1,'2');

// function calculate (num1,num2){
//     return num1*num2
// }
// console.log(calculate(10,20))

// function displayData(name,age){
//     console.log(`${name}:age is ${age}`)
// }
// displayData("nishtha" ,calculate (20,15))

// 2-

//  function login(){
//     function searchitem(){
//         function mobileitem(){
//             function payment(){
//                 function dropmessage(){
//                     console.log("thanks for shopping")
//                 }
//             }
//         }
//     }
//  }
//  setTimeout(()=>{
//     console.log("1")
//      setTimeout(()=>{
//        console.log("2")
//         setTimeout(()=>{
//             console.log("3")
//  },3000);
//  },2000);
//  },1000);




//  setTimeout(()=>{
//     console.log(1)
//  }),1000

//  setTimeout(()=>{
//     console.log(2)
//  }),2000

//  setTimeout(()=>{
//     console.log(3)
//  }),3000
 //4-
//  let variable=true
//  let  mypromise=new Promise((resolve,reject)=>{
// if (variable===true){
// resolve('promise resolve successfully')
// }
// else{
//     reject("promise reject")
// }
//  })
//  mypromise
//  .then((item)=>console.log(item))
//  .catch((err)=>console.log(err));


//let variable="yes"
// function promiseFun(p){
//     return new Promise((a,b)=>{
//         if (p==="yes"){
//             a('promise resolve succesfully')
//         }
//         else{
//             b('promise reject')
//         }
//     })
// }
// promiseFun(variable)
// .then((item)=>console.log(item))
//   .catch((err)=>console.log(err));

//question of the day=


// function isPrime(number) {
//     return new Promise((resolve, reject) => {
//       if (number <= 1) {
//         reject("Number should be greater than 1.");
//       } else if (number === 2) {
//         resolve(true);
//       } else {
//         for (let i = 2; i <= Math.sqrt(number); i++) {
//           if (number % i === 0) {
//             reject("Number is not prime.");
//             return;
//           }
//         }
//         resolve(true);
//       }
//     });
//   }
//   isPrime(13)
//   .then((result) => {
//     console.log("Number is prime.");
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//promise .all -example
// function Abc(){
//     return new Promise ((res,rej)=>{
//         if(20 % 2===0){
//             res("This is a Even number")
//         }
//         else{
//             rej("this is odd number")
//         }
//     })
// }
// const promiseVar =new Promise((res, rej)=>{
//     if(true){
//         res("hii Ea23")
//     }
//     else{
//         rej("sorry!!")
//     }
// })
// Promise.all([Abc(), promiseVar])
// .then ((data)=>console.log(data))
// .catch((err)=>console.log(err))

//await
// function promisechain(alpha,timeout){
//     return new promisechain((res,rej)=>{
//         setTimeout(()=>{
//            alpha();
//         },timeout);
//         })
//     }
// function visible(){
//     promisechain(()=> console.log("hi this is first"),1000)

// }
// visible();
// //another exmple
// function promiseChain(alpha, timeout){
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//            console.log(alpha);
//            res("This promise is resolved!!!...")
//         }, timeout);
//     })
// }


// function visible(){
//     promiseChain("A", 2000)
//     .then(() => promiseChain("E", 4000))
//     .then(() => promiseChain("I", 1000))
//     .then(() => promiseChain("O", 2000))
//     .then(() => promiseChain("U", 5000))
// }
//another=
// function display(alpha,timeout){
//     setTimeout(()=>{
//       console.log(alpha);
//     },timeout);
//   }
//     function visible(){
//     display ("A",2000);
//    display ("E",4000);
//      display ("I",1000);
//      display ("O",2000);
//        display ("U",5000);
//   }
//   visible();

function display(alpha,timeout){
    setTimeout(()=>{
      console.log(alpha);
    },timeout);
  }
    async function visible(){
    await display ("A",2000);
    await display ("E",4000);
    await  display ("I",1000);
    await display ("O",2000);
    await display ("U",5000);
  }
  visible();