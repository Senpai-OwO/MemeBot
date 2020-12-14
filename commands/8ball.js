module.exports = {
	id: '8ball',
	aliases: ['8ball'],
	desc: 'Ask the 8ball any question you want!',
	exec: (call) => {
		var textArray = [
    'Perhaps',
    'Possibly',
    'Unlikely',
    'Yes',
    'Yes!',
    'Absolutely',
    'Most Certainly',
    'It is likely',
    'I believe so',
    'I am unsure',
    'I cannot say',
    'It is not clear',
    'No',
    'No!',
    'Absolutely not',
];
       var randomNumber = Math.floor(Math.random()*textArray.length);
       call.message.reply(textArray[randomNumber])

	}
};
