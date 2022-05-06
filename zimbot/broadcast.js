let handler = async (m, { conn, text } ) => {
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
for (let id of chatsall) await conn.sendButton(id, `*╔══❰ BROADCAST ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚═══════════════╝*`, 'NO CREDIT BOT\n' + wm,  [['OWNER', '.owner'],['DONATE', '.donasi']], false)
m.reply('*.*')
}
handler.help = ['broadcast', 'bc'].map(v => v + '')
handler.tags = ['owner']
handler.command = /^(broadcast2|bc2)$/i
handler.rowner = true
export default handler
