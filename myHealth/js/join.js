const form = document.querySelector("#joinForm");
const formId = document.querySelector("#userId");
const formPw = document.querySelector("#userPw");
const input = document.querySelector("#joinForm input:last-child");

const selectArea = document.querySelector(".select-box");


// 회원가입 id, pw 저장하기
function inputId(event){
    const inputId = event.target.value;
    localStorage.setItem("userId", inputId);
}
function inputPw(event){
    const inputPw = event.target.value;
    localStorage.setItem("userPw", inputPw);
}
formId.addEventListener("input", inputId);
formPw.addEventListener("input", inputPw);

// 아이디 입력 후 기본값으로 이동
function nextPage(event){
    event.preventDefault();
    
    const inputId = formId.value;
    const inputPw = formPw.value;

    if(inputId.length >= 4){
        if(inputPw.length >= 4){
            const idArea = document.querySelector(".join-id");
            idArea.classList.add("hidden");
            selectArea.classList.remove("hidden");
        }else{
            alert("비밀번호를 확인해주세요.");
        }
    }else{
        alert("아이디 및 비밀번호를 확인해주세요.");
    }

    // 기본 값 입력 후 버튼 생성 만들어야함
    const testSelect = selectArea.querySelectorAll("select");
    // console.log(testSelect);
    
}
input.addEventListener("click", nextPage);


// select된 값 배열에 넣기
const userInfoArr = new Array();


