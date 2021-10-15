/*CMD
  command: /unban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send The User's Telegram ID to Unban*
  keyboard: 
  aliases: 
CMD*/

if (!isAdmin()) {
  if (user.telegramid == message) {
    Bot.sendMessage("Error: 404, User is not found!")
    return
  } else Bot.setProperty(message + "ban", false)
  Bot.sendMessage(
    "Successfully unbanned: " +
      "[" +
      "User" +
      "]" +
      "(" +
      "tg://user?id=" +
      message +
      ")"
  )
}

