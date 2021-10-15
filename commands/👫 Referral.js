/*CMD
  command: 👫 Referral
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var comm = Bot.getProperty("comm")
var currency = Bot.getProperty("cur")
let reflink = Libs.ReferralLib.currentUser.getRefLink(bot.name)
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
Bot.sendMessage(
  "*⏯️ Total Invites : " +
    refList.length +
    " Users\n\n⛔ Per Referral " +
    comm +
    " " +
    currency +
    "!\n\n🔗 Referral Link ⬇️\n" +
    reflink +
    "*"
)

