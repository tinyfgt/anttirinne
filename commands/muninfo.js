const Discord = require ('discord.js')
const moment = require ('moment')

module.exports = {
	name: 'muninfo',
	description: 'Ping!',
	execute(message, args) {
        let kanava = message.author
        let member = message.member
        moment.locale('fi')
        let embed = new Discord.MessageEmbed()
        .setTitle(`${kanava.username} Tiedot:`)
        .addField('Nimi Ja Numero Tägi:', member.user.tag)
        .addField('ID:', kanava.id)
        .addField('Tehty:', ` ${moment(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true)
        message.channel.send(embed)
	},
};