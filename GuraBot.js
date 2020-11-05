const fs = require("fs");
const Discord = require("discord.js");
const { prefix } = require("./config.json");
let userData = JSON.parse(fs.readFileSync("./userData.json", "utf8"));


var client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Gura is here!");
});

client.on("message", (message) => {
  if(!userData[message.author.id + message.guild.id]) userData[message.author.id + message.guild.id] = {} //adds user to json if they aren't there
  if (!userData[message.author.id + message.guild.id].money) userData[message.author.id + message.guild.id].money = 1000; //creates a money obj
  fs.writeFile("./userData.json", JSON.stringify(userData), (err) => {
    if (err) console.error(err);
  })
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();


  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);
  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }

    return message.channel.send(reply);
  }

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }
  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;
  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `Slow down! Gura has ${timeLeft.toFixed(1)} more second(s) left before she can do the \`${ command.name}\` command again.`
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("Gura had a little fucky wucky executing that command!");
  }




});

client.login(process.env.TOKEN);
