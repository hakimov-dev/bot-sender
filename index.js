const api = require('./api')

var chat_id = null
var bot_token = null
var message_title = ''

function checkMessage(TOKEN, CHAT, message){
    if(TOKEN !== undefined && TOKEN.length > 0 && CHAT !== undefined && CHAT.length > 0 && message !== undefined && Object.keys(message).length > 0){
        message_title = message.title || ''
        chat_id = CHAT
        bot_token = TOKEN
        delete message.title 
        createMsg(message)
    }else{
        console.error('Added function params!')
    }
};

function createMsg(obj){
    var message = `${message_title} %0A %0A`
    var texts = ``
    for (let i = 0; i < Object.keys(obj).length; i++) {
      const text = ` - ${Object.keys(obj)[i]}: ${Object.values(obj)[i]} %0A`;
      texts += text
    }
    message += texts
    sendMessage(bot_token, chat_id, message)
}

async function sendMessage(TOKEN, CHAT, message){
    try{
      api.get(`bot${TOKEN}/sendMessage?chat_id=${CHAT}}&text=${message}`)
      .then(res => {
          console.log('Message successfully send.')
      })
      .catch(error => {
          console.log(error)
      })
    } catch(error){
      console.log(error)
    }  
}

module.exports = checkMessage