/*CMD
  command: /bonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Bonus
  answer: 
  keyboard: 
  aliases: 🎁 daily bonus
CMD*/

let bonusCooldown = Libs.ResourcesLib.userRes("bonusCooldown")
var seconds = bonusCooldown.value()

// cooldown conversion in seconds
var bonus_cooldown = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "bonus_cooldown" // field name
})
let totalCooldown = 60 * 60 * Math.round(bonus_cooldown) // 60*60*24 seconds = 24 hours

function resetCooldown() {
  bonusCooldown.set(totalCooldown)
}

function setupCooldown() {
  if (bonusCooldown.growth.isEnabled()) {
    // already setupped
    return
  }

  bonusCooldown.growth.add({
    value: -1, // just add negative value
    interval: 1, // -1 once at 1 sec
    min: 0
  })
}

setupCooldown()

if (bonusCooldown.value() > 0) {
  Bot.sendMessage("Please wait: " + seconds + " seconds.")
  return
}

// can give bonus now
resetCooldown() // need to reset cooldown
var bonus = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "bonus" // field name
})

if (!bonus) {
  Bot.sendMessage(
    "*Oops! Daily Bonus is Unavailable. As it is not set by Admin.*"
  )
  return
}
balance.add(+parseFloat(bonus))
Bot.sendMessage("*🎁 Congrats , You Received +" + bonus + " " + currency + "!*")
// your other code here
//..

