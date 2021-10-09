module.exports = {
    name: 'leave',
    description: "stop the bot and leave the channel",
    async execute(client, message, args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');
        await voiceChannel.leave();
        await message.channel.send('Leaving channel :smiling_face_with_tear:');
        
    }
}