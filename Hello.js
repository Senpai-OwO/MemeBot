module.exports = {
	id: 'hi',
	aliases: ['say'],
	desc: 'The bot is friendly.',
	exec: (call) => {
		call.message.channel.send('Hey loser');
	}
};
