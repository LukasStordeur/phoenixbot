require("dotenv").config();
const Discord = require("discord.js");

const bot = new Discord.Client();
bot.login(process.env.CLIENT_TOKEN);

bot.on("ready", function(evt) {
  console.log('Bot is connected')
})