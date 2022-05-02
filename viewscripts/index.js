btnSend = document.getElementById('sendEmail');
btnSend.addEventListener("click", (event, arg) => {
    console.log("Inside index.js send email button clicked.")
    window.Bridge.sendEmail();
})

btnAuthenticate= document.getElementById('authenticate');
btnAuthenticate.addEventListener('click', () => {
    console.log("authentication starting !");
    window.Bridge.startAuthentication();
})