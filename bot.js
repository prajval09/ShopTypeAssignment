//I like to host my Telegram bot on Render using a free plan, I'll need to adapt it to run as a web service, which requires listening on an HTTP port. 
//Although Telegram bots don't inherently require an HTTP server, I can set up a minimal Express server just to keep the Render service alive.
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bot is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome! Click the link to access the web application: https://shoptypeassignment-1.onrender.com/');
});
