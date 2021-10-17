/*CMD
  command: /edit-currency
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: *Enter the new Currency for bot.*
  keyboard: 
  aliases: 
CMD*/

if(!isAdmin()){return}
Bot.setProperty("cur", message)
Bot.sendMessage("*The Bot's Currency is set To: " + message + "*")

