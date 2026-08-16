const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'LungCraft.aternos.me',
  port: 57104,
  username: 'AI.Bot'
});

bot.on('spawn', () => {
  console.log("Bot joined and ready!");
  
  // Jump and look around every 0.3 seconds
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
    bot.look(bot.entity.yaw + 1.5, 0);
  }, 0300);
});

bot.on('end', () => {
  console.log("Bot disconnected, reconnecting in 0.3 seconds...");
  setTimeout(() => process.exit(0), 0300);
});

bot.on('error', (err) => console.log(err));
