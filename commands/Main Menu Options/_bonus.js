/*CMD
  command: /bonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Main Menu Options
  answer: 
  keyboard: 
  aliases: 🎁 daily bonus
CMD*/

function canRun() {
  var last_run_at = User.getProperty("last_run_atr")
  if (!last_run_at) {
    return true
  }

  var minutes = (Date.now() - last_run_at) / 1000 / 60

  var minutes_in_day = 24 * 60
  var next = minutes_in_day - minutes
  var wait_hours = Math.floor(next / 60)
  next -= wait_hours * 60
  var wait_minutes = Math.floor(next)
  var seconds = Math.floor((next - wait_minutes) * 60)
  if (minutes < minutes_in_day) {
    Bot.sendMessage(
      "*📛 You have already received a bonus Today\n\n▶️ Come Back After ⏳ " +
        wait_hours +
        " h " +
        wait_minutes +
        " m " +
        seconds +
        " s*"
    )
    return
  }
  return true
}

if (!canRun()) {
  return
}
User.setProperty("last_run_atr", Date.now(), "integer")
var bonus = Bot.getProperty("bonus")
if (!bonus) {
  Bot.sendMessage("*Oops! Daily Bonus is Unavailable. As it is not set by Admin.*")
  return
}
balance.add(+bonus)
Bot.sendMessage("*🎁 Congrats , You Received +" + bonus + " " + currency + "!*")

