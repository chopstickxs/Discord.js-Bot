const discord = require('discord')
const client = discord.Client()

module.exports = {
    name: 'date',
    description: 'A discord.js date command example',
    run: async (client, message, args) => {
        const currentDate = new Date();
        message.channel.send(currentDate);
    }
}