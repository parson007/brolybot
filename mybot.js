const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("pls broly")) {
    message.channel.send("https://cdn.discordapp.com/attachments/233062001272815627/498375429690884097/1536828344056s.png");
  }
  if (message.content.startsWith("pls brloy")) {
    message.channel.send("Learn to spell you fucking retard");
  }
});
 
client.login("NTY0OTcyOTk5MjE2ODU3MDg4.XKwEoQ.v-1cc-Gl-jvxULodLfWygfQZ9ak");
