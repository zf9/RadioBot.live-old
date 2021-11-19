const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: "help",
    async execute(client, message) {

        let Embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`Command List`, ``, `https://radiobot.live/commands.html`)
        .addFields(
            { name: `${config.prefix}radio helpau`, value: '[Australia Radio Stations]' },
            { name: `${config.prefix}radio helpnz`, value: '[New Zealand Radio Stations]' },
            { name: `${config.prefix}radio helpother`, value: '[Other Country Radio Stations]' },
            { name: `${config.prefix}leave`, value: '[Makes bot leave VC]' },
            { name: `${config.prefix}playurl`, value: `[${config.prefix}playurl <Song URL>]` },  
        )
        .setTimestamp()
        .setFooter(`${message.author.username}#${message.author.discriminator}`)                    
        message.channel.send(Embed);
    }
}
