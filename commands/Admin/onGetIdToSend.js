/*CMD
  command: onGetIdToSend
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin

  <<ANSWER
*Enter the amount to add?*

_Tip: You can add minus sign before the number to deduct the amount from user's balance_
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let amount = parseFloat(message)
let value = message
let tgid = User.getProperty("id")
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid)

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })

  return
} else res.add(parseFloat(amount))
Bot.sendMessage(
  "*The amount " +
    amount +
    " has been added to the User ID: * " +
    tgid +
    " * balance*"
)
Bot.sendMessageToChatWithId(
  tgid,
  "*🎁 You have just received +" + amount + " from admin.*"
)

