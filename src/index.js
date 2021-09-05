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

const channel;
(async () => {
  const channel = await client.channels.fetch('883775161478832169');
});

let countPre = 0;
let countPost = 0;
let flagPre = true;
let flagPost = true;

cron.schedule('50-59 9 * * 0,1,5,6', async () => {
  if(flagPre) {
    var currentdate = getCurrentTime();
    console.log("At each minute between 50-59 of the hours 9:00 on Sun, Mon, Fri, and Sat");
    countPre ++;
    if(countPre > 5)
      flagPre = flase;
    channel.send(`\`\`\`${currentdate} \nAt each minute between 50-59 of the hours 9:00 on Sun, Mon, Fri, and Sat\`\`\``);
  }
  else {
    channel.send(`${getCurrentTime()} Didn't run`);
  }
});

cron.schedule('0-10 10 * * 0,1,5,6', async () => {
  if(flagPost) {
    var currentdate = getCurrentTime();
    console.log("At each minute between 00-10 of the hours 10:00 on Sun, Mon, Fri, and Sat");
    countPost ++;
    if(countPost > 5)
      flagPost = flase;
    channel.send(`\`\`\`${currentdate} \nAt each minute between 00-10 of the hours 10:00 on Sun, Mon, Fri, and Sat\`\`\``);
  }
  else {
    channel.send(`${getCurrentTime()} Didn't run`);
  }
});

let c1 = 0;
let f1 = true;
cron.schedule('* * * * *', async () => {
  if(f1) {
    var currentdate = getCurrentTime();
    console.log("At each minute between 00-10 of the hours 10:00 on Sun, Mon, Fri, and Sat");
    c1 ++;
    if(c1 > 5)
      f1 = flase;
    channel.send(`\`\`\`${currentdate} \nAt each minute between 00-10 of the hours 10:00 on Sun, Mon, Fri, and Sat\`\`\``);
  }
  else {
    channel.send(`${getCurrentTime()} Didn't run`);
  }
});
