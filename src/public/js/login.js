var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

var loginForm = document.getElementById("login-form");
var loginButton = loginForm['login'];
loginButton.onclick = (e) => {
    e.preventDefault();
    //Validate data
    if (format.test(loginForm['password'].value)) {
        document.querySelector('#login-notification').innerHTML = '<span>Mật khẩu không được có ký tự đặc biệt</span>';
    } else {
        loginForm.submit();
    }
}