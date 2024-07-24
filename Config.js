const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "254710772666"],
global.ownername = process.env.OWNER_NAME || "sɪʀ ɪʙʀᴀʜɪᴍ",
global.ytname = "YT: AyushBotz.inc"
global.socialm = "GitHub: ibrahimaitech"
global.location = "kenya"

global.botname = process.env.BOTNAME || "sʟᴏᴛʏ ᴍᴅ",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "sɪʀ ɪʙʀᴀʜɪᴍ",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "sɪʀ ɪʙʀᴀʜɪᴍ",
//console view/theme
global.themeemoji = '🧩'
global.wm = "ibrahim botz inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y'

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '🍭 *Here you go, darling!* ',
    prem: '🍭 *My darling, this feature is reserved for premium users only*',
    admin: '🍭 *My darling, this feature is reserved for admins only*',
    botAdmin: '🍭 *Darling, this feature can only be used when the bot is a group admin* ',
    owner: '🍭 *My dearest, this feature is reserved for the owner only*',
    group: '🍭 *Sweetheart, this feature is exclusively for groups*',
    private: '🍭 *My love, this feature is exclusively for private chats*',
    wait: '🍭 *Darling, in process...* ',    
    error: '🍭 *Oh darling, there seems to be an error!*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: "_M_A_R_I_A_RGVzZXJ0U2hydWdzCg==",
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "false",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
