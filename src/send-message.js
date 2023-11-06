const {
  Client,
  IntentsBitField,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const roles = [
  {
    id: "1171065404035190806",
    label: "Blue",
  },
  {
    id: "1171065587871535134",
    label: "Green",
  },
  {
    id: "1171065624361971732",
    label: "Red",
  },
];

client.login(process.env.LOGIN_TOKEN);

client.on("ready", async (c) => {
  console.log(`This is ${c.user.username}, On your command...`);

  try {
    const channel = client.channels.cache.get("1171030992123871254");
    // console.log(channel);
    if (!channel) return;

    const row = new ActionRowBuilder();

    roles.forEach((role) => {
      row.components.push(
        new ButtonBuilder()
          .setCustomId(role.id)
          .setLabel(role.label)
          .setStyle(ButtonStyle.Primary)
      );
    });

    console.log("Sending message...");

    await channel.send({ content: "Claim Your Role", components: [row] });
    process.exit();
  } catch (error) {
    console.log(error);
  }
});
