const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_11_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM2LFxuICAgICAgICA1OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM1LFxuICAgICAgICA0MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDkyLFxuICAgICAgICA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM1LFxuICAgICAgICA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU2LFxuICAgICAgICA4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICA5NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgODIsXG4gICAgICAgIDkyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMixcbiAgICAgICAgMyxcbiAgICAgICAgODIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDMxLFxuICAgICAgICA4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk5LFxuICAgICAgICA3NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc1LFxuICAgICAgICA0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwT1lWREZzYWQ2ZGx3c29KME9FeUs0NkkvK25YRWZGUmFTbmJNV2lOWm1NPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzg5MDczOTAzMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDQxMDIwNUMwRDg4NDFEMDZBODUxMjdBODNBMTYzN0RcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNjY4Mjk2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3ODkwNzM5MDMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQkUzOUY0NEFDQzM4REI3OTE3MEJDQ0M5NDMyM0FCOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2NjgyOTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibkY3YTA2NS1TdmlhdmhzWTJ0SnE1Z1wiLFxuICBcInBob25lSWRcIjogXCIwMjhjZGExNS03ZTEyLTQyZmQtOTBkMy02ZTg1NGQwNzIxMGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgMjM3LFxuICAgICAgMjMwLFxuICAgICAgMTc5LFxuICAgICAgNTQsXG4gICAgICAyMTksXG4gICAgICAyMzcsXG4gICAgICAyNyxcbiAgICAgIDI0NixcbiAgICAgIDU0LFxuICAgICAgMTE4LFxuICAgICAgMTgzLFxuICAgICAgMTE5LFxuICAgICAgMTI5LFxuICAgICAgMjAzLFxuICAgICAgOTQsXG4gICAgICAxMixcbiAgICAgIDEyNSxcbiAgICAgIDIwNixcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgsXG4gICAgICAxMDEsXG4gICAgICA5LFxuICAgICAgODEsXG4gICAgICAxMTgsXG4gICAgICA0NSxcbiAgICAgIDIwMSxcbiAgICAgIDIxLFxuICAgICAgMTE2LFxuICAgICAgNTUsXG4gICAgICAxMjUsXG4gICAgICAyMixcbiAgICAgIDE2NyxcbiAgICAgIDE3NyxcbiAgICAgIDg5LFxuICAgICAgMTkyLFxuICAgICAgODIsXG4gICAgICA1OCxcbiAgICAgIDE1OSxcbiAgICAgIDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQUHlnNjhHRU1TbCtyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlE4VlR1cmprVjlIQzFLcTRjQlRESkZyeXdlakZwcm9oTkV1amJrRndNMlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiKzdqdXN3NVlYVngraUVlYWsrZHdvWUVGQzU0aXZhVUZKOVJkQ2RpdTlXdUltN0FlejVVeGx5b0w1RUhDL2dBRlRaSmpFemNzdkZacFJsNmRxd3FXQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZzl4aHRUWWE2ZTBXY3RCM0xaa1VWb0FTU1B5c2FSZjR3RU0vRHA1NyttTnF6SFJRWFJXSHBxakdSR1doU25VQTJSWXh2V21LZ05CS28ySmVjVThnQmc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc4OTA3MzkwMzE6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJhaHVsIFJveSBjaG93ZGh1cnlcIixcbiAgICBcImxpZFwiOiBcIjEwMzY5MzgxNDkxNTExNTozQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3ODkwNzM5MDMxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjY4Mjk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWVrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNZWsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyMzBaYTkxdGRHOCtrd3ArQ3Y2NHM5OW4vTGo4ejdJNVNzVDFITi9idmxBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MDkyNDI3MzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTY2ODI5NTYxM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
