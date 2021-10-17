/*CMD
  command: ⚙️ Set wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Please Enter Your Wallet Address.*
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("wallet")
User.setProperty("wallet", message, "string")
Bot.sendMessage("*✏️☑️ Wallet set To :* " + message + "")

