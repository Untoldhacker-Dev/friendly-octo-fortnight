/*CMD
  command: /send-funds
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Enter user's Telegram id to send funds to?*
  keyboard: 
  aliases: 
CMD*/

if(!isAdmin()){return}
var msg = message
var options = {tgid: message}
User.setProperty("id", msg)
Bot.run({command:"onGetIdToSend",options})

