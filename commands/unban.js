module.exports = {
	id: 'invban',
	aliases: ['unban'],
	desc: 'Unbans a user.',
	exec: (call) => {
                    bot.on('message', message => {
    if(message.content == ',invban'){
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
                console.log(user.username + '#' + user.tag);
                user.send('MESSAGE / INVITE LINK');
                message.guild.unban(user);
            });
        });
    }
});
