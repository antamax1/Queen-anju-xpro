//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUVadzh1RnFkSUlaOFFXdXRDZHBhWFArdXhhN2s0clRzT3ZVM3dZc1VtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkNCaDFKNloyZUNHUU5VU3dVek4xN0NtbjlielMyaGNhL2RnTnJCSFBXST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQXJ5K2tNeS9JWUdYNHRkOThaR1RzQytaRTdCSERjUnpPbTZ5MFhKRVZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWbGJuQUM2bm1ZOHpZdHN1VUs5d21LZXpBdFBOK3dSbzQwdEZIVDEraUJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitGeHZLZ2RQdmF6M3BhWVZnOGxScHFQWXlobGtacEErT0t5L3NRWmVLVUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVndkh0OU5McE9QRDNLZzdKZE1uK0Jvai85Z0d3ak1xMnU1YUI5QnJvUXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUQybFdiVldsT2hkQml1SXdmMDVrWHVoSnZrT0NXcDNEa2tJMTNwWWVYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDkzcVE1QnYxNy8rYkgrWVJJSE5MaUZkN2RiTlpTVlVLeDhsbVhNdE1RND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFJd2d1MlNqeXpleTI5Qk1hRnFSRUVrNUlqR00wZnM0RWVUc0ZjUnlVeGdocGJsb2Qva3ZoZFlkeTU0dGdBdy83RlhzcW9UZzNDTENRTERLVjNXZGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6IjJyRlI1UXJkZGNteWhGakRSNjFadE1GaTJvNVpsVlQyQXRPSUNrVzArVGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlXb2lmTWFmU2JHZVVjeFNFdURINEEiLCJwaG9uZUlkIjoiZmM3MjkzNmMtYThlOC00NjVhLWI4ZmEtZDU4NmRkODFjMDVhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitUaWhzV0oxSGZURHZEZERRNzNDaWtWa2pyYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCQW5nOVZsckxhQk5lVnRqSXh3VFhpRml5SFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0tOTTRLMlAiLCJtZSI6eyJpZCI6Ijk0NzY1NDQ4NjMyOjc5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjI0MDQzMjEwOTM2MzIwOjc5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFRIOG9nSEVJdTJ4TUlHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoialgzQ3hxY2Z4Z2pKclNVL0ErL29wTUIwc2RIQmRyeG1GVXpNR1A3ekpEQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicEJ6M2lnUlRBTnp2L0JTenJDZzlPNVRXSWFCL3ljMXVCcjlQYnRSYlhmcktKOEZwNU1vbkNrKzZMV1puT2tjNTdaby9JUjJsYXAvWjk1U2txcWxIRGc9PSIsImRldmljZVNpZ25hdHVyZSI6ImYzNnBBODJsalo4YXhoQ0xiaFJyMUduSElNNS96Y2MwQTJpZ0g5YTBkZzdWbmdaV2RDa3FhaWlIYkxJRnhEV1JKSFM1U3lKbk1pZEM0Uk1PaGlSZWhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjU0NDg2MzI6NzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTE5d3Nhbkg4WUl5YTBsUHdQdjZLVEFkTEhSd1hhOFpoVk16QmorOHlRdyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FrSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMTQ1ODE2LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFmMyJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94765448632",
  PASSWORD: 
    process.env.PASSWORD || "tera123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
