var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

var loginForm = document.getElementById("login-form");
var loginButton = loginForm['login'];
loginButton.onclick = (e) => {
    e.preventDefault();
    if (format.test(loginForm['password'].value)) {
        document.querySelector('#login-notification').innerHTML = '<span>Mật khẩu không được có ký tự đặc biệt</span>';
    } else {
        var isValid = false;
        var listUsers = localStorage.getItem('listUsers');
        listUsers = JSON.parse(listUsers);
        listUsers.forEach(user => {
            if (user.email == loginForm['email'].value && user.password == loginForm['password'].value)
                isValid = true;
        });
        if (isValid) {
            console.log('isValid');
            localStorage.setItem('currentUser', loginForm['email'].value.split('@')[0]);
            window.location.href = "/";
            window.location;
        }
        else {
            document.getElementById('login-notification').innerHTML = "Invalid username or password"
        }
    }
}