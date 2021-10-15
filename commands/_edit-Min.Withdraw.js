/*CMD
  command: /edit-Min.Withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Enter the amount of minimum withdraw to set.*
  keyboard: 
  aliases: 
CMD*/

if(!isAdmin()){return}
let value = message
let tgid = User.getProperty("id")

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })

  return
} else Bot.setProperty("min", message)
Bot.sendMessage("*Minimum Withdraw set to: " + message + "*")

