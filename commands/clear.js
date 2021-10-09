module.exports = {
    name: 'clear',
    description: "Command to clear messages",
    async execute(client, message, args){
        if(!args[0]) return message.reply("please enter the amount of messages that you want to clear");
        if(isNaN(args[0])) return message.reply("Please enter a real number");
        
        if(args[0]> 100) return message.reply("You cannot delete more than 100 message!");
        if(args[0]<1) return message.reply("You must delete at least one message");
        
        await message.channel.messages.fetch({limit:args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}