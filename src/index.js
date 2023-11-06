const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");
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

  if (interaction.commandName === "embed") {
    const embed = new EmbedBuilder()
      .setTitle("Embed Title")
      .setDescription("Embed Description")
      .setColor("Random")
      .addFields([
        {
          name: "Field Title",
          value: "Some value",
          inline: true,
        },
        {
          name: "Field Title",
          value: "Some value",
          inline: true,
        },
      ])
      .setURL("https://github.com/gavutham")
      .setThumbnail(
        "https://www.techopedia.com/wp-content/uploads/2023/03/6e13a6b3-28b6-454a-bef3-92d3d5529007.jpeg"
      )
      .setImage(
        "https://www.techopedia.com/wp-content/uploads/2023/03/6e13a6b3-28b6-454a-bef3-92d3d5529007.jpeg"
      )
      .setTimestamp(new Date())
      .setFooter({
        text: "Footer text",
        iconURL:
          "https://www.techopedia.com/wp-content/uploads/2023/03/6e13a6b3-28b6-454a-bef3-92d3d5529007.jpeg",
      })
      .setAuthor({
        name: "Test Bot",
        iconURL:
          "https://www.techopedia.com/wp-content/uploads/2023/03/6e13a6b3-28b6-454a-bef3-92d3d5529007.jpeg",
      });

    interaction.reply({ embeds: [embed] });
  }
});
