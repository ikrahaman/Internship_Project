function showSignUpForm() {
    console.log("Showing signup form");
    var signUpForm = document.getElementById("form-signup");
    var loginForm = document.getElementById("form-login");
    // if (x.classList.contains('d-none')) {
    //     x.classList.remove('d-none');
    // }
    // else{
    //     x.classList.add('d-none');
    // }
    signUpForm.classList.remove('d-none');
    loginForm.classList.add('d-none');
}
function backToLoginForm() {
    console.log("Showing login form");
    var signUpForm = document.getElementById("form-signup");
    var loginForm = document.getElementById("form-login");
    signUpForm.classList.add('d-none');
    loginForm.classList.remove('d-none');
}