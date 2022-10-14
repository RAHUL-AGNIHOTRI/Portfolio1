const signUp_form = document.querySelector('.signUp-form');

signUp_form.addEventListener('submit', addUser);


function addUser(e){

    e.preventDefault();
    
    const firstName = document.querySelector('#firstname');
    const lastName = document.querySelector('#lastname');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const re_password = document.querySelector('#re-password');
    const gender = document.querySelector('#gender');
    
    
    if(password.value !== re_password.value){
        alert('Password Mismatch!!\nPlease Re-enter your Passwords');
    }
    else{
        if (window.localStorage.getItem(email.value)){
            alert('User already exists');
        }
        else{
            var x = JSON.stringify({name: firstName.value+' '+lastName.value, password: password.value, gender: gender.value});
            window.localStorage.setItem(email.value,x);
            alert('Successfuly Registered');
        }
        location.href = "../html/login.html";
    }
    signUp_form.reset();
    
}