const {contextBridge, ipcRenderer} = require('electron');


let sendEmail= () => {
    console.log("inside send Email function")
    ipcRenderer.send("sendEmail");
}

let startAuthentication= () => {
    console.log("started authentication");
    ipcRenderer.send("startAuth");
}

let indexBridge= {
    sendEmail: sendEmail,
    startAuthentication: startAuthentication
}

contextBridge.exposeInMainWorld("Bridge", indexBridge);
