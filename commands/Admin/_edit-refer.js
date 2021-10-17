/*CMD
  command: /edit-refer
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: *Enter the amount of Refer commission to set.*
  keyboard: 
  aliases: 
CMD*/

if(!isAdmin()){return}
let value = message

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })

  return
} else Bot.setProperty("comm", message)
Bot.sendMessage("*Referrals Comission Set to " + message + "*")

