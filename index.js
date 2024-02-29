//  var a=document.getElementById("heading")
//  console.log(a);
//  a.innerHTML="css"
//  a.style.color="Red"//give u a color l
 //console.log(a.getAttribute("id"))//give u a id name 
 //a.setAttribute("id","newheading")//existing id will change into  new id
 //console.log(a.nodeName)//give a tag name
//console.log(document.getElementById("heading"))


//using tag Name=
//var b = document.getElementsByTagName("h1")
//console.log(b)
//b[1].innerHTML="This is another tag name"
//b[1].style.color="orange"
//console.log(b[2].nodeName ,"tagname")


//var c=document.getElementsByClassName("box")
//console.log(c)
//c[0].innerHTML="this was changed using class name"

//create element=
//function showans(){



//var body=document.getElementsByTagName("body")
//finding the parent node
//var newelement = document.createElement("h1")
//create an element
//body[0].appendChild(newelement)
//attached the element to the parent node

//console.log(body)
//age verification=
//let Age=18
//if (Age>=18){
    //you can vote
    //newelement.innerHTML="you can vote"
//}
//else{
    //you cannot vote
    //newelement.innerHTML="you cannot vote"
//}
//}

// var popup=document.getElementById("popup")
// function show(){
//     popup.style.background="hotpink"
//     popup.style.display = "block"
//     console.log(popup.classList)
//     add the popup= popup.classList.add("show")
// }
// function hide(){
//    popup.style.display = "none"
//     remove the popup=popup.classList.remove("show")
// }
//createpopup=
//html structure for this=
{/* <button onclick="show()">show popup</button>
    <button onclick="createPopup()">createpopup</button>
     <div id="createPopup">

    </div>  */}

var popupParent=document.getElementById("createPopup")
function createPopup(){
var newPopup=document.createElement("div")
var PopupText=document.createElement("h1")
var PopupClose=document.createElement("button")
popupParent.appendChild(newPopup)
newPopup.appendChild(PopupText)
newPopup.appendChild(PopupClose)
}
//html structure for this
{/* <div id="todos">
<div >
    <h1> Task 1 </h1> 
    <p>Description of Task</p> 
</div>


</div> */}
//creating elements-
var todocount=0
var todos=document.getElementById("todos")
function createPopup(){
var newTodo=document.createElement("div")
var todoheading=document.createElement("h1")
var todoDes=document.createElement("p")
var deleteTodo=document.createElement("button")
// //adding to parent-
todos.appendChild(newTodo)
newTodo.appendChild(todoheading)
newTodo.appendChild(todoDes)
newTodo.appendChild(deleteTodo)
// //giving values-
todoheading.innerHTML=`Task${todocount}`
todoDes.innerHTML="task description"
newTodo.classList.add("todocard")
todocount++;
deleteTodo.innerText="X"
deleteTodo.style.backgroundColor="red"
deleteTodo.addEventListener("click",function(){
newTodo.remove()
})
}


//bitwise operator
//001 -1
//010 -2
//011 -3
//100 -4
//101 -5
//110 -6
//111 -7
//1000 -8
//1001 -9
//1010 -10
 
// var a=4
// var b=5
// console.log(a|b)//bitwise or
// console.log(a&b)//bitwise and
// const read=4
// const write=2
// const running=1
// let user=0
// //user=user|read|
// //user=user|read|write
// user=user|read|write|running
// console.log(user)

// let ans=(user & read ? "yes":"no") 
// console.log(ans)
