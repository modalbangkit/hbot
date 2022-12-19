let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `Contoh:
${usedPrefix + command} good morning

_Note:_
Daftar bahasa yang didukung: Hanya Bahasa Inggris Ke Bahasa Indonesia`, m)
  let res = await fetch(`https://saipulanuar.herokuapp.com/api/translate?kata=${text}&apikey=${bearkey}`)
  if (!res.ok) throw eror
  let json = await res.json()
        m.reply(json.result.text)
} 
handler.help = ['translate'].map(v => v + ' <teks>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i
handler.limit = false
handler.fail = null
handler.exp = 0
module.exports = handler
