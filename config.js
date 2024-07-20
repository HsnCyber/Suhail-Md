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

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/MWjUXcJ.jpeg" // "https://i.imgur.com/MWjUXcJ.jpeg" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_27_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTksXG4gICAgICAgIDI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODksXG4gICAgICAgIDU3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQwLFxuICAgICAgICA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNCxcbiAgICAgICAgNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjExLFxuICAgICAgICA3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNKQjMyMHRXMysrRExWcmpRM1RhYzQ2OGRsYjM5Q0x0K1ljbEx3ejkrMGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZKanJON1NsU0JDcFJaem44UjU5SHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDFkOWYxMzAtNjM4Mi00MmM5LWI1YmItMGU3YjRiNzhhYmYxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgOTgsXG4gICAgICAxMjQsXG4gICAgICAxNzcsXG4gICAgICA2LFxuICAgICAgMTMxLFxuICAgICAgNzksXG4gICAgICA2MyxcbiAgICAgIDIxMCxcbiAgICAgIDE1LFxuICAgICAgMjIyLFxuICAgICAgMjQ5LFxuICAgICAgMTE1LFxuICAgICAgMTgsXG4gICAgICAzMixcbiAgICAgIDE2MixcbiAgICAgIDI1MixcbiAgICAgIDc0LFxuICAgICAgMTQsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MCxcbiAgICAgIDQ3LFxuICAgICAgMzEsXG4gICAgICAzMSxcbiAgICAgIDIyMyxcbiAgICAgIDgwLFxuICAgICAgMTg3LFxuICAgICAgMjEwLFxuICAgICAgMTQ1LFxuICAgICAgNDUsXG4gICAgICA2LFxuICAgICAgNjUsXG4gICAgICAxNDYsXG4gICAgICA0NCxcbiAgICAgIDE0LFxuICAgICAgNDAsXG4gICAgICAyMDUsXG4gICAgICA0NSxcbiAgICAgIDkxLFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFYREg3WThNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMzM4ODM5Nzk6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxODg3MTk4NjM5NzM5MTozMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQUHIvajhRMmVMb3RBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldxeTd3eEc0eGJMRGRLQVVYejM0WUlFOXZLMVo1TzJnODdDOTR3TzI1UWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZHZrZVB2VlY3bjhhNUZtTXJ6R2hveFZNUlprZmFnM0RKdXEvVUUwTDZKeXVZbTJ6Tkk5d2p1WFpWL1g0WFhuT3h4dFB1S1dKaVlwVWRwRFZMRVE1Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibDVyLy80UXZVS3RTMlZxWW1UclpzVHJ6OFdMdkM1dDV5eHFzRStXd1U5QThydEZIRzczNitxWkhHVVZxRHpzc3hCMXVhSVhaV0lkQUFMWXFZKzI2Qmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDMzODgzOTc5OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzgxMjExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkVwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKRXAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtd3BCRUIrM2hseWI3enRFTXg5enFKREh0SnIrMWRQNkdTMGlteTlNU1dvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNDE5ODc2MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDUxNDY2ODAyMVwifSIKfQ=="


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
