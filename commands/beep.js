module.exports = {
	id: 'beep',
	aliases: ['bop'],
	desc: 'Makes a little robot sound.',
	exec: (call) => {
		call.message.channel.send('Boop!');
	}
};
