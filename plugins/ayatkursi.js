let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  await m.reply(global.wait)
  let res = await fetch(`https://saipulanuar.herokuapp.com/api/muslim/ayatkursi?apikey=${bearkey}`)
  json = await res.json()
  let {
    latin,
    arab,
    artinya
  } = json.result
  let caption = `
*「 Ayat Kursi 」*
${arab}
${latin}

Artinya:
_"${artinya}"_
`.trim()
  m.reply(caption)
}
handler.help = ['ayatkursi']
handler.tags = ['islam']
handler.command = /^(ayatkursi)$/i


module.exports = handler
