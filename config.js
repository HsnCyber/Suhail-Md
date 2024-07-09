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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_45_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgODksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY3LFxuICAgICAgICA1LFxuICAgICAgICAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgzLFxuICAgICAgICA0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjcsXG4gICAgICAgIDMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTAxLFxuICAgICAgICA5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgODEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTczLFxuICAgICAgICA2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MixcbiAgICAgICAgMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTksXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia25qNTdiSENlVm9JTk9FQUJjQWJkd1lHWFZPYlprUkRtYlM3QWNlYWJBUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMzM4ODM5NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVCMTdFOENDMkYyMzU2NTY5MTlFODgyMjIwMkMzRjdEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDUxNDc0NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhMDVFa3J3alNkU3dmd08yVUJDY19BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUxMjFiYzZlLTQ3OWQtNDFmMy05MjhjLWY1YzIwZDU5NWZiMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTEsXG4gICAgICAxMjgsXG4gICAgICA1MixcbiAgICAgIDc0LFxuICAgICAgMjA4LFxuICAgICAgNDUsXG4gICAgICA3MSxcbiAgICAgIDI0MSxcbiAgICAgIDQ2LFxuICAgICAgMzUsXG4gICAgICA5LFxuICAgICAgMTA0LFxuICAgICAgODgsXG4gICAgICAyNTAsXG4gICAgICAxMDYsXG4gICAgICAxOTQsXG4gICAgICA5LFxuICAgICAgMTA5LFxuICAgICAgMjI1LFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNyxcbiAgICAgIDEwOSxcbiAgICAgIDM0LFxuICAgICAgMjQ4LFxuICAgICAgMTc2LFxuICAgICAgMjIyLFxuICAgICAgNTYsXG4gICAgICAxOTQsXG4gICAgICA1NixcbiAgICAgIDEzMSxcbiAgICAgIDE2MSxcbiAgICAgIDIyMCxcbiAgICAgIDEwNixcbiAgICAgIDY4LFxuICAgICAgMjksXG4gICAgICAyMjEsXG4gICAgICAxNzAsXG4gICAgICAxNDQsXG4gICAgICA3NCxcbiAgICAgIDE1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxTUoyN0JNQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDMzODgzOTc5OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTg4NzE5ODYzOTczOTE6MjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQWpheSBTZWp3YW5pIChUSFopXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3pyL2o4UXN2R3p0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXcXk3d3hHNHhiTERkS0FVWHozNFlJRTl2SzFaNU8yZzg3Qzk0d08yNVFjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdWdllwZGtrblBQaEg2RjJrdU1mVkh1YWdNLzJFb1diaWxvRGZsN1lnejVNTUxlRTJMZHgxRHRHQkpIN2ZUZlo3UmNya1JDcHFCTU0xb2lRT0Y4cEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRjSkcrUWIraXdTNVdGR0U0YmE1bFBRdzZDcWFhWmNITzAydXNuZitrd0d0L3hUMWZJSzFFZzZaUGFGaEh5Vk81UFY2WXhCUzVTWFFYRVF4Tnk4UmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAzMzg4Mzk3OToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUxNDc0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpFcFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkVwLmpzb24iOiAie1wia2V5RGF0YVwiOlwibXdwQkVCKzNobHliN3p0RU14OXpxSkRIdEpyKzFkUDZHUzBpbXk5TVNXbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzQxOTg3NjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1MTQ2NjgwMjFcIn0iCn0=


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
