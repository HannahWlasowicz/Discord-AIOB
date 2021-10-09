const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES], partials: ["MESSAGE", "CHANNEL", "REACTION"] });
require('dotenv').config();

const mongoose = require("mongoose");

const prefix = process.env.PREFIX;
// const memberCounter = require('./counters/member-counter');

// Get's commands from folder
const fs = require('fs');
client.commands = new Collection();
client.events = new Collection();
['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client);
})

// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// for(const file of commandFiles){
//   const command = require(`./commands/${file}`);

//   client.commands.set(command.name, command);
// }


// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
//     // memberCounter(client);
//   });
  
// client.on('guildMemberAdd', guildMember => {
//   let welcomeRole = guildMember.guild.roles.cache.find(role => role.name ==='Member');

//   guildMember.roles.add(welcomeRole);
//   guildMember.guild.channels.cache.get('883172952202424330').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to checkout #rules channel`);
// });



// Database connection
// mongoose.connect(process.env.DB_SRV
// //   useCreatendex: true, 
// //   useFindAndModify: false, 
// //   useNewUrlParser: true, 
// //   useUnifiedTopology: true 
// ).then(() =>{
//   console.log('Connected to the database!');
// }).catch((err) =>{
//   console.log(err);
// });


  client.login(process.env.DISCORD_TOKEN);
