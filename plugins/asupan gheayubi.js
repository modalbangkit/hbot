let handler = async (m, { conn, usedPrefix, command }) => {
    let vid = 'https://danzzapi.xyz/api/asupan/gheayubi?apikey=danzz'
conn.sendButtonVid(m.chat, vid, 'selamat menikmati', wm, 'Next', `${usedPrefix + command}`, m)
}
handler.help = ['gheayubi']
handler.tags = ['asupan']

handler.command = /^(gheayubi)$/i

module.exports = handler
