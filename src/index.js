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
let channel;
client.login(process.env.DISCORDJS_BOT_TOKEN).then(async () => {
  channel = await client.channels.fetch('883775161478832169');
  channel.send(`${getCurrentTime()} Process started`);
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
      flagPre = false;
    channel.send(`\`\`\`${currentdate} \nAt each minute between 50-59 of the hours 9:00 on Sun, Mon, Fri, and Sat\ncount:${countPre}\`\`\``);
  }
  else {
    channel.send(`${getCurrentTime()} Didn't run, count:${countPre}`);
  }
});

cron.schedule('0-10 10 * * 0,1,5,6', async () => {
  if(flagPost) {
    var currentdate = getCurrentTime();
    console.log("At each minute between 00-10 of the hours 10:00 on Sun, Mon, Fri, and Sat");
    countPost ++;
    if(countPost > 5)
      flagPost = false;
    channel.send(`\`\`\`${currentdate} \nAt each minute between 00-10 of the hours 10:00 on Sun, Mon, Fri, and Sat\ncount:${countPre}\`\`\``);
  }
  else {
    channel.send(`${getCurrentTime()} Didn't run, count:${countPre}`);
  }
});

cron.schedule('0 11 * * 0,1,5,6', async () => {
  var currentdate = getCurrentTime();
  console.log(`Reset counts and flags at ${currentdate}`)
  channel.send(`Reset counts and flags at ${currentdate}`);
  countPre = 0;
  countPost = 0;
  flagPre = true;
  flagPost = true;
});

cron.schedule('0 12 * * 0,1,5,6', async () => {
  var currentdate = getCurrentTime();
  console.log(`Reset counts and flags at ${currentdate}`)
  channel.send(`Reset counts and flags at ${currentdate}`);
  countPre = 0;
  countPost = 0;
  flagPre = true;
  flagPost = true;
});

cron.schedule('0 13 * * 0,1,5,6', async () => {
  var currentdate = getCurrentTime();
  console.log(`Reset counts and flags at ${currentdate}`)
  channel.send(`Reset counts and flags at ${currentdate}`);
  countPre = 0;
  countPost = 0;
  flagPre = true;
  flagPost = true;
});
