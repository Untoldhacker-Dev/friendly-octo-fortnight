/*CMD
  command: /setup_language
  help: 
  need_reply: 
  auto_retry_time: 
  folder: MultiLang

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var lng = params
Bot.sendMessage(Libs.Lang.t("hello", lng))

