module.exports = {
    name: 'invite',
    description: 'Crea un invito instantaneo | Cooldown: 5 | Uso: ?invite',
    cooldown: '5',
    execute(message, args) {
            message.channel.createInvite({unique: true})
            .then(invite => {
            message.reply("Hey! Ecco a te l'invito per questo server: https://discord.gg/" + invite.code)
            })
         
           
          
    }
}