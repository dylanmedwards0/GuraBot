const Discord = require("discord.js");
const client = new Discord.Client();
Korone_Url = "https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q/live";
Korone_Image = "https://i.imgur.com/OLGyVeN.jpg";
const koroneEmbed = new Discord.MessageEmbed()
  .setColor("#DEB887")
  .setAuthor("Inugami Korone HoloLive", Korone_Image, Korone_Url)
  .setImage(Korone_Image)
  .setURL(Korone_Url)
  .setDescription("")
  .addField("Twitter:", "https://twitter.com/inugamikorone", true)
  .addField("Livestream: ", Korone_Url, false)

module.exports = {
  name: "korone",
  description: "Sends an embed with Korone's info",
  execute(message, args) {
    message.channel.send(koroneEmbed);
    message.delete({ timeout: 1000 });
  },
};
