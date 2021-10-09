module.exports = {
    name: 'rules',
    description: "Embed 0_o",
    execute(client, message, args, MessageEmbed){
        const embed = new MessageEmbed()
        .setColor('#FF5733')
        .setTitle('Test')
        .setURL('https://www.twitch.tv/akaarie')
        .setDescription('This is a test embed')
        .addFields(
            {name: 'Rule 1', value: 'No hate speach'},
            {name: 'Rule 2', value: 'Respect Mods'},
            {name: 'Rule 3', value: 'No spamming'},
        )
        .setImage('https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d')
        .setFooter('Ask a mod if you have questions');

        message.channel.send({embeds: [embed]});
    }
}