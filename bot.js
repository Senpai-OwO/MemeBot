const { Client, Collection } = require('discord.js');
const handler = require('d.js-command-handler');
const fs = require('fs');
const token = process.env.BOT_TOKEN;

const loaders = new Collection(fs.readdirSync('./load').map((n) => require(`./load/${n}`)).filter((l) => l.id).map((l) => [l.id, l]));

let client = new Client({ disableEveryone: true });

client.ownerID = '541814741434236948'; 
client.ownerID = '581221446093897749';

client.on('ready', () => {
	for (let loader of loaders.values())
		if (typeof loader.exec === 'function')
			loader.exec(client);

	console.log(client.user.username + ' has successfully booted up.');
});

handler(__dirname + '/commands', client, { customPrefix: ',' });

client.login(token);
