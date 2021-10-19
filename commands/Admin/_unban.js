/*CMD
  command: /unban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: *Send The User's Telegram ID to Unban*
  keyboard: 
  aliases: 
CMD*/

  if (user.telegramid == message) {
    Bot.sendMessage("Error: 404, User is not found!")
    return
  } else Bot.unblockChat(message)
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

