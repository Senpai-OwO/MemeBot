module.exports = {
	id: 'setavatar',
	desc: 'Changes the avatar of the bot',
	exec: (call) => {
		if (call.message.author.id === call.client.ownerID) {
			let newAvatar = call.cut || (call.message.attachments.first() && call.message.attachments.first().url);

			if (!newAvatar)
				call.message.channel.send('Please rerun the command with a link to the new avatar or attach it to the command message.');

			call.client.user.setAvatar(newAvatar)
				.then(() => call.message.channel.send('Changed the avatar.'))
				.catch(() => call.message.channel.send('Failed to change the avatar. Make sure the URL is valid.'));
		}
	}
};
