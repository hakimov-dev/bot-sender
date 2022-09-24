const { api } = require('./api')

async function senMessage(TOKEN, CHAT, message){
  try{
    if(TOKEN !== undefined && TOKEN.length && CHAT !== undefined && CHAT.length && message !== undefined && message.length > 0){
        console.log('Succes!')
    }else{
        console.error('Added function params!')
    }
  }catch(error){
    console.log(error)
  }
}

module.exports = senMessage