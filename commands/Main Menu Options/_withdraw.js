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

var minimum_withdraw = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "minimum_withdraw" // field name
})

if (!wallet) {
  Bot.sendMessage("_❌ Wallet Not set_")
  return
} else if (!minimum_withdraw) {
  Bot.sendMessage(
    "*Oops! minimum withdraw is Unavailable. As it is not set by Admin.*"
  )
  return
}
if (balance.value() < minimum_withdraw) {
  Bot.sendMessage(
    "_❌ To Withdraw, You have to own at least " +
      minimum_withdraw +
      " " +
      currency +
      " in Balance !_"
  )
} else {
  Bot.sendMessage("*📤 Enter Amount*")
  var options = {authorised:true} //We need this just to make sure the sequence /withdraw > onVerifiedBalance
  Bot.run(command: "onVerifiedBalance",options)
}

