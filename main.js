const {app, BrowserWindow, ipcMain}= require('electron');
const express = require("express");
const expressApp = express();
const cors= require('cors');
const webBlocker= require("electron-web-blocker");
const nodemailer = require("nodemailer");
const path = require('path');



webBlocker.init({
    path: "./hosts",
    updateAfterSeconds: 3600,
    updateNow: true,
    blacklist: ["example.com"],
})

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            preload: path.join(__dirname, 'viewscripts/indexPreload.js')
        }
    })

    win.loadFile('./views/index.html')
}

app.whenReady()
    .then(()=>{
        createWindow();
        startServer();
    })


//events listening in main
ipcMain.on("sendEmail", (event, arg) => {
    console.log("Working is fine GO ON !!");
    SendIt();
})

ipcMain.on("startAuth", (event, arg) => {
    console.log("auth is started");
    startAuth();
})

ipcMain.on("authenticate", (event, data) => {
  console.log(`got the data.username:${data.username} in main .`);
  console.log(`got the data.password:${data.password} in main .`);
  authenticate(data);
})

expressApp.use(cors());

expressApp.get('/', (request, response) => {
  let sendResponse= request.query;
  console.log(sendResponse);
  response.json(sendResponse);
})

//events sending in main

//functions in main
function startServer(){
  expressApp.listen(3000, () => {
    console.log("Server is live on port 3000");
  })
}

function SendIt() {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "theofficialsaud@gmail.com",
        pass: "Saja1123*",
      },
    });
  
    const mailOptions = {
      from: "theofficialsaud@gmail.com", 
      to: "saudj.11232000@gmail.com",
      subject: "From SODEC",
      text: "hello",
    };
  
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  }

function startAuth(){
    const win= new BrowserWindow({
      width: 600,
      height: 400,
      webPreferences: {
          contextIsolation: true,
          nodeIntegration: false,
          preload: path.join(__dirname, 'viewscripts/authenticatePreload.js')
      }
  })

  win.loadFile('./views/authenticate.html');
}

function authenticate(){

}