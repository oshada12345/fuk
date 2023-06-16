const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6285866381781@s.whatsapp.net"]
global.nomerOwner = "6285866381781"
global.nomorOwner = ['6285866381781']
global.nameGEDE = "DAYYBOTZ"
global.namaDeveloper = "DayyBotz"
global.namaBot = "DayyBotz WhatsApp"
global.packname = ""
global.author = "Sticker By DayyBotz"
global.thumb = fs.readFileSync("./thumb.png")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Base Ori By KirBotz
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/