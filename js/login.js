const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', checkLogin);


function checkLogin(e){

    e.preventDefault();
    
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if(window.localStorage.getItem(email)){
        let pwd = JSON.parse(window.localStorage.getItem(email)).password;
        if(pwd === password){
            location.href = "../html/welcome.html";
        }
        else{
            alert("email password didn't match");
        }
    }
    else{
        alert("user does not exists\nPlease Register first");
        location.href = "../html/register.html";
    }
    
}

