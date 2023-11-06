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

  if (interaction.commandName === "add") {
    const a = interaction.options.get("first-number").value;
    const b = interaction.options.get("second-number").value;

    interaction.reply(`For your stupid brain, the sum is ${a + b} 😆`);
  }
});
