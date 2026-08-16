const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'LungCraft.aternos.me',
  username: 'AternosBot'
});

bot.on('spawn', () => {
  console.log("Bot joined the server successfully!");
});

bot.on('end', () => {
  console.log("Bot disconnected, trying to reconnect...");
  setTimeout(() => process.exit(0), 5000);
});
