var btn=document.getElementById('btn');

btn.addEventListener("click",(e) => {
    var username=document.getElementById('username').value;
    var subject=document.getElementById('subject').value;
    var message=document.getElementById('message').value;
    
    if(username.length<4){
        alert("The length of username must be atleast 4 characters.");
        // u.innerHTML="* The length of username must be atleast 4 characters.";
        e.preventDefault();
        return;
    }
    if(subject.length<10){
        alert("Subject must contain atleast 10 characters.");
        e.preventDefault();
        return;
    }
    if(message.length<40){
        alert("Message must contain atleat 40 characters.");
        e.preventDefault();
    }
    
})