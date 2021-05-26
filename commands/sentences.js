module.exports = {
    name: 'sentences',
    description: 'Questo non e\' un comando utilizzabile. Se lo vedi qua probabilmente, si sara\' buggato qualcosa.',
    execute(message, args, gods) {
        
        lowermessage = message.content.toLowerCase();

        function toxic() {
            let targetMember = message.author.id;
            let usernickname = message.member.nickname;
            let mention = targetMember || message.guild.members.cache.get(args[0]);
            if (gods.includes(mention)) return message.channel.send("No, e' mio amico")
            if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Non posso cambiare il nickname")
            message.member.setNickname("Toxic").catch(err => console.log(err) && message.channel.send("Si e' verificato un errore!"))
            setTimeout(() => {
                message.member.setNickname(usernickname)
            }, 20*1000)
        }

        
        switch (lowermessage) {
            case 'sei un pezzo di merda':
                message.channel.send(`${message.member.nickname} ohhhhhh, no insulti qui.`)
                toxic()
                break
            case 'mi dissocio':
                message.channel.send(`Anche io`)
                message.react('😬')
                break
            case 'ciao':
                message.react("👋")
                message.reply("Ciao amico debole")
                break
            case 'cazzo':
                message.react('🍆')
                message.reply("Quello che piace a te.")
                toxic()
                break
            case 'merdoso':
                message.channel.send(`${message.member.nickname} ohhhhhh, no insulti qui.`)
                toxic()
                break
            case 'fai schifo':
                message.channel.send(`${message.member.nickname} ohhhhhh, no insulti qui.`)
                toxic()
                break
            case 'sei gay':
                message.channel.send(`${message.member.nickname} ohhhhhh, no insulti qui.`)
                toxic()
                break
            case 'ti denuncio':
                message.react('📩')    
                message.react('📃')
                message.react('👮‍♂️')
                message.react('🎇')
                message.react('🔫')
                message.reply("Ti do' una mano")
                break
            case 'i koala sono belli':
                message.react('❤')
                message.react(("🐨"))
                message.reply(":)")
        }
    }
}