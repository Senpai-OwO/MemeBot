module.exports = {
id: 'dog',
aliases: ['doggie'],
desc: 'Random picture of a dog',
exec: (call) => {
var textArray = [
        textArray[0] = new Image();
        textArray[0].src =  'https://cdn.discordapp.com/attachments/771827343072297024/788161574664929340/image0.jpg',
        textArray[1] = new Image();
        textArray[1].src =  'https://cdn.shopify.com/s/files/1/0198/9715/5646/products/white-wh_5000x.png?v=1602855688',
        textArray[2] = new Image();
        textArray[2].src =  'https://cdn.discordapp.com/attachments/788162087142424597/788162138983104543/Screenshot_20201214-042907_Instagram.jpg',

];
       var randomNumber = Math.floor(Math.random()*textArray.length);
       call.message.reply(textArray[randomNumber]) 

}
};
