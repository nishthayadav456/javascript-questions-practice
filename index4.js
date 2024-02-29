function updateTime(){
 var dateTime =new Date();
 var hours=dateTime.getHours();
 var minutes=dateTime.getMinutes();
 var seconds=dateTime.getSeconds();
 var ampm=document.getElementById("ampm")
 if(hours>=12){
    ampm.innerHTML="PM";

 }
 else{
    ampm.innerHTML="AM";
 }

 if(hours>12){
    hours=hours-12;
 }
 document.getElementById("hours").innerHTML=hours;
 document.getElementById("minutes").innerHTML=minutes;
 document.getElementById("seconds").innerHTML=seconds;
}
setInterval(updateTime,1000);