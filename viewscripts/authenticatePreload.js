const {contextBridge, ipcRenderer}= require('electron');

let authenticate= (data) => {
    console.log(`in authenticate method with ${data} from auth html`);
    ipcRenderer.send('authenticate', data);
}

let indexBridge= {
    authenticate:authenticate,
}

contextBridge.exposeInMainWorld('Bridge2', indexBridge);