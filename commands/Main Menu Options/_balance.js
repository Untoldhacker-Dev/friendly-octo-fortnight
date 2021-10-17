/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Main Menu Options
  answer: 
  keyboard: 
  aliases: 💰 balance
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

