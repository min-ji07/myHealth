const weight = document.querySelector("select#weight");
const height = document.querySelector("select#height");
const year = document.querySelector("select#year");
const month = document.querySelector("select#month");
const day = document.querySelector("select#day");

function optionPlus(name, min, max){
    while(min < max){
        min++;
        const option = document.createElement("option");
        option.innerText = min;
        name.appendChild(option);
    }
}

optionPlus(weight, 29, 250);
optionPlus(height, 99, 250);
optionPlus(year, 1930, 2040);
optionPlus(month, 0, 12);
optionPlus(day, 0, 31);