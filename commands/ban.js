module.exports = {
    name: 'kick',
    description: "Command to kick user",
    execute(client, message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        } else{
            message.channel.send("You couldn't ban that member");
        }
    }
}