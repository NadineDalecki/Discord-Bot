const Discord = require("discord.js");
const Embed = require("../embeds.js")

module.exports = {
    name: "em",
    execute(client, Discord, message, functions, args, set) {
        message.delete().catch(_ => { });
        const adminRoles = set[client.user.username].adminRoles;
        if (message.channel.type == "dm"||
            message.member.roles.cache.some(r => adminRoles.includes(r.id)) ||
            message.member.hasPermission("ADMINISTRATOR")
        ) {
            const embed = Embed[`${args}`](message)
            message.channel.send(embed)
        }
    }
};