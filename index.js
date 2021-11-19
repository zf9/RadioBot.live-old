const { Client, Collection } = require('discord.js');
const client = new Client();

const config = require('./config.json');
const { readdirSync } = require('fs');
client.commands = new Collection();

client.once('ready', () => {
    client.user.setActivity(config.statustext, { type: config.statustype })
    console.log("\x1b[32m" + `Bot : ` + client.user.username + `#` + client.user.discriminator + "\x1b[0m")
})

const commands = readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const fcom of commands) {
    const cmd = require(`./commands/${fcom}`)
    console.log("\x1b[33m" + `Loaded : ${fcom}` + "\x1b[0m")
    client.commands.set(cmd.name, cmd)
}

client.on('message', async (message) => {
    if (!message.guild) return;
    if(!message.content.startsWith(config.prefix)) return;
    let args = message.content.substring(config.prefix.length).split(/ +/);
    let cmdName = args.shift().toLowerCase();
    const cmd = client.commands.get(cmdName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));
    if(!cmd) return;
    cmd.execute(client, message, args).catch(e => {return console.error(e)})
});

client.login(config.token)