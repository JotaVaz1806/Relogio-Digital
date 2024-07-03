function currentTime(){

let hr=document.querySelector('span.hours')
let min=document.querySelector('span.minutes')
let sec=document.querySelector('span.seconds')
let data=new Date()
let horas=data.getHours()
let minutos=data.getMinutes()
let seconds=data.getSeconds()


horas=(horas<10)? hr.innerHTML=`0${horas}`:horas
minutos=(minutos<10)? `0${minutos}`: minutos
seconds=(seconds<10)?`0${seconds}`: seconds

hr.innerHTML=`${horas}`
min.innerHTML=`${minutos}`
sec.innerHTML=`${seconds}`

let t=setTimeout(function(){ currentTime()}, 1000)

}
currentTime()
