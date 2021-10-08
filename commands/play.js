const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const yts = require('yt-search');
module.exports = {
    name: 'play',
    description: "This is to play a yt video",
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;
        console.log(voiceChannel);
        if(!voiceChannel) return message.channel.send('You need to be in a channel ot execute this command!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissions!');
        if(!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissions!');
        if(!args.length) return message.channel.send('You need to send the second argument!');

        const connection = await voiceChannel.join();
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));
        
        if(video) {
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volue: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });

            await message.reply(`:thumbsup: Now Playing ***${video.title}***`);
        } else{
            message.channel.send('No vide results found');
        }
    }
}