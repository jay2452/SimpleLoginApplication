const loginFormNode = document.querySelector(".login-form");
const signupFormNode = document.querySelector(".signup-form");
const logInButton = document.getElementById("login-form-login-button");
const loginUserNameinputNode = document.getElementById("login-form-username");
const passwordNode = document.getElementById("login-form-password");
const successNode = document.getElementById("login-successfull");
const logoutButton = document.getElementById("logout-button");
//login-form-signup-button
const loginFormsignupButtonNode = document.getElementById("login-form-signup-button");
const signUpFormsignupButtonNode = document.getElementById("signup-form-signup-button");

const logoutFunction = () => {
    loginFormNode.style["display"] = "block";
    signupFormNode.style["display"] = "none";
    successNode.style["display"] = "none";
}


//login page actions
const logInButtonClickFunction = function(event){
    
    const userName = loginUserNameinputNode.value;
    const password = passwordNode.value;


    const savedUsername = sessionStorage.getItem("username");
    const savedPassword = sessionStorage.getItem("password");


    if(userName === savedUsername && password === savedPassword){
        loginFormNode.style["display"] = "none";
        signupFormNode.style["display"] = "none";
        successNode.style["display"] = "block";
        return;
    }
    alert("Login failed!")
}

const loginFormSignupButtonAction = () => {
    loginFormNode.style["display"] = "none";
    successNode.style["display"] = "none";
    signupFormNode.style["display"] = "block";
}

const signUpFormSignupButtonAction = () => {
    const signUpUserNameNode = document.getElementById("signup-form-username");
    const signUpFormPassword = document.getElementById("signup-form-password");
    const signUpFormConfirmPassword = document.getElementById("signup-form-confirm-password");

    const username = signUpUserNameNode.value;
    const password = signUpFormPassword.value;

    const confirmPassord = signUpFormConfirmPassword.value;

    if(!username) return;

    if(password !== confirmPassord) {
        alert("Password doesnot match");
        return;
    }
    
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);

    // show the login page 
    signupFormNode.style["display"] = "none";
    successNode.style["display"] = "none";
    loginFormNode.style["display"] = "block";
    alert("SignedUp Successfully !! \n Please Login.");
}


logInButton.addEventListener("click", logInButtonClickFunction);
logoutButton.addEventListener("click", logoutFunction);
loginFormsignupButtonNode.addEventListener("click", loginFormSignupButtonAction);
signUpFormsignupButtonNode.addEventListener("click", signUpFormSignupButtonAction)


