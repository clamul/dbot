import slack from 'slack'
 
let bot = slack.rtm.client()
let token = process.env.SLACK_BOT_TOKEN
 
bot.hello(message=> {
  console.log(`Got a message: ${message}`)
  bot.close()
})
 
bot.listen({token})