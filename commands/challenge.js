module.exports = {
	id: 'challenge',
	aliases: ['tic tac toe '],
	desc: 'Challenge the bot to a game of tic tac toe!',
	exec: (call) => {
		call.message.channel.send('This command is currently disabled.');
	}
};
