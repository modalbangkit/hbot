let handler = async (m, { conn, usedPrefix, command }) => {
    let vid = 'https://danzzapi.xyz/api/asupan/santuy?apikey=danzz'
conn.sendButtonVid(m.chat, vid, 'selamat menikmati', wm, 'Next', `${usedPrefix + command}`, m)
}
handler.help = ['santuy']
handler.tags = ['asupan']

handler.command = /^(santuy)$/i

module.exports = handler
