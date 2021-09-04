const { Client } = require('discord.js');
const cron = require('node-cron');

const getCurrentTime = () => {
  var currentdate = new Date(); 
  var datetime = "Last Sync: " + currentdate.getDate() + "/"
                               + (currentdate.getMonth()+1)  + "/" 
                               + currentdate.getFullYear() + " @ "  
                               + currentdate.getHours() + ":"  
                               + currentdate.getMinutes() + ":" 
                               + currentdate.getSeconds();
  return datetime;
}

const client = new Client({
  partials: ['MESSAGE', 'REACTION', 'CHANNEL']
});

const PREFIX = "$";

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
});
client.login(process.env.DISCORDJS_BOT_TOKEN).then(async () => {
  const channel = await client.channels.fetch('883775161478832169');
  channel.send(`${getCurrentTime()} Process started`);
});

let count = 0;
let count1 = 0;
let flag = true;
let flag1 = true;

cron.schedule('50-59 9 * * 0,1,5,6', async () => {
  if(flag) {
    var currentdate = getCurrentTime();
    console.log("At each minute between 50-59 of the hours 9:00 on Sun, Mon, Fri, and Sat");
    count ++;
    if(count > 5)
      flag = flase;
    const channel = await client.channels.fetch('883775161478832169');
    channel.send(`\`\`\`${currentdate} \nAt each minute between 50-59 of the hours 9:00 on Sun, Mon, Fri, and Sat\`\`\``);
  }
  else {
    const channel = await client.channels.fetch('883775161478832169');
    channel.send(`${getCurrentTime()} Didn't run`);
  }
});

cron.schedule('0-10 10 * * 0,1,5,6', async () => {
  if(flag1) {
    var currentdate = getCurrentTime();
    console.log("At each minute between 00-10 of the hours 10:00 on Sun, Mon, Fri, and Sat");
    count1 ++;
    if(count1 > 5)
      flag = flase;
    const channel = await client.channels.fetch('883775161478832169');
    channel.send(`\`\`\`${currentdate} \nAt each minute between 00-10 of the hours 10:00 on Sun, Mon, Fri, and Sat\`\`\``);
  }
  else {
    const channel = await client.channels.fetch('883775161478832169');
    channel.send(`${getCurrentTime()} Didn't run`);
  }
});
