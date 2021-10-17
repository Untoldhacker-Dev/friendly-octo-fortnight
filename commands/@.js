/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function isAdmin() {
  var admin_chat = Bot.getProperty("admin_chat")
  if (user.telegramid == admin_chat) {
    return true
  }
  return false
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}



