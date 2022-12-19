let handler = async (m, { conn, usedPrefix, command }) => {
    let vid = 'https://danzzapi.xyz/api/asupan/rikagusriani?apikey=danzz'
conn.sendButtonVid(m.chat, vid, 'selamat menikmati', wm, 'Next', `${usedPrefix + command}`, m)
}
handler.help = ['rikagusriani']
handler.tags = ['asupan']

handler.command = /^(rikagusriani)$/i

module.exports = handler
