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

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) return;
    await interaction.deferReply({ ephemeral: true });

    const role = interaction.guild.roles.cache.get(interaction.customId);

    if (!role) {
      interaction.editReply({
        content: "The selected role does not exist.",
      });
      return;
    }

    const hasRole = interaction.member.roles.cache.has(role.id);

    if (hasRole) {
      await interaction.member.roles.remove(role.id);
      await interaction.editReply(`The role ${role} has been removed`);
      return;
    } else {
      await interaction.member.roles.add(role.id);
      await interaction.editReply(`The role ${role} has been added`);
    }
  } catch (error) {
    console.log(error);
    return;
  }
});
