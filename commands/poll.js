const Discord = require("discord.js");

module.exports = {
  name: "poll",
  args: "true",
  usage: "<question>",
  description: "Sends an embed with poll info",
  async execute(message, args) {
    const pollEmbed = new Discord.MessageEmbed()
      .setColor(0xffffff)
      .setFooter("React to vote.")
      .setDescription(`Poll Created By ${message.author.username}`)
      .setTitle(args.join(" "));

    let msg = await message.channel.send(pollEmbed);

    await msg.react("👍");
    await msg.react("👎");

    message.delete({ timeout: 1000 });
  },
};
