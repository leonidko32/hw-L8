let now = new Date();
let NY = new Date(2020, 11, 31, 23, 59, 59);
let daysToNY = Math.trunc((NY - now)/1000/60/60/24);
let hoursToNY = Math.trunc(((NY - now)-daysToNY*24*60*60*1000)/1000/60/60);
let minutesToNY =Math.trunc(((NY - now)-(daysToNY*24*60*60*1000)-(hoursToNY*60*60*1000))/1000/60);

let fixedHours = corretTime(hoursToNY);
let fixedMinutes = corretTime(minutesToNY);


let result = daysToNY + " "+ "days" + " "+ fixedHours + " " + 'hours' + ' ' +  fixedMinutes + " " + "minutes" ;
console.log(result);
console.log(minutesToNY);

const timeToNY = document.querySelector('.text2');
timeToNY.innerText = result;


function corretTime (time){
   let n =  time.toString();
   let str;
   if(n.length === 2){
       str = n;
   } else {str = '0'+n}

    return str;


}
