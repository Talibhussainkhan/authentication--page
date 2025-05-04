let signUpUsername = document.getElementById("signUpUserName");
let signUpEmail = document.getElementById("signUpEmail");
let signUpPassword = document.getElementById("signUpPassword");
let signInEmail = document.getElementById("signInEmail");
let signInPassword = document.getElementById("signInPassword");
let home = document.getElementById('homeH1');




const signUp = ()=>{

    let userName = signUpUsername.value;
    let email = signUpEmail.value;
    let password = signUpPassword.value;
    if(userName === "" || email === "" || password === "" ){
        alert('please fill the all field first')
    }else{
        localStorage.setItem('user', JSON.stringify({userName, password, email}))
        window.location.href = 'signInPage.html';
    }
}

const signIn =() =>{

    let email = signInEmail.value;
    let password = signInPassword.value;

    let storeData = JSON.parse(localStorage.getItem('user'));

    if(storeData && storeData.email === email && storeData.password === password){
        // alert('login')
        localStorage.setItem("isAuthentication", true)
        window.location.href = 'home.html'
        
    }else{
        alert("Invalid email and password")
    }
}

let data = JSON.parse(localStorage.getItem('user'))
home.innerHTML = `Welcome, ${data.userName[0].toUpperCase() + data.userName.slice(1)}`

const logout= ()=>{
    localStorage.removeItem('isAuthentication');
    window.location.href = 'signInPage.html'
}

