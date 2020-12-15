var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {
    var prefix = ','
    var msg = message.content;

    if (msg === prefix + 'image') {
        message.channel.send('Message that goes above image', {
            files: [
                "https://cdn.discordapp.com/attachments/771827343072297024/788161574664929340/image0.jpg"
            ]
        });
    }
});

bot.login('TOKEN');

