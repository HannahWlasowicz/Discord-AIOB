module.exports = {
    name: 'reactionrole',
    description: "This is a ping command!",
    async execute(client, message, args, MessageEmbed){
        const channel = '896089122106658897'
        const purpleRole = message.guild.roles.cache.find(role => role === "Purple");
        const redRole = message.guild.roles.cache.find(role => role === "Red");
        
        const purpleEmoji = ':purple_heart:';
        const redEmoji = ':heart:';

        const embed = new MessageEmbed()
        .setColor('#FF5733')
        .setTitle('Choose a team to join')
        .setDescription('This is a test embed \n\n'
            + `${purpleEmoji} for purple team\n` 
            + `${redEmoji} for red team`);

        let messageEmbed = await message.channel.send({embeds: [embed]});
        messageEmbed.react(purpleEmoji);
        messageEmbed.react(redEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === purpleEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purpleRole);
                }
                if(reaction.emoji.name === redEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redRole);
                }
            } else{
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === purpleEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(purpleRole);
                }
                if(reaction.emoji.name === redEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redRole);
                }
            } else{
                return;
            }
        });
    }
}