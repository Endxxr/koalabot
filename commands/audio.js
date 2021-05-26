module.exports = {
    name: 'audio',
    description: 'Riproduce un audio presente tra i file del koala | Cooldown: 10sec | Uso: ?audio _@menzione_ ', //Play a chosen audio from the koala database | Cooldown: 10sec | Usage:
    cooldown: '10',

    execute(message, args, CanaleVocale, AudioFiles) { 
        

        
        
        const { getAudioDurationInSeconds } = require('get-audio-duration'); 
        let playing
        let name = args[1] + ".mp3";
        //let audioinseconds = getAudioDurationInSeconds(`./audio/${name}`).then((duration) => {
            //seconds = duration*1000; //Get the duration of the audio file 
            //});        

        console.log("[Command] ?audio " + message.author.id + message.guild.name)
        if (!CanaleVocale) {
            message.channel.send("Il Koala e' confuso, non ti vede in nessun canale vocale :( ")
            console.log(`[Voice] The user ${message.author.id} isn't in a voice channel` )
        
        } else if (playing == true) {
            message.channel.send("Aspetta che la riproduzione del seguente suono finisca!")
            console.log(`[VOICE] Already playing something! (Error)`)
        
        } else {
            if (args.includes("stop")) {
                if (!CanaleVocale) {
                    message.channel.send("Non posso fermare niente se non sei in un canale vocale!")       

                } else {
                    leave();
                }       
            
            } else if  (AudioFiles.includes(name)) {
                let audioinseconds = getAudioDurationInSeconds(`./audio/${name}`).then((duration) => {
                    seconds = duration*1000; //Get the duration of the audio file 
                    }); 
                playing = true;
                CanaleVocale.join()
                .then(connection => {
                    connection.voice.setSelfDeaf(true); //SelfDeaf for save bandwidth
                    connection.play(`./audio/${name}`)
                    console.log(`[Voice] Played the sound ${name} for the user ${message.author} in the server ${message.guild.name}`)
                    TimeOut = setTimeout(stop, seconds+1500); 
                })
            } else {
                message.channel.send(`L'audio ${name} non esiste!`)
                console.log(`[Voice] The user ${message.author} tried to play ${name} but it doesn't exist!`)
            }               
            
                
            function stop() {
                playing = false;
                CanaleVocale.leave()
                console.log(`[Voice] Left from the channel of ${message.author.id} in the server ${message.guild.name}`)
                message.channel.send("Riproduzione Finita.")  
                }
            }  
        }
    }
