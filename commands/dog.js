module.exports = {
	id: 'dog',
	aliases: ['doggie'],
	desc: 'Sends a random picture of a dog.',
	exec: (call) => {
		call.message.channel.send("https://cdn.shopify.com/s/files/1/0198/9715/5646/products/white-wh_5000x.png?v=1602855688");
	}
};
