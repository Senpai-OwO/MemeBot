var textArray = [
    new Image().src = 'https://cdn.discordapp.com/attachments/771827343072297024/788161574664929340/image0.jpg',
    new Image().src = 'https://cdn.shopify.com/s/files/1/0198/9715/5646/products/white-wh_5000x.png?v=1602855688',
    new Image().src = 'https://cdn.discordapp.com/attachments/788162087142424597/788162138983104543/Screenshot_20201214-042907_Instagram.jpg',

];

module.exports = {
    id: 'dog',
    aliases: ['doggie'],
    desc: 'Random picture of a dog',
    getRandomImageURI: (callback) => {

        var randomIndex = Math.floor(Math.random() * textArray.length)

        callback(textArray[randomIndex])

        return textArray[randomIndex]

    }
}
