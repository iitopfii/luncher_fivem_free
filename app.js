const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron')
const ipc = ipcMain;
const createWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 200,
        frame: false,
        transparent :true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            devTools: false
        }
    })
    win.loadFile('index.html')
    ipc.on('closeX', () => {
        win.close()
    })
    ipc.on('minimize', () => {
        win.minimize()
    })
}
app.whenReady().then(createWindow)