const {ipcMain} = require("electron")
/**
 * 初始化和preload通信所需要的函数
 */
const initContextHandlers = () => {
    console.log("初始化ContextHandlers")
    ipcMain.handle("tell", async ($event, ...args) => {
        console.log("主进程处理》》》", ...args)
        return process.platform
    })
}

module.exports = {
    init: initContextHandlers
}
