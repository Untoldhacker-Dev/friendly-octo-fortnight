/*CMD
  command: send-funds-answer
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: *Enter user's Telegram id to send funds to?*
  keyboard: 
  aliases: /send-funds
CMD*/

Bot.run({ command: "onGetIdToSend", options: { tgid: message } })

