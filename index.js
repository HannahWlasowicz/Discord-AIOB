const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '-';


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
client.on('messageCreate', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(message.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
    message.channel.send('pong');
  }
  else{
    message.channel.send("What??")
  }

})
  client.login('ODgyNzY0NzAyMjczMzg4NTU0.YTAIsQ.K8SNZWttvugJMf4IXRzOItfEZWQ');
