/**
 * contextBridge通信
 * 执行contextBridge暴露的方法
 * @param key
 * @param args
 */
export const runContextMethod = (key: string, ...args: any) => new Promise(async (resolve, reject) => {
    if (process.env.IS_ELECTRON) {
        try {
            console.log((window as any)["client_bridge"]);
            resolve(await (window as any)["client_bridge"][key](...args))
        } catch (e) {
            reject(e)
        }
    } else reject("非electron环境，将不进行通信处理")
})
