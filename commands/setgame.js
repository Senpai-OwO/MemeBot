module.exports = {
	id: 'setgame',
	desc: 'Changes the game the bot is playing.',
	exec: async (call) => {
		if (call.message.author.id === call.client.ownerID) {
			let game = call.args.join(' ');

			if (!game)
				call.message.channel.send('You must specify the game. e.g. `!setgame Discord`');

			let type = await call.prompt('What is the game prefix?',
				{ filter: ['playing', 'watching', 'listening'], correct: (m) => m.channel.send('Please respond with a valid prefix. Either `playing`, `watching` or `listening`.') })
				.then((m) => m.content.toLowerCase());
			call.client.user.setPresence({ game: { name: game, type } })
				.then(() => call.message.channel.send('Changed the status.'))
				.catch((e) => console.log(e.stack) || call.message.channel.send('Failed to change the status.'));
		}
	}
};
