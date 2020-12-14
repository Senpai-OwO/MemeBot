module.exports = {
	id: '8ball',
	aliases: ['8ball'],
	desc: 'Ask the 8ball any question you want!',
	exec: (call) => {
        call.message.reply(textArray[randomNumber])
		var textArray = [
    'Perhaps',
    'Possibly',
    'Unlikely'
];
var randomNumber = Math.floor(Math.random()*textArray.Length);

	}
};
