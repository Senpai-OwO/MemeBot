module.exports = {
	id: '8ball',
	aliases: ['8ball'],
	desc: 'Ask the 8ball any question you want!',
	exec: (call) => {
		call.message.channel.send('This command is currently disabled.');
	}
};
