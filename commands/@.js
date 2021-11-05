/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var currency = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "currency" // field name
})
/*
Need define 'balance' for functions
*/
var balance = Libs.ResourcesLib.userRes("balance")
function readUserData() {
  if (!user) {
    return
  }
  user.link = Libs.commonLib.getLinkFor(user)
  user.balance = Libs.ResourcesLib.userRes("balance").value()
  user.wallet = User.getProperty("wallet")
}
readUserData()
var Admin = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "ADMIN_ID" // field name
})
var isAdmin = user && user.telegramid == Admin
if (command.folder == "Admin Panel" && isAdmin) {
  // only admin can run command from Admin Panel's folder
  // any common bjs here for admin
  Bot.sendMessage("Hello, admin!")
} else {
  Bot.sendMessage("Access denied")
  return // exit from command now
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

