/*CMD
  command: 💲Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var min = Bot.getProperty("min")
var currency = Bot.getProperty("cur")
let balance = Libs.ResourcesLib.userRes("balance")
var wallet = User.getProperty("wallet")
if (wallet == undefined) {
  Bot.sendMessage("_❌ Wallet Not set_")
return
} else 
if (!min) {
  Bot.sendMessage("*Oops! minimum withdraw is Unavailable. As it is not set by Admin.*")
  return
}
  if (balance.value() < min) {
    Bot.sendMessage(
      "_❌ To Withdraw, You have to own at least " +
        min +
        " " +
        currency +
        " in Balance !_"
    )
  } else {
    Bot.sendMessage("*📤 Enter Amount*")
    Bot.runCommand("onVerifiedBalance")
  }


