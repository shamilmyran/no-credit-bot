let handler =  m => m.reply(` ❰BOT❱
Hello Everyone, \nI am Drips\nMobile no. +91 81880 19676\nDont massage me private without my permission.
`.trim()) // Add yourself if you want
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
