let handler = async (m, { conn, usedPrefix, command }) => {
    let vid = 'https://danzzapi.xyz/api/asupan/bocil?apikey=danzz'
conn.sendButtonVid(m.chat, vid, 'selamat menikmati', wm, 'Next', `${usedPrefix + command}`, m)
}
handler.help = ['bocil']
handler.tags = ['asupan']

handler.command = /^(bocil)$/i

module.exports = handler
