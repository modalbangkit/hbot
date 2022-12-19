let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  const ultah = new Date('November 4 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/Donasiku.mp3`)
  json = await res.buffer()
  conn.sendButton(m.chat, `
┏━ꕥ〔 *Donasi • Dana* 〕ꕥ━⬣
┃✾ Gopay  [088279268363]
┃✾ Dana  [088279268363]
┃✾ Saweria  [https://saweria.co/raraharsita2]
┗━━━━ꕥ
┏━━ꕥ〔 *NOTE* 〕ꕥ━⬣
┃ Ingin donasi? Wa.me/6288279268363
┃ _Hasil donasi akan digunakan buat sewa_
┃ _atau beli *RDP/VPS* agar bot bisa jalan_
┃ _24jam tanpa kendala_
┗━━━━ꕥ
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, json, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`, body: `${pickRandom(['Follow Tiktok My Bestie'])}`, sourceUrl: 'https://www.tiktok.com/@raraharsita2', thumbnail: await (await fetch('https://i.ibb.co/jfZVKmC/babi2.jpg')).buffer(),}} 
     })
}

handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
