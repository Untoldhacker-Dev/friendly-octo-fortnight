/*CMD
  command: withdrawRequest
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

function needMoreAmount() {
  Bot.sendMessage(
    "_❌ Minimum Withdraw " + minimum_withdraw + " " + currency + "_"
  )
  return
}
function needLessAmount() {
  Bot.sendMessage(`❌ Maximum Withdraw ${user.balance} ${currency} `)
  return
}
function isInvalid() {
  Bot.sendMessage("*Incorrect Amount!\nPlease enter positive numbers only*")
  return
}
function sendWithdrawRequest() {
  Bot.sendMessage(
    ` ✅ Withdrawal Sent Successfully\nIt takes some transaction fee\n\n💳 Transaction Details:- \n 💰Amount: ${message} ${currency} \n💼 Wallet:  ${user.wallet} \n\n⏰Wait few hours We Will Check And Pay You \n\n✅ NOTE:❗**\nIf You Do Fake Refer You Will Banned\n\n🌹 Payment Channel : ${channel} `
  )
  user.setBalance(-message)
  Api.sendMessage({
    chat_id: channel,
    text: `🔋 New Withdraw Request 🏦\n\n▪️ Status: Pending\n▪️ User: ${user.link} \n▪️ User ID:  ${user.telegramid} \n▪️ Amount: ${message} ${currency} \n▪️ User Referrals: ${refList.length} \n\n💳 Wallet: \n ${user.wallet} \n\n👮🏻‍♂ Bot : @${bot.name}`,
    parse_mode: "Markdown"
  })
  userPayment.add(+message)
}

var minimum_withdraw = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "minimum_withdraw" // field name
})

var channel = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "withdraw_channel" // field name
})
if (!options.minimum_withdraw) {
  return
}
if (!channel || !channel.startsWith("@")) {
  Bot.sendMessage(
    "*Seems You have incorrect Information set In App's Admin panel!*"
  )
  return
}
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
if (isNaN(message)) {
  isInvalid()
} else if (parseFloat(message) < Math.round(minimum_withdraw)) {
  needMoreAmount()
} else if (parseFloat(message) > user.balance) {
  needLessAmount()
} else sendWithdrawRequest()

