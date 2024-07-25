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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/f08161ab4598ce23df472.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


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
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/f08161ab4598ce23df472.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_42_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDY2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjExLFxuICAgICAgICAxODksXG4gICAgICAgIDU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM3LFxuICAgICAgICA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExLFxuICAgICAgICA4MixcbiAgICAgICAgMTQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDcwLFxuICAgICAgICA2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAwLFxuICAgICAgICAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc4LFxuICAgICAgICA0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgODEsXG4gICAgICAgIDQwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg2LFxuICAgICAgICA4MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoWnBVOE02bFFsekNnMTMxVWxTYm9McWJhSlBuNlg3ZjgrRnkyUU1GdUM0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyMTc3MDYxNjQzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjA1NUZERUVBNjYxMDRCNTBBMDk4MUFDOURGMTkxMDhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODkzMzIyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIxNzcwNjE2NDMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzRDgzNjlGNjVCQjM2QjAwOTU4NkQwQjFCMDUxQTQ0NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4OTMzMjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibTlBRXNxX09RNVMxQmx0Qk5kREhhZ1wiLFxuICBcInBob25lSWRcIjogXCIwMzRkOTk0OC05NTBhLTRmYTctYThiNi1jNzhkYzZmOGZlYTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMxLFxuICAgICAgNjAsXG4gICAgICAyMzIsXG4gICAgICAxNDMsXG4gICAgICAxODYsXG4gICAgICA3OCxcbiAgICAgIDQzLFxuICAgICAgNDQsXG4gICAgICAyMjcsXG4gICAgICAyMzIsXG4gICAgICA1MyxcbiAgICAgIDIwMCxcbiAgICAgIDIwNixcbiAgICAgIDkxLFxuICAgICAgMjA3LFxuICAgICAgMjQsXG4gICAgICAyLFxuICAgICAgMjQ1LFxuICAgICAgMTUxLFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDkxLFxuICAgICAgODksXG4gICAgICAxNCxcbiAgICAgIDMzLFxuICAgICAgMjEyLFxuICAgICAgNyxcbiAgICAgIDE3LFxuICAgICAgMjQ0LFxuICAgICAgMTgzLFxuICAgICAgOTMsXG4gICAgICAxMTUsXG4gICAgICA0OCxcbiAgICAgIDExOCxcbiAgICAgIDI1MixcbiAgICAgIDE1NixcbiAgICAgIDEzMSxcbiAgICAgIDg2LFxuICAgICAgMTQ2LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0xHODRORjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMTc3MDYxNjQzMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjM5ODMzNDEwODg5OTc6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTYW1hc3Nh4p2k4oCN8J+puUdheWXwn5aH77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXZFbmJzR0VNT0RpTFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVZzJkWTZGMkpSdDRza1A1TU9GWUg1NUlvQWVNMWdzS3ZuVHVabXJRSENNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5HNVl0WVJPMEhBQTBKTVVXdEhyR09FVEpORktveXZ2WVoxK0FwVzdUTlpSTncwRXhmSXpQTkJaTVhXMkgwQjlPT0l6a3NVQU5DQTEvM25CTCt6a0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZsL2xKQk9EWlZhWFdXVE9JMlBQK3pHL0JZUWhjUDVXYXJUQ3Z4Nmk0Y2J3blVzcjNZSXJnbU94Q0FaS01FdEdrRjdPcUZORDZZQXF1NGNsSmhRSmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMTc3MDYxNjQzMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4OTMzMTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEbHFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURscS5qc29uIjogIntcImtleURhdGFcIjpcIkhacVRHUjR5RmMzeUkreUdJWklwT090OVlpdkdaV0xNK0N1TWRwNmNUWFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTczNDgyODYxOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxODg5NjQwMzI3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "prince",
  ownername:process.env.OWNER_NAME|| "prince hacker",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
