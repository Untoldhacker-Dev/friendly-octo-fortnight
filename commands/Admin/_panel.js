/*CMD
  command: /panel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

  var keyboard = [
    [{ title: "✏️ Edit Bonus", command: "/edit-bonus" }],
    [{ title: "✏️Edit Refer Bonus", command: "/edit-refer" }],
    [{ title: "✏️ Edit Minimum Withdraw", command: "/edit-Min.Withdraw" }],
    [{ title: "✏️ Edit Currency", command: "/edit-currency" }],
    [
      { title: "⚠️ Ban", command: "/ban" },
      { title: "⚠️ Unban", command: "/unban" }
    ],
    [{ title: "Add/Remove Funds", command:"/send-funds"}]
  ]
  Bot.sendInlineKeyboard(keyboard, "*Welcome. Admin!*")
}

