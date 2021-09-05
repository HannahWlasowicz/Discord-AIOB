module.exports = {
    name: 'ping',
    description: "This is a ping command!",
    execute(message, args){
        if(message.member.roles.cache.has('883895014688718918')){
            message.channel.send('pong!');
        }
        else {
            message.channel.send("Let's add that role to you ;)");
            message.member.roles.add('883895014688718918').catch(console.error);
        }
    }
}