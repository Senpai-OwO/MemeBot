const INTERVAL = 8640;
const CHANNEL = '662010475894145105';
const MESSAGES = ['This bot is not finished.' 'Memes rule the world!' 'Hahaha']
function sendMessage(channel) {
	channel.send(MESSAGES[Math.ceil(Date.now()/INTERVAL)*INTERVAL % MESSAGES.length])
}

module.exports = {
	id: 'chat',
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
