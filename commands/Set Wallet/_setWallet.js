/*CMD
  command: /setWallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Set Wallet
  answer: *Please Enter Your Wallet Address.*
  keyboard: 
  aliases: ⚙️set wallet
CMD*/

User.setProperty("wallet", message, "string")
Bot.sendMessage("*✏️☑️ Wallet set To :* " + message + "")
