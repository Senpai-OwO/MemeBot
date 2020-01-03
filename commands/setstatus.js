module.exports = {
	id: 'setstatus',
	desc: 'Changes the status of the bot.',
	exec: (call) => {
		if (call.message.author.id === call.client.ownerID) {
			let newStatus = call.args[0];

			if (!newStatus || !['invisible', 'dnd', 'idle', 'online'].includes(newStatus.toLowerCase()))
				call.message.channel.send('Please rerun the command and specify a valid status: `invisble`, `dnd`, `idle` or `online`.');

			call.client.user.setStatus(newStatus)
				.then(() => call.message.channel.send('Changed the status.'))
				.catch(() => call.message.channel.send('Failed to change the status.'));
		}
	}
};