module.exports = (client, guildMember) => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('883172952202424330').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to checkout #rules channel`);
}