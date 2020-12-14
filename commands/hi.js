module.exports = {
	id: 'hi',
	aliases: ['say'],
	desc: 'Friendly little bot.',
	exec: (call) => {
		call.message.channel.send('Hey loser')
	}
};
