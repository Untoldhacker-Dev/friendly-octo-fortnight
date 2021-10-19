/*CMD
  command: /referral
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Main Menu Options
  answer: 
  keyboard: 
  aliases: 👫 referral
CMD*/

var commission = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "refer_commision" // field name
})
if (!commission) {
  Bot.sendMessage("*Oops! Refer commission isn't setupped by admin!*")
  return
}
let reflink = Libs.ReferralLib.currentUser.getRefLink(bot.name)
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
Bot.sendMessage(
  "*⏯️ Total Invites : " +
    refList.length +
    " Users\n\n⛔ Per Referral " +
    commission +
    " " +
    currency +
    "!\n\n🔗 Referral Link ⬇️\n" +
    reflink +
    "*"
)

