const newDate = new Date();
const monthValue = document.querySelector(".today").querySelector(".month");
const dateValue = document.querySelector(".today").querySelector(".date");
const dayValue = document.querySelector(".today").querySelector(".day");

const month = String((newDate.getMonth()) +1).padStart(2, "0");
const date = String(newDate.getDate()).padStart(2, "0");
const day = newDate.getDay();

monthValue.innerText = month;
dateValue.innerText = date;
dayValue.innerText = day;

if(day == 0){
    dayValue.innerText = "일요일";
}else if(day == 1){
    dayValue.innerText = "월요일";
}else if(day == 2){
    dayValue.innerText = "화요일";
}else if(day == 3){
    dayValue.innerText = "수요일";
}else if(day == 4){
    dayValue.innerText = "목요일";
}else if(day == 5){
    dayValue.innerText = "금요일";
}else if(day == 6){
    dayValue.innerText = "토요일";
}else{
    dayValue.innerText = "요일 확인중";
}