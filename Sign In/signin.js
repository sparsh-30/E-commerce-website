var btn=document.getElementById('btn');

btn.addEventListener("click",(e) => {
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;

    var u=document.getElementById('user_p');
    var p=document.getElementById('password_p');
    if(username.length<4){
        alert("The length of username must be atleast 4 characters.");
        // u.innerHTML="* The length of username must be atleast 4 characters.";
        e.preventDefault();
        return;
    }
    if(password.length<8){
        alert("The length of password must be atleast 8 characters.");
        // p.innerHTML="*The length of password must be atleast 8 characters."
        e.preventDefault();
    }
    alert("Your responses have been submitted successfully!!");
})