const Discord = require('discord.js');
const rdb = require('quick.db');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args) => {

 
if(!["789194951979565114"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
  return message.channel.send(`Bu komutu kullanabilmek için ayarlanan kayıt yetkisine sahip olmalısınız!`).then(x => x.delete({timeout: 5000}));
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!member) return message.channel.send('<a:hydrahayr:816551461219205160> **Bir üye etiketlemelisin. **<a:hydrahayr:816551461219205160>').then(x => x.delete({timeout: 5000}));
 member.roles.add(ayarlar.partner)
  let embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`<a:hydratik:816899911126745118> **${member} kişisine partner rolü verildi**`)
  .setTimestamp()
message.channel.send(embed).then(x => x.delete({timeout: 50000}));
} 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['partner'],
  permLevel: 0
}
exports.help = {
  name: 'partner',
  description: "Belirtilen üyeye partner rolü verir",
  usage: 'partner @kişi'
}