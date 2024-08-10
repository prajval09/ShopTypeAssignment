const TelegramBot = require('node-telegram-bot-api');

// Replace with your actual token
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome! Click the link to access the web application: https://shoptypeassignment-1.onrender.com/');
});

console.log('Bot is running...');
