const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); // For securely storing the token in a .env file

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'routine') {
        await interaction.reply('Here is your stored routine!');
    } else if (commandName === 'deadline') {
        await interaction.reply('Your deadlines are...');
    }
});

client.login(process.env.BOT_TOKEN);
