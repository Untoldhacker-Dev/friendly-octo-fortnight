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

  var admin_chat = Bot.getProperty("admin_chat")
  if ( command.folder == "Admin" && admin_chat =! user.telegramid ){
    return 
  }

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}



