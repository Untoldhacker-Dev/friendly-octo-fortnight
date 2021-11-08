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

function onEnding(time) {
    // can give bonus now
    Bot.sendMessage("You have bonus now");
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
    Bot.sendMessage("*🎁 Congrats , You Received +" + bonus + " " + bot.currency + "!*")
    // your other code here
    //..


    return true; // if false - cooldown is not restarted
}

function onWaiting(waitTime) {
    // we have active cooldown
    Bot.sendMessage("Please wait: " + waitTime + " secs");
}

Libs.CooldownLib.chat.watch({
    // you need name for cooldown
    name: "GemBonusCooldown",
    time: 120, // cooldown time, 120 secs - 2 minute
    onEnding: onEnding,
    onWaiting: onWaiting
})

// get current cooldown res for chat
let cooldown = Libs.CooldownLib.chat.getCooldown("GemBonusCooldown");

// for user:
// let cooldown = Libs.CooldownLib.user.getCooldown("GemBonusCooldown");

cooldown.value(); // current cooldown in second
cooldown.set(60 + cooldown.value()) // add 60 sec to cooldown
