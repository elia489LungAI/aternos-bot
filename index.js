const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'LungCraft.aternos.me',
  port: 57104,
  username: 'AternosBot'
});

bot.on('spawn', () => {
  console.log("Bot joined and ready!");
  
  // Move forward and backward every 1 second
  setInterval(() => {
    bot.setControlState('forward', true);
    setTimeout(() => {
      bot.setControlState('forward', false);
      bot.setControlState('back', true);
      setTimeout(() => bot.setControlState('back', false), 300);
    }, 300);
    
    // Jump and look around to prevent AFK
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 200);
    bot.look(bot.entity.yaw + 1.5, 0);
  }, 1000);
});

bot.on('end', () => {
  console.log("Bot disconnected, reconnecting in 5 seconds...");
  setTimeout(() => process.exit(0), 5000);
});

bot.on('error', (err) => console.log(err));
