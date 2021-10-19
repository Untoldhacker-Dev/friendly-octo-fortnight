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
var balance = Libs.ResourcesLib.userRes("balance")
var wallet = User.getProperty("wallet")
var Admin = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "ADMIN_ID" // field name
})
if (command.folder == "Admin" && user.telegramid != Admin) {
  return
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

