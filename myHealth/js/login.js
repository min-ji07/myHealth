const form = document.querySelector("#loginForm");
const info = document.querySelector("#userInfo");

const formId = document.querySelector("#userId");
const formPw = document.querySelector("#userPw");
const nextBtn = document.querySelector("#nextBtn");

// Login ID 임시
const userId = "dust";
const userPw = "1234";
const saveUserId = localStorage.getItem(userId);
console.log(saveUserId);
// 왜 값을 못가져오냐고~~!
// login 유지 ****************************************************유지 아직 안됨
// localStorage에 값이 null이거나 ""일 때
if(saveUserId === null || saveUserId == ""){

}else{
    print();
}

// user 이름으로 화면 출력
function print(){
    const h2 = document.createElement("h2");
    form.classList.add("hidden");
    info.appendChild(h2);
    h2.innerText = `${userId}님 환영합니다!`
}

// Login
function login(){
    const inputId = formId.value;
    const inputPw = formPw.value;

    if(userId == inputId){
        if(userPw == inputPw){
            alert("로그인 되었습니다!");
            print();
            //localStorage에 저장
            localStorage.setItem("userId", userId);
            localStorage.setItem("userPw", userPw);
        }else{
            alert("비밀번호를 확인해주세요.")
        }
    }else{
        alert("아이디와 비밀번호를 확인해주세요.")
    }
}
nextBtn.addEventListener("click", login);




