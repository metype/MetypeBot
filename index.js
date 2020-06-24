const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const bot_info = require('./bot_info.json');

const bot = new CommandoClient({
    commandPrefix: bot_info.prefix,
    owner: bot_info.owner,
    disableEveryone: true
});

bot.registry
    .registerDefaultTypes()
    .registerGroups([
        ['general', 'General Commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: false
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));

bot.on('ready', () => {
        console.log('Bot has succesfully started and logged in.');
        bot.user.setActivity('game');
});

bot.login(bot_info.token);