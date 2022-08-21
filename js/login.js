// step-1 : add click event handler with the login button
document.getElementById('btn-login').addEventListener('click', function () {
    // step-2 : get the email address inside the email field
    // always remmember to use .value to get text from an input field
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    // step-3 : get password
    // 3.a : set id on the html element
    // 3.b : get the element
    // 3.c : get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log('gmail :', email, 'password :', password)

    //DANGER : DO NOT VERIFY email & password on the client side
    // step-4 : varify email and password
    if (email === 'arif@gmail.com' && password === 'arif1234') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Wrong email or password')
    }
})