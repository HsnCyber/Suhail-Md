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
global.github=process.env.GITHUB|| "https://github.com/Hasnking/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/GRDmiNNkT6OJwbqYdj1CT4";
global.website=process.env.GURL || "https://chat.whatsapp.com/GRDmiNNkT6OJwbqYdj1CT4" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/MWjUXcJ.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "powered by prince HACKER " 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923168598809";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "https://i.imgur.com/MWjUXcJ.jpeg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923168598809,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_54_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMSxcbiAgICAgICAgODEsXG4gICAgICAgIDcwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM3LFxuICAgICAgICA4MixcbiAgICAgICAgODEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNixcbiAgICAgICAgMjM1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc2LFxuICAgICAgICA2MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg3LFxuICAgICAgICA5MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE2LFxuICAgICAgICA5LFxuICAgICAgICA2MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg4LFxuICAgICAgICA0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOSxcbiAgICAgICAgODEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVSzY0enhvL0cyTEI2NHpKOTcwbFVUb1IyNjJ4VmxSb0VOOVdKM0IxWUFrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3ZUVwVFhMVFJHU1JKNl9pUVpjb1pRXCIsXG4gIFwicGhvbmVJZFwiOiBcImJhYjVmYzhhLWVlNTQtNGEyYS05ZDkwLTJkMWEwYjJlNjY0NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAxOCxcbiAgICAgIDEwMyxcbiAgICAgIDIwOCxcbiAgICAgIDIxNyxcbiAgICAgIDYzLFxuICAgICAgMTc3LFxuICAgICAgMTg3LFxuICAgICAgMTUyLFxuICAgICAgMTM2LFxuICAgICAgMjAzLFxuICAgICAgMjcsXG4gICAgICAxODAsXG4gICAgICAxOCxcbiAgICAgIDcsXG4gICAgICAxNCxcbiAgICAgIDMsXG4gICAgICAxNDQsXG4gICAgICAxNDEsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAyNDEsXG4gICAgICA1NyxcbiAgICAgIDEwMSxcbiAgICAgIDg2LFxuICAgICAgMTIyLFxuICAgICAgMjExLFxuICAgICAgMTU5LFxuICAgICAgMjAzLFxuICAgICAgMTg1LFxuICAgICAgMTA5LFxuICAgICAgODIsXG4gICAgICAxMzYsXG4gICAgICA2LFxuICAgICAgMjExLFxuICAgICAgMzQsXG4gICAgICAxNTAsXG4gICAgICAyNDEsXG4gICAgICAyMjksXG4gICAgICAzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWTEpWRzFBTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTY4NTk4ODA5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MTExNTk5OTE3NDgyODo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kvUzUrZ0VFSktoczdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR0tMdDNQRDROekl0QTZmVzAvRFgrNzROYVdOMzFKVWZOVDk0YzZHTTNHMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNcENReDJkVUF3bklKcFVCeVBlK0JMQjBIYUpidlVlR0pZRGxZQzA5bjEyVndhdDV6aW1TWGhjZ3ZYcERXYzJyY2Rmc1MrdXBseHNValIrcituM3NCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1OUU0QWZKTHI0cmdZRnExRVhla25pSkhMV1Y0Y09QZ041WXYwS2Ywc2pYUk1IM0dROGkyVFRBOUhHclpaazNVTEFENnNueTdXL20wSVpyWVBWS1pnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNjg1OTg4MDk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1MDQ0ODNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@princeyt135"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "TH3 PR7NC3",
  ownername:process.env.OWNER_NAME|| "TH3 PR7NC3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "", 
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "PR7NC3"  ).toUpperCase(),



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
