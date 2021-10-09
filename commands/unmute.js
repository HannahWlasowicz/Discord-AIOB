module.exports = {
    name: 'unmute',
    description: "Command to unmute a member",
    execute(client, message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
            
            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.users.id}> has been unmutted`);
        } else{
            message.channel.send("Can't find that member!");
        }
    }
}