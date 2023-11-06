const { Client, IntentsBitField } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.login(process.env.LOGIN_TOKEN);

client.on("ready", (c) => {
  console.log(`This is ${c.user.username}, On your command...`);
});

client.on("messageCreate", (message) => {
  if (message.content === "ping") {
    message.reply("Pong!");
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "hey") {
    interaction.reply("Hey there!");
  }
});
