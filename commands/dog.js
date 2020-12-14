module.exports = {
	id: 'dog',
	aliases: ['doggie'], ['dogg'],
	desc: 'Random picture of a dog',
	exec: (call) => {
		var textArray = [
    'https://cdn.discordapp.com/attachments/771827343072297024/788161574664929340/image0.jpg',
    'https://cdn.shopify.com/s/files/1/0198/9715/5646/products/white-wh_5000x.png?v=1602855688',
    'https://cdn.discordapp.com/attachments/788162087142424597/788162138983104543/Screenshot_20201214-042907_Instagram.jpg',
    'No dog for you!',
    'https://cdn.discordapp.com/attachments/784602237212295168/788162897913970688/th.png',
    'https://cdn.discordapp.com/attachments/784602237212295168/788163023733784636/th.png',
    'https://cdn.discordapp.com/attachments/771179572120125451/788162909800759347/image0.jpg',
];
       var randomNumber = Math.floor(Math.random()*textArray.length);
       call.message.reply(textArray[randomNumber])

	}
};
