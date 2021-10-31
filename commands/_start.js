/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "ADMIN_ID" // field name
})

var bonus = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "refer_commision" // field name
})
if (!admin) {
  Bot.sendMessage("Please /setup the bot first.")
  Bot.runCommand("/setup")
}
if (!bonus) {
  Bot.sendMessage(
    "*You won't get any refer commission as admin didn't set it in panel*"
  )
}
function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balance.add(+bonus)
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    "*🏧 New Referral You Got: <comm> <cur>*"
  )
}

function doAlreadyAttracted() {
  Bot.sendMessage("*You Already Started The Bot ❌*")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
var new_user = Bot.getProperty("new_user")
if (!new_user) {
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(+1)
  Bot.setProperty("new_user", false)
}
Bot.sendKeyboard(
  "💰 Balance,⚙️Set wallet\n👫 Referral,💲Withdraw\n🎁 Daily Bonus,⛽ Stats",
  "*Welcome!*"
)

