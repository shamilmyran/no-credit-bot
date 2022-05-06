let handler = async (m, { conn, text } ) => {
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
for (let id of groups) {
let member = (await conn.groupMetadata(id)).participants.map(v => v.jid)
conn.sendButton(id, `*╔══❰ BROADCAST ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚═══════════════╝*`, 'NO CREDIT BOT\n' + wm,  [['OWNER', '.owner'],['DONATE', '.donasi']], false)
m.reply('*.*')
}}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' ')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.rowner = true
export default handler
