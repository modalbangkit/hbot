let limit = 50
let fetch = require('node-fetch')
const { servers, ytv } = require('../lib/y2mate')
let handler = async(m, { conn, args, isPrems, isOwner }) => {
  const ultah = new Date('November 4 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    if (!args || !args[0]) return conn.reply(m.chat, 'Uhm... urlnya mana?', m)
    let chat = global.db.data.chats[m.chat]
    let res = await fetch(`https://saipulanuar.herokuapp.com/api/download/ytmp4?url=${args[0]}&apikey=KingOfBear`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    
    let _thumb = {}
    try { _thumb = { thumbnail: await (await fetch(json.thumb)).buffer() } } catch (e) {}
    m.reply(wait)
    await conn.sendButtonVid(m.chat, json.result.url, `*Title:* ${json.result.title}\n*Channel:* ${json.result.channel}\n*Publish:* ${json.result.published}\n*Views:* ${json.result.views}`.trim(), wm, 'menu', '.?', m, { 
      contextInfo:{ 
        externalAdReply: { 
          title: `💌 Ultah Fory : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`, 
          body: `${pickRandom(['Follow Tiktok My Bestie'])}`, 
          sourceUrl: 'https://www.tiktok.com/@raraharsita2', 
          thumbnail: await (await fetch('https://i.ibb.co/jfZVKmC/babi2.jpg')).buffer(),}} 
     })
}
handler.help = ['ytmp4 <query>']
handler.tags = ['downloader']
handler.command = /^yt(v(idi?e?o)?|mp4)?$/i
handler.limit = true
module.exports = handler
