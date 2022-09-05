document.getElementById("login").addEventListener("click", function(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    if(email === 'emon@gmail.com' && password === '@secret'){
        window.location.href = 'bank.html';
    }
})
