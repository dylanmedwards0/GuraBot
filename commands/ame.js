const Discord = require("discord.js");
Amelia_Image = "https://i.imgur.com/cGQIAmm.jpg";
Amelia_Url = "https://www.youtube.com/channel/UCyl1z3jo3XHR1riLFKG5UAg/live";
const ameliaEmbed = new Discord.MessageEmbed()
  .setColor("#FFE4B5")
  .setAuthor("Amelia Watson HoloLive EN", Amelia_Image, Amelia_Url)
  .setImage(Amelia_Image)
  .setURL(Amelia_Url)
  .setDescription("")
  .addField("Twitter:", "https://twitter.com/watsonameliaEN", true)
  .addField("Livestream: ", Amelia_Url, false)
  .setTimestamp();

module.exports = {
  name: "ame",
  description: "Sends an embed with Amelia's info",
  execute(message, args) {
    message.delete({ timeout: 1000 });
    message.channel.send(ameliaEmbed);
  },
};
