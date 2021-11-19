const config = require('../config.json');

module.exports = {
    name: "playurl",
    aliases: [],
    async execute(client, message, args) {
        if(!args[0]) return message.channel.send(`Please Provide A Valid Command. For More Info Do : ${config.prefix}help\nTry : ${config.prefix}playurl https://radiobot.live/Brixton.mp3`);
        try 
        {
            message.member.voice.channel.join().then(vc => {
                vc.play(`${args}`);
            }); 
            message.channel.send(`Trying to play : ${args}`)
        }
        catch (error)
        {
            message.channel.send(`Unable to play audio file supported file types [MP3,MP4,AAC + Most common audio files]\nTry : ${config.prefix}playurl https://radiobot.live/Brixton.mp3`)
        }
    }
}
