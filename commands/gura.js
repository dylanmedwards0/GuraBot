const Discord = require("discord.js");
Gura_Url = "https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g/live";
Gura_Image = "https://i.imgur.com/Tc5EVoV.jpeg";
const guraEmbed = new Discord.MessageEmbed()
  .setColor("	#B0E0E6")
  .setAuthor("Gawr Gura HoloLive EN", Gura_Image, Gura_Url)
  .setImage(Gura_Image)
  .setURL(Gura_Url)
  .setDescription("")
  .addField("Twitter:", "https://twitter.com/gawrgura", true)
  .addField("Livestream: ", Gura_Url, false)
  .setTimestamp();

module.exports = {
  name: "gura",
  description: "Sends an embed with Gura's info",
  execute(message, args) {
    message.channel.send(guraEmbed);
    message.delete({ timeout: 1000 });
  },
};
