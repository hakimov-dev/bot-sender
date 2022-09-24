const api = require('./api')

async function senMessage(TOKEN, CHAT, message){
  try{
    if(TOKEN !== undefined && TOKEN.length && CHAT !== undefined && CHAT.length && message !== undefined && message.length > 0){
        api.get(`bot${TOKEN}/sendMessage?chat_id=${CHAT}}&text=${message}`)
        .then(res => {
            console.log('Message successfully send.')
        })
        .catch(error => {
            console.log(error)
        })
    }else{
        console.error('Added function params!')
    }
  }catch(error){
    console.log(error)
  }
}

module.exports = senMessage