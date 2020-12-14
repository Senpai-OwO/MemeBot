module.exports = {
	id: 'hi',
	aliases: ['say hi'],
	desc: 'Friendly little bot.',
	exec: (call) => {
		call.message.channel.send('Hey loser')
	}
};
