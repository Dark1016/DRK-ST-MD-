
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sten10royal@gmail.com";
global.location = "Port-au-Prince,Haïti.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "50931461936@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/Hxduja6rDRh30gSNeUNyfm";
global.website = process.env.GURL || "https://chat.whatsapp.com/Hxduja6rDRh30gSNeUNyfm";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3e1d82ab139d29975cad4.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || " ";
global.owner = process.env.OWNER_NUMBER || "50931461936";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
 "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUd4ZWhmV3R0YkxRek5NN21WbTlTZ21YZk41WDJyUytvNFNSL1RSaTdXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3hFYmZLQy9VL2ROYlcxMHRHUnNzYUVPdFB5TmY3NHRkdDNJUWx0OGtuTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTmpqaTZZd1ZvbW9UOTdsVW5LMksvV2tWS3JTMUxseWMrLzhNaE1ZR1drPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSVm5rMmRERXNXcm5ka3U3UUU3aEROem1HcExkU2dzTjE3YXpUa1RIejFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNQODl6M0hMY09mUFhkc0dROUV0bVA3YVVvOGxWMElqeTRPalF2RDdvWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5KYU52aFB0TWE3ZStlaXVZWnJTMGpmZHVReXlNelFPajdnbVp0VHAzQVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE5JSGUvaUxzUHM3QW5sd2RNdS9ZeGlQeUZnWDZDaDdZQmVJWkpZK2tVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMStPeDl2cVk0UCs5YWg1WXRPMkVMRkhvTm5Yb2c5Tjc3N1VDekFWbnVsTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdmUlJXTEFyeFpLNHZUZjkxbFN4c0FtNi9ITGZyYzExamlTbFlNRkp5SXptTjRYZEUyOXJCTS9QZW5qSzJjU1laMWswaGdkeENjTzFadC9sQ1pPcmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJocEUveDB3anBIRkc3cm83cjUwNGZIWU4vRGpHWWpkeEpZUkJhWW1sVXRvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTMxNDYxOTM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY0NTUxMDYzOEFEQ0IyQzgwNzlFMzNEQTQzRTVDMkZCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM1NjIzOTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTMxNDYxOTM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdCM0QzODhDNDEyRTY5OTkzODhEODkzQ0QyOTQyMzFGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM1NjIzOTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjllQkRPNTRHUTN5NndpcFNTTkNwNXciLCJwaG9uZUlkIjoiYWQ2YjVmYzktNmJkNS00MGEyLWI1MjgtZTRhZTk0OTM3OGIwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9rblBhSzU2aGFrTzVTMjZnRXFwRTl5eG91cz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJocjRqR0RPMnMzTG9UVnVqZDArMGpFWThiY0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUzc4M00xRUMiLCJtZSI6eyJpZCI6IjUwOTMxNDYxOTM2OjY1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfjLnig5/ig6Lwn5GRIMSQw4bwnZqq8J2QiuC8kvCdmY4t8J2Zj/CdnqLwnZ6c8J+MueKDn+KDovCfkZEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BDRC9MOEVFSXZ6N2JVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijl6bktUdXIzT0tmT1ljVXk3WGR1eHJac3FwRm83OVRYdGg0dkl0Zy9HVHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJzQXFXMUpjbE1Na3BJQ3hsY1RDbERpdjVpWlRRemRyNWFLOHNoYWI5dWRsZDUvOHRvYXJRTzhjLzVvS1JwYk40S3pYN0hRZnpRcmVwOHcvckpXZ0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzOWV5ZXc3MzM3Q1Z5Nmh1bjNUT3VXY2laVGVNVG9mVXF4N3RUcUFBRG1YSUUwb2MwMHBpMmkvZmg4Z1RRMHlzdGNDbmdYd1BnaFZBUUw5V25HQmZpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTMxNDYxOTM2OjY1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZjNXlrN3E5emluem1IRk11MTNic2EyYktxUmFPL1UxN1llTHlMWVB4azgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM1NjIzOTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS2ZmIn0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || "'",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By 𝙎-𝙏𝞢𝞜*",
  author: process.env.PACK_AUTHER || "DRK-ST-MD ",
  packname: process.env.PACK_NAME || "𝙎-𝙏𝞢𝞜",
  botname: process.env.BOT_NAME || "DRK-ST-MD",
  ownername: process.env.OWNER_NAME || "𝙎-𝙏𝞢𝞜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
