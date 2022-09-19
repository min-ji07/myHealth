const form = document.querySelector("#joinForm");
const info = document.querySelector("#userInfo");

const formId = document.querySelector("#userId");
const formPw = document.querySelector("#userPw");
const nextBtn = document.querySelector("#nextBtn");

// Login ID 임시
const userId = "dust";
const userPw = "1234";

// login 유지


// Login
function login(){
    const inputId = formId.value;
    const inputPw = formPw.value;
    const h2 = document.createElement("h2");

    if(userId == inputId){
        if(userPw == inputPw){
            alert("로그인 되었습니다!");
            form.classList.add("hidden");
            info.appendChild(h2);
            h2.innerText = `${inputId}님 환영합니다!`

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




