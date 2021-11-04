//the first thing you need to do is make sure you have Node v16.6.0 or higher
//you can chack it by running this command: node -v
//install dicord.js first use this command: npm install discord.js
//this must be done in the folder you want to make your bot
//after this can you make a file call it whatever you want.
//exable index.js
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES']});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

//message no longer works so use messageCreate
client.on('messageCreate', msg => {
    console.log(msg);
    if(msg.content === "ping"){
        msg.reply("pong!!!");
    }
})

client.login("your-bot-token");