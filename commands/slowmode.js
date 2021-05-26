module.exports = {
    name: 'slowmode',
    description: 'Abilita il cooldown nel canale in cui e\' stato inviato. | Cooldown: 5 sec | ?slowmode _secondi_ ',
    cooldown: '5',
    execute(message, args) {
        const { channel, member } = message;
        let duration = args[1]
        duration.toLowerCase()

        if (!member.hasPermission('MANAGE_CHANNEL')) return message.reply('Non hai il permesso di farlo, cattivone.')

        if (duration ===  'off') {
            duration = 0
        }
        if (isNaN(duration)) return message.reply('Inserisci un valore valido')
        

        channel.setRateLimitPerUser(duration)
        message.reply(`cooldown per questo canale impostato a ${duration} secondi`)


    }
}