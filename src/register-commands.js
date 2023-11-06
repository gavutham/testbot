require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  {
    name: "embed",
    description: "Just sends an embed.",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.LOGIN_TOKEN);

(async () => {
  console.log("Registering Slash Commands... ^-^");
  try {
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.BOT_ID,
        process.env.SERVER_ID
      ),
      { body: commands }
    );

    console.log("Slash Commands registered successfully! :-)");
  } catch (err) {
    console.log(`Error Occurred ${err}`);
  }
})();
