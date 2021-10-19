/*CMD
  command: /ban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: *Send the user's Telegram ID to ban?*
  keyboard: 
  aliases: 
CMD*/
if (user.telegramid == message) {
  Bot.sendMessage("Error: 404, User is not found!")
  return
} else Bot.blockChat(message)
Bot.sendMessage(
  "Successfully banned: " +
    "[" +
    "User" +
    "]" +
    "(" +
    "tg://user?id=" +
    message +
    ")"
)

