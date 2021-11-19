const config = require('../config.json');

module.exports = {
    name: "shutdown",
    aliases: [],
    async execute(client, message, args) {
        if (message.author.id !== config.ownerid) return;
        if(!args[0]) return message.channel.send(`Args Required 1 = process.exit | 2 = client.destroy`);
        if(args == "1")
        {
            message.reply('Command Received! | Bot will exit in 5 seconds! (1)')
            setTimeout(function(){
                //client.destroy();
                process.exit();
            },5000);
        }
        else if(args == "2")
        {
            message.reply('Command Received! | Bot will exit in 5 seconds! (2)')
            setTimeout(function(){
                client.destroy();
                //process.exit();
            },5000);
        }
    }
}
