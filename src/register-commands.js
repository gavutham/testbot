require("dotenv").config();
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "hey",
    description: "Replies with hey!",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.LOGIN_TOKEN);

(async () => {
  console.log("Registering Slash Commands");
  try {
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.BOT_ID,
        process.env.SERVER_ID
      ),
      { body: commands }
    );

    console.log("Done registering Slash Commands");
  } catch (err) {
    console.log(`Error Occurred ${err}`);
  }
})();
