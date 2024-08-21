const {contextBridge, ipcRenderer} = require("electron")

console.log("PRELOAD")
/**
 * 通信桥
 */
contextBridge.exposeInMainWorld("client_bridge", {
    async tell(...args: any){
        return await ipcRenderer.invoke("tell", ...args)
    }
})
