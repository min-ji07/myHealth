// 상세페이지
// 운동 검색할 때 콘솔창에 쓰여지는 거 띄우기
// 같은 글자 있으면 화면에 띄우기
const searchBtn = document.querySelector("#detail-search");
const exList = document.querySelectorAll(".exercise_list li");
const exName = document.querySelectorAll(".exercise_list li label");


// input 입력 값 콘솔출력
function searchInput(event){
    // input value
    const value = event.target.value;
    exList.forEach(function(i){
        exList[i].classList.add("hidden");
    })
    
    ///////////////// 막혔음 //////////////////
    // 입력값과 list내의 값 비교
    // 맞으면 보여주기
    for(let i = 0; i < exName.length; i++){
        // label 값 가져오기
        const labelValue = exName[i].innerText;
        console.log(labelValue);
        if(value == labelValue){

        }
    }
}
searchBtn.addEventListener("input", searchInput);



