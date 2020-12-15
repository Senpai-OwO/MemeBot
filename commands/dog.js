module.exports = {
id: 'dog',
aliases: ['doggie'], ['dogz'], 
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
    'https://tse3.mm.bing.net/th?id=OIP.u94CISmFNca8-2-OdJGlVQHaEK&pid=Api&P=0&w=306&h=173',
    'https://cdn.discordapp.com/attachments/677330735920840704/788166521515278396/image0.jpg',
    'Quit asking.',
    'https://cdn.shopify.com/s/files/1/0198/9715/5646/products/white-wh_5000x.png?v=1602855688',
    'https://cdn.discordapp.com/attachments/784602237212295168/788167428408475648/Screenshot_2020-12-14_141401.png',
    'https://cdn.discordapp.com/attachments/787519438894530590/788167621187076176/image0.png',
    'https://cdn.discordapp.com/attachments/788167512210014300/788167988581761092/20200904_164358.jpg',
    'Look in the mirror.',
    'https://cdn.discordapp.com/attachments/787519438894530590/788169510074449990/image0.jpg',
    'https://cdn.discordapp.com/attachments/704148867913875477/788196268047597578/db2a77c98f3d95c8161d3f7aee85c7fa.png',
    'https://cdn.discordapp.com/attachments/771147863840784385/788179013410488330/image0.jpg',
    'https://cdn.discordapp.com/attachments/625511155682508801/788413732631871518/crocrocs.png',

];
       var randomNumber = Math.floor(Math.random()*textArray.length);
       call.message.reply(textArray[randomNumber]) 

        }
};
