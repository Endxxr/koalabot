const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'userinfo',
    description: 'Mostra le informazioni dell\' utente menzionato | Cooldown: 5 | ?userinfo _@menzione_ ',
    cooldown: '5',
    async execute(message) {
        const { guild, channel } = message

        const mentioned = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(mentioned.id)

        const embed = new MessageEmbed()
            .setAuthor(`Informazioni di ${mentioned.username}`, mentioned.displayAvatarURL())
            .addFields(
                {
                    name: 'Nome',
                    value: mentioned.tag,
                },
                {
                    name: 'Bot ?',
                    value: mentioned.bot,
                },
                {
                    name: 'Nickname',
                    value: member.nickname || 'Nessuno',
                },
                {
                    name: 'Entrato nel server',
                    value: new Date(member.joinedTimestamp).toLocaleDateString(),

                },
                {
                    name: 'Registrato',
                    value: new Date(mentioned.createdTimestamp).toLocaleDateString(),
                }
                )

        channel.send(embed)
    }

}