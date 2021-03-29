const { MessageEmbed } = require('discord.js')
const data = require('quick.db')

   exports.run = async(client, message, args) => {
    const wasty = await data.fetch(`snipe.id.${message.guild.id}`)
    if(!wasty) {
    const embeds = new MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`Mesaj bulunamadı!`)
.setColor(`RANDOM`)
    message.channel.send(embeds);
          } else {
  let kullanıcı = client.users.cache.get(wasty);
  const silinen = await data.fetch(`snipe.mesaj.${message.guild.id}`)
  const embed = new MessageEmbed()
  .setAuthor(kullanıcı.username, kullanıcı.avatarURL())
  .setDescription(`<a:hydrastarrr:802176913757831198> Silinen mesaj: ` + silinen)
.setColor(`RANDOM`)
  message.channel.send(embed) }
}
exports.conf = {
    enabled:true,
    guildOnly: false,
    aliases: ["snipe"],
    permLevel: 2,
}
exports.help = {
  name: "snipe",
  description: 'Son silinen mesajı yakalar.',
  usage: 'snipe'
} 