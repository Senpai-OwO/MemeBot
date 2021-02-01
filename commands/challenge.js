module.exports = {
	id: 'challenge',
	aliases: ['tic'],
	desc: 'Challenge the bot to a game of tic tac toe!',
	exec: (call) => {
		call.message.channel.send('lol no');
	}
};
