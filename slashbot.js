const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Bot is ready.');
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'slash') {
        await interaction.reply('You used the slash command!');
    }
});

client.login('BOT_TOKEN');
