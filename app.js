
var userArr = JSON.parse(localStorage.getItem('users')) || [];


function signUp(){
 var signUpUsername = document.getElementById("signUpUserName");
 var signUpEmail = document.getElementById("signUpEmail");
 var signUpPassword = document.getElementById("signUpPassword");

let user ={
    userName : signUpUsername.value,
    email : signUpEmail.value,
    password : signUpPassword.value
}
     if(signUpUsername.value === "" || signUpEmail.value === "" || signUpPassword.value === "" ){
        alert('please fill the all field first')
    }else{
       userArr.push(user)
        localStorage.setItem('users', JSON.stringify(userArr))
        window.location.href = 'signInPage.html';
    }
}

const signIn =() =>{

    let email = document.getElementById('signInEmail');
    let password = document.getElementById('signInPassword');
    let users = JSON.parse(localStorage.getItem('users'));
    
    let filterUser = users.filter(user => user.email === email.value && user.password === password.value )

    if(filterUser.length){
        localStorage.setItem('isAuthentication', true)
        window.location.href = 'home.html'
    }else{
        alert('invalid credentials')
    }
}

const logout= ()=>{
    localStorage.removeItem('isAuthentication');
    window.location.href = 'signInPage.html'
}

