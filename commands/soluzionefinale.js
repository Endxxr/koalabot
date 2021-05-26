const { MessageFlags } = require("discord.js")

module.exports = {
    name: 'soluzionefinale',
    description: 'Crea un canale vocale dove deportare i membri della chat vocale in cui sei | Cooldown: 10 Minuti | Uso ?soluzione',
    cooldown: '600',
    async execute(message, isNSFW) {
        if (message.channel.nsfw == false) return message.channel.send(isNSFW)
        if (!message.member.voice.channel) {
            message.channel.send("Il Koala e' confuso, non ti vede in nessun canale vocale :( ")
            console.log(`[Voice] The user ${message.author.id} isn't in a voice channel`)
            return
        }

        console.log('[COMMAND] ?soluzionefinale')

        message.guild.channels
        .create('Polonia', {
            type: 'voice'
        })
        .then((channel) => {
            ID = channel.id
            let CanaleVocale = channel 
            voiceChannelID = message.member.voice.channelID
        
            
            
            
            members = message.member.voice.channel.members.map(user => user.id)
            
            let oldNicknames = []
       
                for (let i = 0; i < members.length; i++) {
                    let memberID = members[i]
                    let UserToMove = message.guild.members.cache.get(memberID)
                    oldNicknames.push(message.member.nickname)
                    try {
                    UserToMove.setNickname('Ebreo')
                    } catch (e) {
                        console.log(`[ERROR] API ERROR: Missing Permissions, server ${message.member.guild}`)
                        message.reply(`<@${memberID}> e' di razza ariana! Assistera' con me`)
                    }
                    UserToMove.voice.setChannel(ID)
                    
                    
                }
                message.reply('Deportati gli ebrei')
                    
            
            
            CanaleVocale.join()
                .then(connection => {
                    connection.voice.setSelfDeaf(true); //SelfDeaf for save bandwidth
                    connection.play(`./audio/erika.mp3`);
                    console.log(`[Voice] Played Erika for ${message.author} in the server ${message.guild.name}`);
                
                })
            
            setTimeout(() => {
                    
                for (let i = 0; i < members.length; i++) {
                        let memberID = members[i]
                        let UserToMove = message.guild.members.cache.get(memberID)
                        if (UserToMove ==  undefined) {
                            UserToMove = ''
                        }
                        
                        UserToMove.setNickname(oldNicknames[i])
                        UserToMove.voice.setChannel(voiceChannelID)
                        
                        .catch(console.error)
                    }
                    message.reply('I Russi hanno liberato il campo di concentramento')
                }, 15*1000)
                
            setTimeout(() => {
                channel.delete();
            }, 20*1000)

            
            
            
            
            
             
        })
        
            
                
    }

}