class Command {
    constructor(id, aliases, usage, description, minArgs, minRank, visible) {
        this.id = id;
        this.aliases = aliases;
        this.usage = usage;
        this.description = description;
        this.minArgs = minArgs || 0;
        this.minRank = minRank || 0;
        this.visible = visible || false;
    }
}

class Prefix {
    /**
     * Prefix
     * @param {string} id ID of prefix
     * @param {string} p Prefix
     * @param {string} type Type of prefix (connected, word)
     */
    constructor(id, p, type) {
        this.id = id;
        this.p = p;
        this.type = type;
    }
}

class CommandHandler {
    static commands = new Map();
    static prefixes = new Map();

    static handle(msg) {
        //? starts with prefix?
        //? also check for slash command?

        for (let [key, val] of this.commands) {
            
        }
    }
}

module.exports = {
    CommandHandler,
    Command
}
