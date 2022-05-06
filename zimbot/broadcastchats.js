let handler = async (m, { conn, text }) => {
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
for (let id of chats) await conn.sendButton(id, `*╔══❰ BROADCAST ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚═══════════════╝*`, 'NO CREDIT BOT\n' + m,  [['OWNER', '.owner'],['DONATE', '.donasi']], false)
m.reply('*.*')
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + '')
handler.tags = ['owner']
handler.command = /^(broadcastchats?|bcc(hats?)?)$/i
handler.rowner = true
export default handler
