let handler = async (m, { conn, usedPrefix, command }) => {
    let vid = 'https://danzzapi.xyz/api/asupan/hijaber?apikey=danzz'
conn.sendButtonVid(m.chat, vid, 'selamat menikmati', wm, 'Next', `${usedPrefix + command}`, m)
}
handler.help = ['hijaber']
handler.tags = ['asupan']

handler.command = /^(hijaber)$/i

module.exports = handler
