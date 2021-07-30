const discord = require('discord')
const client = discord.Client()

module.exports = {
	name: 'ping',
	description: 'Ping!',
	run: async (client, message, args) => {
        const ping = Math.round(client.ping);
        message.channel.send('**Pong!**').then(message => {
            message.edit("**Pong!** Bot Latency : ``" + ping + "ms``")
        })   
	},
};