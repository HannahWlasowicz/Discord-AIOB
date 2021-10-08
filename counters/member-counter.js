module.exports = async(client) => {
    const guild = client.guilds.cache.get('834875123907559455');
    setInterval(()=>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('896092411112063096');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating member count');
    }, 5000);
}