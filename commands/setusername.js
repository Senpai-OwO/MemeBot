module.exports = {
	id: 'setusername',
	desc: 'Changes the username of the bot.',
	exec: (call) => {
		if (call.message.author.id === call.client.ownerID) {
			let newUsername = call.args.join(' ');

			if (!newUsername || newUsername.length < 2 || newUsername.length > 32)
				call.message.channel.send('Please rerun the command with a valid username between 2 and 32 characters.');

			call.client.user.setUsername(newUsername)
				.then(() => call.message.channel.send('Changed the username.'))
				.catch(() => call.message.channel.send('Failed to change the username.'));
		}
	}
};