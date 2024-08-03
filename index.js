// let [seconds , minutes, hours]=(0,0,0);
// let displayTime=document.getElementById("displayTime");
// let timer=null;

// function stopwatch(){
//   seconds++;
//   if(seconds == 60){
//      seconds = 0;
//      minutes++;
//      if (minutes== 60){
//         minutes = 0;
//         hours++;
//      }
//   }
//   displayTime.innerHTML = hours +":"+ minutes +":"+ seconds;
// }
// function  watchStart(){
//     if(timer!=null){
//         clearInterval(timer);
//     }
//     timer = setInterval(stopwatch,1000)
// }
// 
// let [miliseconds, seconds,minutes]=[0.0,0];
// let timeref = document.querySelector(".timer-display");
// let int = null;


// document.getElementById("start").addEventListener("click",()=> {
//     if (int !== null){
//         clearInterval(int);
//     }
//     int = setInterval(displayTimer, 10);
// })
// document.getElementById("pause").addEventListener("click",() =>{
//     clearInterval(int);
// })
// document.getElementById("reset").addEventListener("click",() =>{
//     clearInterval(int);
//     [miliseconds, seconds, minutes] = [0, 0, 0 ];
//     timeref.innerHTML = "00 : 00: 000"

// })
// function displayTimer(){
//     miliseconds +=10;
//     if(miliseconds ==1000){
//         miliseconds = 0;
//         seconds ++;
//         if (seconds ==60){
//             seconds = 0;
//             minutes ++;
//         }
//     }
// }
//  let m = minutes < 10 ? "0" + minutes : minutes;
//  let s = seconds < 10 ? "0" + seconds : seconds;
//  let ms =
//   miliseconds < 10 
//   ? "00" + miliseconds
//   : miliseconds < 100
//   ? "0" + miliseconds
//   : miliseconds;
//   timeref.innerHTML = `${m} : ${s} : ${ms}`;

const time_el= document.querySelector('.innercircle .time')
const start_btn = document.getElementById ('start')
const stop_btn = document.getElementById ("stop")
const reset_btn = document.getElementById ("reset")

let seconds = 0;
let interval = null;
 
start_btn.addEventListener('click', start);
 
reset_btn.addEventListener('click', reset);
 
stop_btn.addEventListener('click', stop);

function timer (){
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600))/ 60)
    let secs = seconds % 60;
    
    if (secs < 10) secs = '0' + seconds ;
    if (mins < 10) mins = "0" +  mins ;
    if ( hrs < 10) hrs = "0" + hrs;
  

    time_el.innerText = `${hrs}:${mins}:${secs}`;

}
function start () {
    if (interval){
        return
    }
    interval = setInterval(timer, 1000)
}
function stop() {
    clearInterval(interval);
    interval = null ;

    
}
function  reset() {
    stop()
    seconds = 0;
    time_el.innerText = '00:00:00'
    
}


















