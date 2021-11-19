module.exports = {
    name: "leave",
    async execute(client, message) {
        try {

            if (message.member.voice.channel) {
                message.guild.me.voice.channel.leave();
                message.channel.send("Bye Bye")
              } else {
                message.reply("You need to join a voice channel first!");
              }

        } catch (error) {
            message.reply('Error: ' + error) 
        }
    }
}