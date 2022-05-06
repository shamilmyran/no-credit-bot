let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
// auto clear when there are messages that can't be seen on wa desktop
if (m.messageStubType === 68) {
let log = {
key: m.key,
content: m.msg,
sender: m.sender
}
await this.modifyChat(m.chat, 'clear', {
includeStarred: false
}).catch(console.log)
}}
export default handler
