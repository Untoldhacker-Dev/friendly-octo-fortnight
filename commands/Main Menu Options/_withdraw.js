/*CMD
  command: /withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Main Menu Options
  answer: 
  keyboard: 
  aliases: 💲withdraw
CMD*/

var min = Bot.getProperty("min")

if (!wallet) {
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


