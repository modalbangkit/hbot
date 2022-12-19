const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999,
    status: 404,
    surface : 404,
    message: `Nih My Mastah :3`, 
    orderTitle: ``,
    thumbnail: await conn.resize(await (await fetch('https://i.ibb.co/jfZVKmC/babi2.jpg')).buffer(), 300, 200), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
	conn.p[id] = [
	await conn.sendKontak(m.chat, kontak2, ftroli, { contextInfo: { externalAdReply :{ 
     showAdAttribution: true, 
      }} 
   })
	]
	await delay(100)
  return conn.sendButtonDoc(m.chat, `Hay kak @${await m.sender.split('@')[0]}, itu nomor ownerku jangan dispam yah ^_^`, 'Itu Owner Ku Yah Kak Jangan Sungkem Untuk Chat ;3','Credits', '.tqto', m, { quoted: conn.p[id][0],
    contextInfo: { //forwardingScore: 99999, isForwarded: true,
        externalAdReply: { //showAdAttribution: true,
        	sourceUrl: 'https://vt.tiktok.com/ZSRx2cB4C/',
            title: 'Jangan Bully King Of Bear Dia Kang Kopas <3',
            body: 'Follow Tiktok Pacar Saya Bang',
          thumbnail: await (await fetch(pp)).buffer()
        }
     }
    }) 
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
 
