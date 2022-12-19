let handler = async (m, { usedPrefix, command }) => {
let sender = m.sender
    let pp = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let fetch = require("node-fetch")
let who = m.sender
let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
let runnya = `
┏━━━ꕥ〔 *RUNTIME BOT* 〕ꕥ━⬣
┃✾ ⏲️ Waktu: ${time} WIB
┃✾ 💌 Aktif Selama : ${uptime}
┃✾ 🌹 Tag : @${who.split`@`[0]}
┗━━━━━━ꕥ`
conn.sendButton(m.chat, runnya, wm, 'Menu', '.menu', { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `Simpel Bot Whatsapp`, itemCount: 99999, thumbnail: await conn.resize(await (await fetch(pp)).buffer(), 300, 300),}}})
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
