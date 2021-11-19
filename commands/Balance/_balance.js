/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Balance
  answer: 
  keyboard: 
  aliases: 💰 balance
CMD*/

Bot.sendMessage(
  "*✏️ User : *" +
    user.link +
    "*\n\n💰 Balance : " +
    user.balance +
    " " +
   bot.currency +
    "\n\n⚜️Refer And Earn More*"
)

