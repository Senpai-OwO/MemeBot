const { RichEmbed } = require('discord.js');

module.exports = {
	id: 'help',
	desc: 'Sends you a list of commands.',
	exec: async (call) => {
		let helpEmbed = new RichEmbed()
				.setTitle('Meme Commands'),
			description = '';
		for (let command of call.commands)
			description += `\`,${command[1].id}\` **->** ${command[1].desc}\n`;
		helpEmbed.setDescription(description.trim());
		call.message.author.send(helpEmbed)
			.then(() => call.message.channel.send('Sent you a list of commands in your direct messages.'))
			.catch(() => call.message.channel.send('Failed to send you help, please check your privacy settings and try again.'));
	}
};
