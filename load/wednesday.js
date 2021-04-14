const INTERVAL = 200;
const CHANNEL = '571308380354904116';
// eslint-disable-next-line max-len
const MESSAGES = ['It\'s Wednesday my dudes.']
function sendMessage(channel) {
	channel.send(MESSAGES[Math.ceil(Date.now()/INTERVAL)*INTERVAL % MESSAGES.length])
}

module.exports = {
	id: 'wednesday',
	exec: (client) => {
		let channel = client.channels.get(CHANNEL);

		if (!channel)
			return console.log('Failed to find interval post channel.');

		let nextTime = Math.ceil(Date.now() / INTERVAL) * INTERVAL;

		setTimeout(() => {
			sendMessage(channel);

			setInterval(sendMessage.bind(null, channel), INTERVAL);
		}, nextTime - Date.now());
	}
};
