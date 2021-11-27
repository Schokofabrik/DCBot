const Discord  = require('discord.js');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({intents});


client.on('presenceUpdate', (oldMember,newMember) => {
    // get a reference to all channels in the user's guild
    try{
    if(newMember.userId === '137894185809215488' && newMember.activities[0].name === 'League of Legends'){


    let guildChannels = newMember.guild.channels;

    // find the channel you want, based off the channel name
    guildChannels.cache.get('755787803475968082')
        .send(`<@${newMember.userId}> https://cdn.discordapp.com/attachments/763053037332725790/887079338678321162/League_Player_Sighted1080P_HD.mp4`)
        .catch(console.error)
      }
    }catch(error){
       console.error(error);
    }
});

client.login('');
