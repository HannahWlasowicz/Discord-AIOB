const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require('dotenv').config();

const mongoose = require("mongoose");

const prefix = process.env.PREFIX;

// Get's commands from folder
const fs = require('fs');

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
client.on('messageCreate', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
    client.commands.get('ping').execute(message, args);
  }
  else if(command === 'rules'){
    client.commands.get('rules').execute(message, args, MessageEmbed);
  }
  else{
    message.channel.send("What??")
  }

})

// Database connection
mongoose.connect(process.env.DB_SRV
//   useCreatendex: true, 
//   useFindAndModify: false, 
//   useNewUrlParser: true, 
//   useUnifiedTopology: true 
).then(() =>{
  console.log('Connected to the database!');
}).catch((err) =>{
  console.log(err);
});


  client.login(process.env.DISCORD_TOKEN);
