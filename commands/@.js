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
function readUserData() {
  if (!user) {
    return
  }
  user.link = Libs.commonLib.getLinkFor(user)
  user.balance = Libs.ResourcesLib.userRes("balance").value()
  user.wallet = User.getProperty("wallet")
  user.setBalance = function(amount) {
    Libs.ResourcesLib.userRes("balance").add(amount)
  }
}
readUserData()
var Admin = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "ADMIN_ID" // field name
})
if (command.folder == "Admin" && user.telegramid != Admin) {
  // only admin can run command from Admin Panel's folder
  // any common bjs here for admin
  return
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

