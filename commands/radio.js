const Discord = require('discord.js');
const config = require('../config.json');
const snekfetch = require("snekfetch")

module.exports = {
    name: "radio",
    aliases: [],
    async execute(client, message, args) {
        if (!message.guild) return;
        let RadioStation = parseInt(args)
        if(!args[0]) return message.channel.send(`Please Provide A Valid Command. For More Info Do : ${config.prefix}help`);

        try 
        {
            if (args == "helpother")
            {

              try {
                let Embed = new Discord.MessageEmbed()
                .setColor(Math.floor(Math.random() * 16777214) + 1)
                .setAuthor(`Other Radio List`, ``, `https://radiobot.live/commands.html#/Other`)
                .addFields(
                  { name: `${config.prefix}radio hits94`, value: '[Hits 94 | hits94.com]' },
                  { name: `${config.prefix}radio heartuk`, value: '[Heart Edinburgh | heart.co.uk/edinburgh]' },
                  { name: `${config.prefix}radio forth1`, value: '[Forth 1 | planetradio.co.uk/forth/]' },
                )
                .setTimestamp()
                .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)        
                message.channel.send(Embed);
              } catch(error){
                console.error(error)
                message.channel.send(`Located an error : ${error}`)
              }
            }

            if (args == "helpau")
            {

              try {
                let Embed = new Discord.MessageEmbed()
                .setColor(Math.floor(Math.random() * 16777214) + 1)
                .setAuthor(`AU Radio List`, ``, `https://radiobot.live/commands.html#/AU`)
                .addFields(
                    { name: `${config.prefix}radio kiis1011`, value: '[KIIS 101.1 | kiis1011.com.au]' },
                    { name: `${config.prefix}radio triplej`, value: '[Triple J | abc.net.au]' },
                    { name: `${config.prefix}radio wsfm`, value: '[WS FM 101.7 | wsfm.com.au]' },
                    { name: `${config.prefix}radio safm`, value: '[SAFM | Unknown]' },
                    { name: `${config.prefix}radio easymix`, value: '[Easy Mix | easymixdigital.com]' },
                    { name: `${config.prefix}radio mix102`, value: '[Mix 102.3 | mix1023.com.au]' },
                    { name: `${config.prefix}radio nova919`, value: '[Nova | novafm.com.au]' },
                )
                .setTimestamp()
                .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)        
                message.channel.send(Embed);
              } catch(error){
                console.error(error)
                message.channel.send(`Located an error : ${error}`)
              }
            }

            if (args == "helpnz")
            {

              try {
                let Embed = new Discord.MessageEmbed()
                .setColor(Math.floor(Math.random() * 16777214) + 1)
                .setAuthor(`NZ Radio List`, ``, `https://radiobot.live/commands.html#/NZ`)
                .addFields(
                    { name: `${config.prefix}radio thebreeze`, value: '[The Breeze | thebreeze.co.nz]' },
                    { name: `${config.prefix}radio maifm`, value: '[Mai FM | maifm.co.nz]' },
                    { name: `${config.prefix}radio theedge`, value: '[The Edge | theedge.co.nz]' },
                    { name: `${config.prefix}radio coastfm`, value: '[The Coast | thecoast.net.nz]' },
                    { name: `${config.prefix}radio lifefm`, value: '[Life FM | lifefm.co.nz]' },
                    { name: `${config.prefix}radio zfm1`, value: '[ZFM | zmonline.com]' },
                    { name: `${config.prefix}radio zfm2`, value: '[ZFM | zmonline.com]' },
                    { name: `${config.prefix}radio thehits`, value: '[The Hits | thehits.co.nz]' },
                    { name: `${config.prefix}radio magicmusic`, value: '[Magic Music | magic.co.nz]' },
                    { name: `${config.prefix}radio morefm`, value: '[More FM Canterbury | morefm.co.nz]' },
                    { name: `${config.prefix}radio therock`, value: '[The Rock | therock.net.nz]' },
                    { name: `${config.prefix}radio thesound`, value: '[The Sound | thesound.co.nz]' },
                )
                .setTimestamp()
                .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)        
                message.channel.send(Embed);
              } catch(error){
                console.error(error)
                message.channel.send(`Located an error : ${error}`)
              }
            }


          if (args == "kiis1011"){
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  kiis1011Player(VoiceConnection)
                });
                snekfetch.get(kiis1011api).then(r => {
                  message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
              } else {
                message.reply("You need to join a voice channel first!");
            }

            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }




          if (args == "triplej"){
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  triplejPlayer(VoiceConnection)
                });
                snekfetch.get(triplejapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
      
            } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }



          if (args == "zfm1"){
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  zfm1Player(VoiceConnection)
                });   
                message.channel.send(`Now Trying to Play Radio Station : ZFM`);
      
            } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "zfm2"){
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  zfm2Player(VoiceConnection)
                });   
                message.channel.send(`Now Trying to Play Radio Station : ZFM`);
      
            } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "nova919"){
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  nova919Player(VoiceConnection)
                }); 
                message.channel.send(`Trying to play music!`);
      
            } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }


          if (args == "thebreeze") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  thebreezePlayer(VoiceConnection)
                });   
                snekfetch.get(thebreezeapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
              } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }


          if (args == "maifm") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  maifmPlayer(VoiceConnection)
                });    
                snekfetch.get(maifmapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
              } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }


          if (args == "hits94") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  hits94Player(VoiceConnection)
                });  
                snekfetch.get(hits94api).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
      
            } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }

          }

          if (args == "theedge") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  theedgePlayer(VoiceConnection)
                }); 
                snekfetch.get(theedgeapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
      
            } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "wsfm") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  wsfmPlayer(VoiceConnection)
                }); 
                snekfetch.get(wsfmapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
              } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "coastfm") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  coastfmPlayer(VoiceConnection)
                }); 
                snekfetch.get(coastfmapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
              } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "lifefm") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  lifefmPlayer(VoiceConnection)
                }); 
                snekfetch.get(lifefmapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
              } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }


          if (args == "thehits") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  thehitsPlayer(VoiceConnection)
                }); 
                snekfetch.get(thehitsapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
      
            } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }


          if (args == "magicmusic") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  magicmusicPlayer(VoiceConnection)
                }); 
                snekfetch.get(magicmusicapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
              } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "morefm") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  morefmPlayer(VoiceConnection)
                }); 
                snekfetch.get(morefmapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
      
            } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }


          if (args == "therock") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  therockPlayer(VoiceConnection)
                }); 
                snekfetch.get(therockapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
      
            } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "thesound") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  thesoundPlayer(VoiceConnection)
                }); 
                snekfetch.get(thesoundapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
      
            } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "safm") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  safmPlayer(VoiceConnection)
                }); 
                snekfetch.get(safmapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
              } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "easymix") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  easymixPlayer(VoiceConnection)
                }); 
                snekfetch.get(easymixapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
      
            } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "mix102") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  mix102Player(VoiceConnection)
                }); 
                snekfetch.get(mix102api).then(r => {
                  message.channel.send(`Now Trying to Play : ${r.body.title || "mix102"} By : ${r.body.artist || "Data Not available"}`);
                });
      
            } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "forth1") {
            try {
                if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  forth1Player(VoiceConnection)
                }); 
                message.channel.send(`Now Trying to Play : Forth 1 FM 97.3`);
      
            } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }


          if (args == "heartuk") {
            try {
              if (message.member.voice.channel) {

                message.member.voice.channel.join().then(VoiceConnection => {
                  heartukPlayer(VoiceConnection)
                }); 
                message.channel.send(`Now Trying to Play : Heart Edinburgh`);
              } else {
              message.reply("You need to join a voice channel first!");
            }
              } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          else if (args == "stop") {
            if (message.member.voice.channel) {
              message.guild.me.voice.channel.leave();
              message.channel.send("Leaving VC!")
            } else {
              message.reply("You need to join a voice channel first!");
            }
          }
        } 
        catch(error)
        {
            console.error('Error:', error);
        }
    }
}

const kiis1011api = "https://feed.tunein.com/profiles/s8880/nowPlaying";
const triplejapi = "https://feed.tunein.com/profiles/s25508/nowPlaying";
const thebreezeapi = "https://feed.tunein.com/profiles/s109680/nowPlaying";
const maifmapi = "https://feed.tunein.com/profiles/s18593/nowPlaying";
const hits94api = "https://feed.tunein.com/profiles/s142771/nowPlaying";
const theedgeapi = "https://feed.tunein.com/profiles/s128419/nowPlaying";
const wsfmapi = "https://feed.tunein.com/profiles/s128419/nowPlaying";
const coastfmapi = "https://feed.tunein.com/profiles/s87185/nowPlaying";
const lifefmapi = "https://feed.tunein.com/profiles/s7983/nowPlaying";
const thehitsapi = "https://feed.tunein.com/profiles/s87086/nowPlaying";
const magicmusicapi = "https://feed.tunein.com/profiles/s246103/nowPlaying";
const morefmapi = "https://feed.tunein.com/profiles/s87235/nowPlaying";
const therockapi = "https://feed.tunein.com/profiles/s99900/nowPlaying";
const thesoundapi = "https://feed.tunein.com/profiles/s128599/nowPlaying";
const safmapi = "https://feed.tunein.com/profiles/s7026/nowPlaying";
const easymixapi = "https://feed.tunein.com/profiles/s256531/nowPlaying";
const mix102api = "https://nz.api.iheart.com/api/v3/live-meta/stream/6184/currentTrackMeta";

function kiis1011Player(vc, list){
    try
    {
      vc.play(`https://ais-arn.streamguys1.com/au_001/playlist.m3u8`).on("finish", () => kiis1011Player(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://ais-arn.streamguys1.com/au_001/playlist.m3u8`).on("finish", () => kiis1011Player(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function triplejPlayer(vc, list){
    try
    {
      vc.play(`https://live-radio01.mediahubaustralia.com/2TJW/mp3/?listening-from-radio-garden=1635329921`).on("finish", () => triplejPlayer(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://live-radio01.mediahubaustralia.com/2TJW/mp3/?listening-from-radio-garden=1635329921`).on("finish", () => triplejPlayer(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function zfm1Player(vc, list){
    try
    {
      vc.play(`http://radio.garden/api/ara/content/listen/CP4KHede/channel.mp3?1635326363366`).on("finish", () => zfm1Player(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`http://radio.garden/api/ara/content/listen/CP4KHede/channel.mp3?1635326363366`).on("finish", () => zfm1Player(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function zfm2Player(vc, list){
    try
    {
      vc.play(`https://radio.garden/api/ara/content/listen/M8y1ggwt/channel.mp3?1635326422330`).on("finish", () => zfm2Player(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://radio.garden/api/ara/content/listen/M8y1ggwt/channel.mp3?1635326422330`).on("finish", () => zfm2Player(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function thebreezePlayer(vc, list){
    try
    {
      vc.play(`https://tunein-icecast.mediaworks.nz/breeze_cantebury_128kbps`).on("finish", () => thebreezePlayer(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://tunein-icecast.mediaworks.nz/breeze_cantebury_128kbps`).on("finish", () => thebreezePlayer(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function maifmPlayer(vc, list){
    try
    {
      vc.play(`https://radio.garden/api/ara/content/listen/FgvMxukC/channel.mp3?1635326474738`).on("finish", () => maifmPlayer(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://radio.garden/api/ara/content/listen/FgvMxukC/channel.mp3?1635326474738`).on("finish", () => maifmPlayer(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function hits94Player(vc, list){
    try
    {
      vc.play(`https://ais-sa5.cdnstream1.com/b14981_128mp3`).on("finish", () => hits94Player(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://ais-sa5.cdnstream1.com/b14981_128mp3`).on("finish", () => hits94Player(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function theedgePlayer(vc, list){
    try
    {
      vc.play(`https://tunein-icecast.mediaworks.nz/edge_128kbps`).on("finish", () => theedgePlayer(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://tunein-icecast.mediaworks.nz/edge_128kbps`).on("finish", () => theedgePlayer(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function wsfmPlayer(vc, list){
    try
    {
      vc.play(`https://ais-arn.streamguys1.com/au_002/playlist.m3u8`).on("finish", () => wsfmPlayer(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://ais-arn.streamguys1.com/au_002/playlist.m3u8`).on("finish", () => wsfmPlayer(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function coastfmPlayer(vc, list){
    try
    {
      vc.play(`https://ais-nzme.streamguys1.com/nz_011_aac`).on("finish", () => coastfmPlayer(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://ais-nzme.streamguys1.com/nz_011_aac`).on("finish", () => coastfmPlayer(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function lifefmPlayer(vc, list){
    try
    {
      vc.play(`https://rhema-radio.streamguys1.com/rhema-lifefm.mp3`).on("finish", () => lifefmPlayer(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://rhema-radio.streamguys1.com/rhema-lifefm.mp3`).on("finish", () => lifefmPlayer(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function thehitsPlayer(vc, list){
    try
    {
      vc.play(`https://ais-nzme.streamguys1.com/nz_007_aac`).on("finish", () => thehitsPlayer(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://ais-nzme.streamguys1.com/nz_007_aac`).on("finish", () => thehitsPlayer(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function magicmusicPlayer(vc, list){
    try
    {
      vc.play(`https://tunein-icecast.mediaworks.nz/magic_128kbps`).on("finish", () => magicmusicPlayer(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://tunein-icecast.mediaworks.nz/magic_128kbps`).on("finish", () => magicmusicPlayer(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function morefmPlayer(vc, list){
    try
    {
      vc.play(`https://tunein-icecast.mediaworks.nz/more_chc_128kbps`).on("finish", () => morefmPlayer(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://tunein-icecast.mediaworks.nz/more_chc_128kbps`).on("finish", () => morefmPlayer(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function therockPlayer(vc, list){
    try
    {
      vc.play(`https://tunein-icecast.mediaworks.nz/rock_128kbps`).on("finish", () => therockPlayer(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://tunein-icecast.mediaworks.nz/rock_128kbps`).on("finish", () => therockPlayer(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function thesoundPlayer(vc, list){
    try
    {
      vc.play(`https://tunein-icecast.mediaworks.nz/sound_128kbps`).on("finish", () => thesoundPlayer(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://tunein-icecast.mediaworks.nz/sound_128kbps`).on("finish", () => thesoundPlayer(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function safmPlayer(vc, list){
    try
    {
      vc.play(`https://ic5ti.scahw.com.au/5sef_128`).on("finish", () => safmPlayer(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://ic5ti.scahw.com.au/5sef_128`).on("finish", () => safmPlayer(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function easymixPlayer(vc, list){

    try
    {
      vc.play(`https://stream.lava.net.au/au_tas_net_easymix`).on("finish", () => easymixPlayer(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://stream.lava.net.au/au_tas_net_easymix`).on("finish", () => easymixPlayer(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }
  
  function mix102Player(vc, list){
    try
    {
      vc.play(`https://ais-arn.streamguys1.com/au_003/playlist.m3u8`).on("finish", () => mix102Player(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://ais-arn.streamguys1.com/au_003/playlist.m3u8`).on("finish", () => mix102Player(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
  }

  function nova919Player(vc, list){
    try
    {
      vc.play(`https://21423.live.streamtheworld.com/NOVA_969_AAC320.aac`).on("finish", () => nova919Player(vc));
    } 
    catch(error)
    {
      console.error(error)
      try
      {
        vc.play(`https://21423.live.streamtheworld.com/NOVA_969_AAC320.aac`).on("finish", () => nova919Player(vc));
      } 
      catch(error)
      {
        console.error(error)
      }
    }
}

function forth1Player(vc, list){
  try
  {
    vc.play(`https://stream-al.planetradio.co.uk/forth1.aac`).on("finish", () => forth1Player(vc));
  } 
  catch(error)
  {
    console.error(error)
    try
    {
      vc.play(`https://stream-al.planetradio.co.uk/forth1.aac`).on("finish", () => forth1Player(vc));
    } 
    catch(error)
    {
      console.error(error)
    }
  }
}


function heartukPlayer(vc, list){
  try
  {
    vc.play(`https://media-ssl.musicradio.com/HeartEdinburgh`).on("finish", () => heartukPlayer(vc));
  } 
  catch(error)
  {
    console.error(error)
    try
    {
      vc.play(`https://media-ssl.musicradio.com/HeartEdinburgh`).on("finish", () => heartukPlayer(vc));
    } 
    catch(error)
    {
      console.error(error)
    }
  }
}