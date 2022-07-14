
// https://us-central1-international-stylist-b06a9.cloudfunctions.net/app  -- Call Rest Api

// https://www.youtube.com/watch?v=dKoQnNylxm8&list=PLJetLDY7yKupm5WTx02ylh1I25rJLPvXe&index=4   -- Reference Api

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');



// International Style - 
const international_app = express();
international_app.use(cors({ origin: true }));
international_app.use('/', require('./api/international-style/internationalstyle'));
const app = functions.https.onRequest(international_app);

// 3D Dress Up
const app_3D_Dress = express();
app_3D_Dress.use(cors({ origin: true }))
app_3D_Dress.use('/', require('./api/3D-dressup/3Ddressup'));
const app3DDressUp = functions.https.onRequest(app_3D_Dress);

// Video app
const video_app = express();
video_app.use(cors({ origin: true }));
video_app.use('/', require('./api/video001/video001'));
const video = functions.https.onRequest(video_app);

// Scratch App - application first
const scratch_app = express();
scratch_app.use(cors({ origin: true }));
scratch_app.use('/', require('./api/scratch001/scratch001'));
const scratch = functions.https.onRequest(scratch_app);

// Scratch App - application second
const scratch02_app = express();
scratch02_app.use(cors({ origin: true }));
scratch02_app.use('/', require('./api/scratch002/scratch002'));
const scratch02 = functions.https.onRequest(scratch02_app);

// Scratch App - application third
const scratch03_app = express();
scratch03_app.use(cors({ origin: true }));
scratch03_app.use('/', require('./api/scratch003/scratch03'));
const scratch03 = functions.https.onRequest(scratch03_app);


// Scratch App - application four
const scratch04_app = express();
scratch04_app.use(cors({ origin: true }));
scratch04_app.use('/', require('./api/scratch004/scratch04'));
const scratch04 = functions.https.onRequest(scratch04_app);

// Scratch App - application five
const scratch05_app = express();
scratch05_app.use(cors({ origin: true }));
scratch05_app.use('/', require('./api/scratch005/scratch05'));
const scratch05 = functions.https.onRequest(scratch05_app);

// Scratch App - application five
const scratch06_app = express();
scratch06_app.use(cors({ origin: true }));
scratch06_app.use('/', require('./api/scratch006/scratch06'));
const scratch06 = functions.https.onRequest(scratch06_app);


// VPN App - application One
const vpn001_app = express();
vpn001_app.use(cors({ origin: true }));
vpn001_app.use('/', require('./api/vpn001/vpn001'));
const vpn01 = functions.https.onRequest(vpn001_app);


// Girls Go Games App 
const girlsgogame_app = express();
girlsgogame_app.use(cors({ origin: true }));
girlsgogame_app.use('/', require('./api/girls-go-game/girlsgogame'));
const girlsgogame = functions.https.onRequest(girlsgogame_app);


// Dating Games App 
const dating_app = express();
dating_app.use(cors({ origin: true }));
dating_app.use('/', require('./api/dating/dating'));
const dating = functions.https.onRequest(dating_app);

// Full Screen Whatsapp Games App 
const full_screen_whatsup_app = express();
full_screen_whatsup_app.use(cors({ origin: true }));
full_screen_whatsup_app.use('/', require('./api/full_screen_whatsapp_status/full_screen_whatsapp_status'));
const full_screen_whatsup_status = functions.https.onRequest(full_screen_whatsup_app);

// Fast Recharge App 
const fast_recharge_app = express();
fast_recharge_app.use(cors({ origin: true }));
fast_recharge_app.use('/', require('./api/fastrecharge001/fastrecharge'));
const fastrecharge01 = functions.https.onRequest(fast_recharge_app);


// True Caller App 
const true_caller_app = express();
true_caller_app.use(cors({ origin: true }));
true_caller_app.use('/', require('./api/truecaller/truecaller'));
const true_caller = functions.https.onRequest(true_caller_app);


// Oxygen App 
const oxygen_app = express();
oxygen_app.use(cors({ origin: true }));
oxygen_app.use('/', require('./api/oxygen/oxygen'));
const oxygen = functions.https.onRequest(oxygen_app);



// SimInfo App 
const siminfo_app = express();
siminfo_app.use(cors({ origin: true }));
siminfo_app.use('/', require('./api/siminfo/siminfo'));
const siminfo = functions.https.onRequest(siminfo_app);

// SimInfo App 
const siminfo001_app = express();
siminfo001_app.use(cors({ origin: true }));
siminfo001_app.use('/', require('./api/siminfo001/siminfo01'));
const siminfo01 = functions.https.onRequest(siminfo001_app);


// SimInfo App 
const siminfo002_app = express();
siminfo002_app.use(cors({ origin: true }));
siminfo002_app.use('/', require('./api/siminfo002/siminfo02'));
const siminfo02 = functions.https.onRequest(siminfo002_app);

// SimInfo App 
const siminfo003_app = express();
siminfo003_app.use(cors({ origin: true }));
siminfo003_app.use('/', require('./api/siminfo003/siminfo03'));
const siminfo03 = functions.https.onRequest(siminfo003_app);

// SimInfo App 
const siminfo004_app = express();
siminfo004_app.use(cors({ origin: true }));
siminfo004_app.use('/', require('./api/siminfo004/siminfo04'));
const siminfo04 = functions.https.onRequest(siminfo004_app);


// SimInfo App 
const siminfo005_app = express();
siminfo005_app.use(cors({ origin: true }));
siminfo005_app.use('/', require('./api/siminfo005/siminfo05'));
const siminfo05 = functions.https.onRequest(siminfo005_app);


// Video Projector App 
const videoprojector_app = express();
videoprojector_app.use(cors({ origin: true }));
videoprojector_app.use('/', require('./api/videoprojector/videoprojector'));
const videoprojector = functions.https.onRequest(videoprojector_app);


// Video call
const videocall_app = express();
videocall_app.use(cors({ origin: true }));
videocall_app.use('/', require('./api/videocall/videocall'));
const videocall = functions.https.onRequest(videocall_app);


// Video call 001
const videocall002_app = express();
videocall002_app.use(cors({ origin: true }));
videocall002_app.use('/', require('./api/videocall002/videocall002'));
const videocall01 = functions.https.onRequest(videocall002_app);

// Video call 001
const ringtone_app = express();
ringtone_app.use(cors({ origin: true }));
ringtone_app.use('/', require('./api/ringtone/ringtone'));
const ringtone = functions.https.onRequest(ringtone_app);


// Free fire 001
const firefire_app = express();
firefire_app.use(cors({ origin: true }));
firefire_app.use('/', require('./api/freefire/freefire'));
const firefire01 = functions.https.onRequest(firefire_app);

// Free fire 002
const firefire002_app = express();
firefire002_app.use(cors({ origin: true }));
firefire002_app.use('/', require('./api/freefire02/freefire02'));
const firefire02 = functions.https.onRequest(firefire002_app);


// Free fire 003
const firefire003_app = express();
firefire003_app.use(cors({ origin: true }));
firefire003_app.use('/', require('./api/freefire03/freefire03'));
const firefire03 = functions.https.onRequest(firefire003_app);


// Winzo 001
const winzo001_app = express();
winzo001_app.use(cors({ origin: true }));
winzo001_app.use('/', require('./api/winzo001/winzo001'));
const winzo01 = functions.https.onRequest(winzo001_app);

// free dimaond
const freediamond001_app = express();
freediamond001_app.use(cors({ origin: true }));
freediamond001_app.use('/', require('./api/freediamond01/freediamond01'));
const freediamond01 = functions.https.onRequest(freediamond001_app);

// woombo
const woombo001_app = express();
woombo001_app.use(cors({ origin: true }));
woombo001_app.use('/', require('./api/woombo001/woombo01'));
const woombo01 = functions.https.onRequest(woombo001_app);

// star plus
const starplus001_app = express();
starplus001_app.use(cors({ origin: true }));
starplus001_app.use('/', require('./api/startplus001/startplus01'));
const starplus01 = functions.https.onRequest(starplus001_app);


// wallpaper
const wallpaper001_app = express();
wallpaper001_app.use(cors({ origin: true }));
wallpaper001_app.use('/', require('./api/wallpaper/wallpaper'));
const wallpaper01 = functions.https.onRequest(wallpaper001_app);

// heels
const heels001_app = express();
heels001_app.use(cors({ origin: true }));
heels001_app.use('/', require('./api/heels/heels'));
const heels01 = functions.https.onRequest(heels001_app);


// doctor
const doctor001_app = express();
doctor001_app.use(cors({ origin: true }));
doctor001_app.use('/', require('./api/doctor/doctor'));
const doctor01 = functions.https.onRequest(doctor001_app);


// test
const test001_app = express();
test001_app.use(cors({ origin: true }));
test001_app.use('/', require('./api/test/test'));
const test01 = functions.https.onRequest(test001_app);


// Match Party
const MatchParty_app = express();
MatchParty_app.use(cors({ origin: true }));
MatchParty_app.use('/', require('./api/matchparty/matchparty'));
const MatchParty = functions.https.onRequest(MatchParty_app);


// test
const idel_boat_racing_app = express();
idel_boat_racing_app.use(cors({ origin: true }));
idel_boat_racing_app.use('/', require('./api/idel_boat_racing/idel_boat_racing'));
const idel_boat_racing = functions.https.onRequest(idel_boat_racing_app);



module.exports = { app, app3DDressUp, video, scratch, scratch02, scratch03, scratch04, scratch05, scratch06, vpn01,
     girlsgogame, dating, full_screen_whatsup_status, fastrecharge01, true_caller, oxygen, siminfo, 
     videoprojector, videocall, videocall01, ringtone, firefire01, firefire02, firefire03, winzo01,
      freediamond01, woombo01, starplus01, siminfo01, siminfo02, siminfo03, siminfo04, siminfo05, heels01, doctor01,
      wallpaper01, MatchParty, idel_boat_racing, test01 };