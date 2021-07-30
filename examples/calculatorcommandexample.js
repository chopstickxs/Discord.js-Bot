const discord = require('discord')
const client = discord.Client()

const math = require('discord-math'); 
module.exports = {    
    name: "calculate",    
    description: "The bot does math for you",    
    run: async (client, message, args) => {        
        try {            
            let num1 = args[0];            
            let operation = args [1];            
            let num2 = args[2];                        
            if (!num1) return message.channel.send('Num1 needs to be specified!');            
            if (!operation) return message.channel.send('An operation was not specified!');            
            if (!num2) return message.channel.send('Num2 needs to be specified!');             
            message.channel.send(`Answer: ${math.calculate(num1, operation, num2)}`);        
        } catch (e) {            
            console.log(e);       
        }    
    }
}