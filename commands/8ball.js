module.exports = {
	id: '8ball',
	aliases: ['8ball'],
	desc: 'Ask the 8ball any question you want!',
	exec: (call) => {
		var textArray = [
    'Perhaps',
    'Possibly',
    'Unlikely'
];
var randomNumber = Math.floor(Math.random()*textArray.length);

	}
};
