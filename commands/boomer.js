const { MessageAttachment } = require("discord.js");

module.exports = {
    name: "boomer",
    description: "Gura summons Za Booma",
    execute(message, args){
        let l1 = new MessageAttachment("https://media1.tenor.com/images/e358b95f34119a88c93ca90d19a80a03/tenor.gif?itemid=15072629");

        message.channel.send(`OKIE DOKIE BOOMER`, l1);
        message.delete({ timeout: 1000 });
}
}