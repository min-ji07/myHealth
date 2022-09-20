const weight = document.querySelector("select#weight");
const height = document.querySelector("select#height");
const year = document.querySelector("select#year");
const month = document.querySelector("select#month");
const day = document.querySelector("select#day");


function optionPlus(name, min, max){
    while(min < max){
        min++;
        const option = document.createElement("option");
        option.value = min;
        option.innerText = min;
        name.appendChild(option);
    }
}
optionPlus(weight, 29, 250);
optionPlus(height, 99, 250);
optionPlus(year, 1930, 2040);
optionPlus(month, 0, 12);
optionPlus(day, 0, 31);

// select value 배열로 넣기
const allSelect = document.querySelectorAll("#joinForm select");
for(let i = 0; i < allSelect.length; i++){
    allSelect[i].addEventListener("change", function(event){
        const name = event.target.id;
        console.log(name);
        const value = event.target.value;
        let optionArr = new Array({
            // 아니.. 엌케해요..?
            "gender": value,
            "weight": value,
            "height": value,
            "year": value,
            "month": value,
            "day": value,
        });
        optionArr.push(value);
        console.log(optionArr);
    })
}

