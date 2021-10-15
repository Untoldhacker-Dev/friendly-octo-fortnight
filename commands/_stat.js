/*CMD
  command: /stat
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⛽ stats
CMD*/

var status = Libs.ResourcesLib.anotherChatRes("status", "global")
var track = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
Bot.sendMessage("*👥Total Users: "+status.value()+"\n🏦Total Withdrawals: "+track.value()+" <cur> *")
