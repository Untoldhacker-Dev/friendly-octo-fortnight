/*CMD
  command: /withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 💲withdraw
CMD*/

var minimum_withdraw = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "minimum_withdraw" // field name
})

if (!user.wallet) {
  Bot.sendMessage("_❌ Wallet Not set_")
  return
} else if (!minimum_withdraw) {
  Bot.sendMessage(
    "*Oops! minimum withdraw is Unavailable. As it is not set by Admin.*"
  )
  return
}
if (user.balance < minimum_withdraw) {
  Bot.sendMessage(
    "_❌ To Withdraw, You have to own at least " +
      minimum_withdraw +
      " " +
      bot.currency +
      " in Balance !_"
  )
} else {
  Bot.sendMessage("*📤 Enter Amount*")
  var options = { minimum_withdraw: 1 } //We need this just to make sure the sequence /withdraw > onVerifiedBalance
  Bot.run({ command: "withdrawRequest", options })
}

