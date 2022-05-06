let handler =  m => m.reply(` ❰BOT❱
PUT YOUR DETAILS HERE
`.trim()) // Add yourself if you want
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
