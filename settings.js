const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUduWElxWFBSb0N6bUNqTVVsRm1HUnU3b3BZV2MwSmU4SjBTb0pXYkFVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTBpbGFvblQ1OER3dEVocTUySWo1Y3RTS3lON1VkOUc3dkVtZ2JxcWZIRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSURNU0pNb25vYzhSaUhETVkyZ3hDdnk3NUVuUTQ2R2NtbWZrSGJub2tjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLdkhrWHR1UTlRQWRVQm1DQmFKNnFqWXdWN0FHeFQrMzFWSmpKSkprekRFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDMG53dFYxYXVBNFdZUndMT2dFWURzMkFOT3FIWHpDT05ZemdxMDNFWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpydlBmYmFtZW1ZQXFRWnRMQzhOcHoyUmZJUnFFZjJyRlRUcDhwdXZTeVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE1DRVFYRnAxSll3TzZxQmk3SDZwUjY4UVJFMUt1c1B2VHhJc0lwRFUxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3Y0TWYvTmg5Nzg2SEF2RHovcm5xMWJaQU5VUkxRMzk4MXJVR0hQaTVUQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ6R1RGRTY2Z0E0bXcvMzRaUURGQ2dtSjBRNVBzZUEwMkFmUzBzTDFIc2tCT01UMGxhUDcrVnprZDF4MFlxV29WMDFOYmd6TWJsL2FKS1FibUpYQWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6IkxCS0tBNUhLdnVnWDMwenJ4Q1p1SlBPdUVtOHpCc0hHUUdCdnRlMi8ydUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImtGY0pqRjc2VDBPWlBLcy1IVVBIM3ciLCJwaG9uZUlkIjoiZjQwMmY1MWUtZjA5Mi00ZmVmLWJmY2ItM2QyNDIyN2E2ODYzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFJeFdxdFNJM0RRNmxKWlRJYkkvTkVJdGpodz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0h6Y2U3eDV0WTdpWWFpYVhjMVF6VDF6clNJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2YybmcwUXhhSGp0d1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRFY5NmJjNGRMRVZHTmpBZEVZN1FXZEpoZEdsVFRHTzJqRWNlM0V4ZEQzaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQjBrb041TWozNUNOVDZ4aWYybVM5OExyak1LZUtRcm9weVhnbkxTWUI0QUY5ZlhPT3NrS2RnbktqajlWYzlueE9NOVdtTUs5elNNd1JDaTZLUmE5aEE9PSIsImRldmljZVNpZ25hdHVyZSI6ImdkanZmaWJyVXNIUmhTeUNwSmRMOEg3Vms1MjEwSGpOWldKQTZDQk9IQjRuUUgzRVM4K0pNMFlsdDJUSVdGL2ZSSDlKM1dsZlVKY0pEdlpVc2R6V2d3PT0ifSwibWUiOnsiaWQiOiIyMzc2MjA3MjEyODA6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNQVJDLVRFQ0gifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjIwNzIxMjgwOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUTFmZW0zT0hTeEZSall3SFJHTzBGblNZWFJwVTB4anRveEhIdHhNWFE5NSJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzU4MjQxN30=' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '237620721280' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || true  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};
