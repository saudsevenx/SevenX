let loginBtn= document.getElementById("loginBtn");

loginBtn.addEventListener('click', (event, arg) => {
    console.log("aaya kya?");
    let data= {};
    data.username= document.getElementById('username').value;
    data.password= document.getElementById('password').value;
    
    window.Bridge2.authenticate(data);

})