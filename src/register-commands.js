require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  {
    name: "add",
    description: "Just add two numbers.",
    options: [
      {
        name: "first-number",
        description: "First number to be added.",
        type: ApplicationCommandOptionType.Number,
        choices: [
          {
            name: "One",
            value: 1,
          },
          {
            name: "Tow",
            value: 2,
          },
          {
            name: "Three",
            value: 3,
          },
          {
            name: "Four",
            value: 4,
          },
        ],
        required: true,
      },
      {
        name: "second-number",
        description: "Second number to be added.",
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ],
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
