const Discord = require('discord.js');
const { EventEmitter } = require('events');
const { CommandHandler } = require('./CommandHandler');

class Bot {
    static on = EventEmitter.prototype.on;
    static emit = EventEmitter.prototype.emit;
    static off = EventEmitter.prototype.off;
    static once = EventEmitter.prototype.once;

    static start() {
        this.client = new Discord.Client({
            intents: [
                'GuildMembers',
                'GuildMessages',
                'Guilds'
            ]
        });

        this.client.login(process.env.DISCORD_TOKEN);

        this.#bindEventListeners();
    }

    static #bindEventListeners() {
        this.client.on('ready', () => {
            console.log(`Online`);
        });

        this.client.on('error', err => {
            console.error(err);
        });

        this.client.on('messageCreate', message => {
            CommandHandler.handle(message);
        });
    }
}

module.exports = {
    Bot
}
