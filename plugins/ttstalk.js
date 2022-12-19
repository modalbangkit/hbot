let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} raraharsita2`
  m.reply('_Sedang membuat..._\n*Mohon tunggu sekitar 1 menit*')
  let res = await fetch(`https://danzzapi.xyz/api/stalker/tiktok?username=${args[0]}&apikey=danzz`)
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != true) throw json
   let iggs = `
┏━━━ꕥ *TIKTOK STALKER* ꕥ━⬣
┃✾ *Nama:* ${json.result.username}
┃✾ *Bio:* ${json.result.description}
┃✾ *Followers:* ${json.result.followers} Followers
┃✾ *Following:* ${json.result.following} Following
┃✾ *Link:* https://www.tiktok.com/@${json.result.username}
┗━❑`.trim()
  conn.sendFile(m.chat, json.result.profile, 'eror.jpg', iggs, m, 0, { thumbnail: await (await fetch(json.result.profile)).buffer() })
}

handler.help = ['ttstalk <username>']
handler.tags = ['tools']
handler.command = /^ttstalk$/i

module.exports = handler
