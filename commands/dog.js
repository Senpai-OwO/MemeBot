module.exports = {
	id: 'dog',
	aliases: ['doggie'],
	desc: 'Sends a random picture of a dog.',
	exec: (call) => {
		call.message.channel.send('This command is currently disabled.');
	}
};
