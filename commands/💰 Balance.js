/*CMD
  command: 💰 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var currency = Bot.getProperty("cur")
Bot.sendMessage(
  "*✏️ User : " +
    user.first_name +
    "\n\n💰 Balance : " +
    balance.value() +
    " " +
    currency +
    "\n\n⚜️Refer And Earn More*"
)

