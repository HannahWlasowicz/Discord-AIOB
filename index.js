const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot is online :)')
});

//Put in hidden key
client.login('');