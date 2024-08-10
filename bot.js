const TelegramBot = require('node-telegram-bot-api');

// Replace with your actual token
const token = '7341405305:AAHX02Pgqgg1tjK4mn4uKFL_SqPnbf_0srQ';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome! Click the link to access the web application by Prajwal: https://shoptypeassignment-1.onrender.com/');
});

console.log('Bot is running...');
