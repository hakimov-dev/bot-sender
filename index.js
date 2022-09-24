const api = require('./api')

function checkMessage(TOKEN, CHAT, message){
    if(TOKEN !== undefined && TOKEN.length && CHAT !== undefined && CHAT.length && message !== undefined && message.length > 0){
       
    }else{
        console.error('Added function params!')
    }
};

module.exports = checkMessage