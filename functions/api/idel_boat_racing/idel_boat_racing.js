const express = require("express");
const router = express.Router();
const db = require('./../../connection/connection')

// https://us-central1-international-stylist-b06a9.cloudfunctions.net/idel_boat_racing/android

// Rest get api -- Mobile Back end  
router.get('/:id', (req, res) => {
    (async () => {
        try {
            var dType = req.params.id;
            var resData;
            if (dType.toUpperCase() === "ANDROID") {
                const androidAds = db.collection('idel_boat_racing');
                const androidAdsData = await androidAds.get();
                const dataAndroid = {};
                androidAdsData.forEach(doc => {
                    if (doc.id === "more_app") {
                        dataAndroid[doc.id] = doc.data().more_app
                    } else if (doc.id === "play_game") {
                        dataAndroid[doc.id] = doc.data().play_game
                    } else {
                        dataAndroid[doc.id] = doc.data()
                    }
                });
                resData = {
                    "status": true,
                    "data": dataAndroid
                }
                return res.status(200).send(resData);
            } else {
                resData = {
                    "status": false
                }
                return res.status(200).send(resData);
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// router.get('/', (req, res) => {
//     (async () => {
//         try {

//             var resData;

//             var keyword = {
//                 "privacy": "https://sites.google.com/view/sgroups/privacy-policy",
//                 "version": "2"
//             };
//             var more_app = [
//                 {
//                     "appurl": "https://play.google.com/store/apps/details?id=mount.race.multilevel.car.games.impossibletracks.stunt",
//                     "imageurl": "https://play-lh.googleusercontent.com/Tsau2daTTeZKu2I11h7A7t1rQKY_XjJHGyx-rGpiBE7EzSHkPtNKDFab6-Sw3pgOFg=s0",
//                     "appname": "Car Race",
//                     "active": true
//                 },
//                 {
//                     "imageurl": "https://play-lh.googleusercontent.com/MhO7CCShzXCrhGr42dNdQm49Ha9wTBoJ-ImFKwh_3Z1egY80CEpGnZnD2yhpO_tB6y0=s0",
//                     "appname": "Gift Cards",
//                     "appurl": "https://play.google.com/store/apps/details?id=com.scratchcard.scratchandwin.earnrealreward.shareandwingift",
//                     "active": true
//                 },
//                 {
//                     "appurl": "https://play.google.com/store/apps/details?id=com.freetofire.windiamond.scratchandspin.earnreward",
//                     "imageurl": "https://play-lh.googleusercontent.com/qvzS5CVuc5KZYt66yPhdpIo-sPL_9rupDaGM6b1IjjT8B5tKu6gbrgnfgo9CotbwNZM=s0",
//                     "active": true,
//                     "appname": "Spin wheel"
//                 },
//                 {
//                     "appurl": "https://play.google.com/store/apps/details?id=com.scratchcard.scratchandwin.earnrealreward.shareandwin",
//                     "appname": "Scratch off real reward",
//                     "active": true,
//                     "imageurl": "https://play-lh.googleusercontent.com/d1EQ3PyYYDrJ9Z9qLlxq6VLqXSmyqCrN7SrreVm3ppzi4-gumce6AudpdUbgNrNzEwNP=s0"
//                 },
//                 {
//                     "appurl": "https://play.google.com/store/apps/details?id=vpn.free.fastvpn.bestspeedvpn.vpnspeedfox.pro",
//                     "appname": "VPN",
//                     "imageurl": "https://play-lh.googleusercontent.com/mAy-2jrjZ6bbZpZ29R_K9bFZlPkonMAZ5D2ZBPgyanLDiJCzhYJceu_8ysTJl4yhz1Y=s0",
//                     "active": true
//                 },
//                 {
//                     "appname": "Video Chat",
//                     "active": true,
//                     "imageurl": "https://play-lh.googleusercontent.com/oMVcJkGZkzetx1b2K_HJN9zOyheWCPLIUXMfgYilekssAVMGP-vnCeq48VJG42X6bbI=s0",
//                     "appurl": "https://play.google.com/store/apps/details?id=com.live.chat.bigolive.call.livevideocallwithstranger"
//                 },
//                 {
//                     "imageurl": "https://play-lh.googleusercontent.com/-4AM9t5OLRF71GmOqitbLDFqzvz5u0LU_gM9xsSgAM2RyeKhGoqhMkXzRmBFzuD8VRA=s0",
//                     "active": true,
//                     "appname": "\t Free Scratch off 2021",
//                     "appurl": "https://play.google.com/store/apps/details?id=winscratch.winrewards.scratchandwin.winrealcash.scratchcard"
//                 },
//                 {
//                     "appname": "Win Rewards : scratch off real money",
//                     "imageurl": "https://play-lh.googleusercontent.com/R15CdPv0Ds2zJB5JsCABGj13PA31BOcmc0Gn0dA9bZ-8a7ua4EIeb6DWPng_zccQAutP=s0",
//                     "appurl": "https://play.google.com/store/apps/details?id=realscratchcardwin.winpaytm.lotterywin.winrealmoney.scratch.win.app",
//                     "active": true
//                 },
//                 {
//                     "imageurl": "https://play-lh.googleusercontent.com/bYBQwCtWIO1xrvicdccTcmAdEXeQM4-apWiFbAN0gi1YsMeNSrpz8GoUYwVrgYhfcSE=s0",
//                     "active": true,
//                     "appname": "MPL Rewards Cash Crazy Fruit Slice",
//                     "appurl": "https://play.google.com/store/apps/details?id=com.knife.slice.fruitcut.ninjacut"
//                 },
//                 {
//                     "appurl": "https://play.google.com/store/apps/details?id=com.hdvideoprojector.hdvideoprojectorsimulator.tools.livehdvideoprojector.videoprojectorapp.mobileprojector",
//                     "imageurl": "https://play-lh.googleusercontent.com/wQ0fnsRygQhbGd20kI1OYZ7QZzUzRj5Jg5NzXdkn8sZG0c42gQAww1tQJG8mkOfbkw4H=s0",
//                     "appname": "Wireless HD video mirroring projector",
//                     "active": true
//                 },
//                 {
//                     "appname": "Quiz Games 2021",
//                     "imageurl": "https://play-lh.googleusercontent.com/iXkc9Czj-1G75SmDPkc_I-zNzn2Cp3r9uVdBqCFmgBzHOzepSmEGmbEQuOP9o6F3oJCt=s0",
//                     "active": true,
//                     "appurl": "https://play.google.com/store/apps/details?id=com.aftekgames.quiz2018"
//                 },
//                 {
//                     "active": true,
//                     "appname": "Idle Life Tycoon : Horse Racing Game",
//                     "imageurl": "https://play-lh.googleusercontent.com/Q8eteWvDOFhFW80qUv56XBFZPgyo2t8Cp6SC9H-005ngnqr1BC-_UCOxSg1mya2N_htO=s0",
//                     "appurl": "https://play.google.com/store/apps/details?id=idle.life.tycoon.horse.racing.simulator"
//                 },
//                 {
//                     "appurl": "https://play.google.com/store/apps/details?id=magic.puzzles.jigsaw.free.mount",
//                     "imageurl": "https://play-lh.googleusercontent.com/LX-js0fr4qLy2P9Z7b-9T5NLI-yD661tAZdrGMG1eTg4VOXP-b7nYIdmVcrFr29oWw=s0",
//                     "active": true,
//                     "appname": "Jigsaw free Puzzle games"
//                 },
//                 {
//                     "imageurl": "https://play-lh.googleusercontent.com/7elfBYyZzVBpaAKQSw009NCAPW3xYAnQVD5I0hQ7furuOWDR2NWoPJufxgqN7saSV24=s0",
//                     "appurl": "https://play.google.com/store/apps/details?id=com.aftek.word.connect",
//                     "active": true,
//                     "appname": "Word Streak: Word Games For Free"
//                 }
//             ];
//             var play_game = [
//                 {
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/4.png?alt=media&token=744ebf54-8eaf-42ee-bb2f-d20d62e02e9c",
//                     "active": true,
//                     "appurl": "https://www.gamezop.com/?id=xOlaUznLK"
//                 },
//                 {
//                     "active": true,
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/1GameZop%2F1.jpeg?alt=media&token=6f32549b-7267-42c8-a2ba-9ab706ef52b9",
//                     "appurl": "https://play43.qureka.com/"
//                 }
//             ];

//             await db.collection("idel_boat_racing").doc('ad_id').set({
//                 "admob_native": "ca-app-pub-3940256099942544/2247696110",
//                 "facebook_reward": "YOUR_PLACEMENT_ID",
//                 "facebook_interstitial": "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
//                 "admob_openad": "ca-app-pub-3940256099942544/3419835294",
//                 "ad_type": "admob",
//                 "facebook_banner": "YOUR_PLACEMENT_ID",
//                 "facebook_native": "YOUR_PLACEMENT_ID",
//                 "admob_reward": "ca-app-pub-3940256099942544/5224354917",
//                 "admob_banner": "ca-app-pub-3940256099942544/6300978111",
//                 "admob_interstitial": "ca-app-pub-3940256099942544/1033173712"
//             });
//             await db.collection('idel_boat_racing').doc('keyword').set(keyword);
//             await db.collection('idel_boat_racing').doc('more_app').set({ more_app: more_app });
//             await db.collection('idel_boat_racing').doc('play_game').set({ play_game: play_game });
//             resData = {
//                 "status": true
//             }
//             return res.status(200).send(resData);

//         } catch (error) {
//             console.log(error);
//             return res.status(500).send(error);
//         }
//     })();
// });
module.exports = router;