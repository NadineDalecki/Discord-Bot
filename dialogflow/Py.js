module.exports = {
  name: "Py",
  execute: async function(client, message, functions, set) {
    const Discord = require("discord.js");
    const answer = await functions.DialogflowQuery(client, message);

    //=========================================================================================================
 message.reply(answer.response);
    //=========================================================================================================
  }
};
