const express = require("express");
const router = express.Router();
const db = require('./../../connection/connection')

// Rest get api -- Mobile Back end  
router.get('/:id', (req, res) => {
    (async () => {
        try {
            var dType = req.params.id;
            var resData;
            if (dType.toUpperCase() === "ANDROID") {
                const androidAds = db.collection('winzo01');
                const androidAdsData = await androidAds.get();
                const dataAndroid = {};
                androidAdsData.forEach(doc => {
                    if (doc.id === "more_app") {
                        dataAndroid[doc.id] = doc.data().more_app
                    } else if (doc.id === "play_game") {
                        dataAndroid[doc.id] = doc.data().play_game
                    } else {
                        dataAndroid[doc.id] = doc.data();
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
//                 "version": "1.0",
//                 "ad_priority": "admob",
//                 "privacy": "https://sites.google.com/view/sgroups/privacy-policy"
//             };
//             var more_app = [{
//                 "appurl": "https://play.google.com/store/apps/details?id=mount.race.multilevel.car.games.impossibletracks.stunt",
//                 "imageurl": "https://play-lh.googleusercontent.com/Tsau2daTTeZKu2I11h7A7t1rQKY_XjJHGyx-rGpiBE7EzSHkPtNKDFab6-Sw3pgOFg=s0",
//                 "active": true,
//                 "appname": "Mega Car Racing"
//             },
//             {
//                 "appurl": "https://play.google.com/store/apps/details?id=com.scratchcard.scratchandwin.earnrealreward.shareandwingift",
//                 "appname": "Scratch Gift Cards and Win: Scratch Carnival",
//                 "imageurl": "https://play-lh.googleusercontent.com/MhO7CCShzXCrhGr42dNdQm49Ha9wTBoJ-ImFKwh_3Z1egY80CEpGnZnD2yhpO_tB6y0=s0",
//                 "active": true
//             },
//             {
//                 "appname": "Quick Charge Battery Charger: Super Fast Charging",
//                 "imageurl": "https://play-lh.googleusercontent.com/fHG-CUeTkNqm_hhKLN0HLD6ckREoAhEuA3c8BPw9pTLR_I-17cdW7ZIOUpaltND7uQ=s0",
//                 "active": true,
//                 "appurl": "https://play.google.com/store/apps/details?id=com.tools.batterychargingphotoanimation.fastcharging.toptools"
//             },
//             {
//                 "active": true,
//                 "imageurl": "https://play-lh.googleusercontent.com/qvzS5CVuc5KZYt66yPhdpIo-sPL_9rupDaGM6b1IjjT8B5tKu6gbrgnfgo9CotbwNZM=s0",
//                 "appname": "Spin wheel and Scratch ticket",
//                 "appurl": "https://play.google.com/store/apps/details?id=com.freetofire.windiamond.scratchandspin.earnreward"
//             },
//             {
//                 "appname": "Scratch off real reward",
//                 "active": true,
//                 "appurl": "https://play.google.com/store/apps/details?id=com.scratchcard.scratchandwin.earnrealreward.shareandwin",
//                 "imageurl": "https://play-lh.googleusercontent.com/d1EQ3PyYYDrJ9Z9qLlxq6VLqXSmyqCrN7SrreVm3ppzi4-gumce6AudpdUbgNrNzEwNP=s0"
//             },
//             {
//                 "appname": "Private VPN: Hot Shield",
//                 "active": true,
//                 "imageurl": "https://play-lh.googleusercontent.com/mAy-2jrjZ6bbZpZ29R_K9bFZlPkonMAZ5D2ZBPgyanLDiJCzhYJceu_8ysTJl4yhz1Y=s0",
//                 "appurl": "https://play.google.com/store/apps/details?id=vpn.free.fastvpn.bestspeedvpn.vpnspeedfox.pro"
//             },
//             {
//                 "appname": "Video Chat With lady",
//                 "active": true,
//                 "imageurl": "https://play-lh.googleusercontent.com/oMVcJkGZkzetx1b2K_HJN9zOyheWCPLIUXMfgYilekssAVMGP-vnCeq48VJG42X6bbI=s0",
//                 "appurl": "https://play.google.com/store/apps/details?id=com.live.chat.bigolive.call.livevideocallwithstranger"
//             },
//             {
//                 "appname": "\t Free Scratch off 2021",
//                 "active": true,
//                 "appurl": "https://play.google.com/store/apps/details?id=winscratch.winrewards.scratchandwin.winrealcash.scratchcard",
//                 "imageurl": "https://play-lh.googleusercontent.com/-4AM9t5OLRF71GmOqitbLDFqzvz5u0LU_gM9xsSgAM2RyeKhGoqhMkXzRmBFzuD8VRA=s0"
//             },
//             {
//                 "appurl": "https://play.google.com/store/apps/details?id=realscratchcardwin.winpaytm.lotterywin.winrealmoney.scratch.win.app",
//                 "imageurl": "https://play-lh.googleusercontent.com/R15CdPv0Ds2zJB5JsCABGj13PA31BOcmc0Gn0dA9bZ-8a7ua4EIeb6DWPng_zccQAutP=s0",
//                 "active": true,
//                 "appname": "Win Rewards : scratch off real money"
//             },
//             {
//                 "imageurl": "https://play-lh.googleusercontent.com/bYBQwCtWIO1xrvicdccTcmAdEXeQM4-apWiFbAN0gi1YsMeNSrpz8GoUYwVrgYhfcSE=s0",
//                 "appurl": "https://play.google.com/store/apps/details?id=com.knife.slice.fruitcut.ninjacut",
//                 "appname": "MPL Rewards Cash Crazy Fruit Slice",
//                 "active": true
//             },
//             {
//                 "imageurl": "https://play-lh.googleusercontent.com/wQ0fnsRygQhbGd20kI1OYZ7QZzUzRj5Jg5NzXdkn8sZG0c42gQAww1tQJG8mkOfbkw4H=s0",
//                 "appurl": "https://play.google.com/store/apps/details?id=com.hdvideoprojector.hdvideoprojectorsimulator.tools.livehdvideoprojector.videoprojectorapp.mobileprojector",
//                 "appname": "Wireless HD video mirroring projector",
//                 "active": true
//             },
//             {
//                 "imageurl": "https://play-lh.googleusercontent.com/iXkc9Czj-1G75SmDPkc_I-zNzn2Cp3r9uVdBqCFmgBzHOzepSmEGmbEQuOP9o6F3oJCt=s0",
//                 "active": true,
//                 "appurl": "https://play.google.com/store/apps/details?id=com.aftekgames.quiz2018",
//                 "appname": "Quiz Games 2021"
//             },
//             {
//                 "appurl": "https://play.google.com/store/apps/details?id=idle.life.tycoon.horse.racing.simulator",
//                 "appname": "Idle Life Tycoon : Horse Racing Game",
//                 "active": true,
//                 "imageurl": "https://play-lh.googleusercontent.com/Q8eteWvDOFhFW80qUv56XBFZPgyo2t8Cp6SC9H-005ngnqr1BC-_UCOxSg1mya2N_htO=s0"
//             },
//             {
//                 "imageurl": "https://play-lh.googleusercontent.com/LX-js0fr4qLy2P9Z7b-9T5NLI-yD661tAZdrGMG1eTg4VOXP-b7nYIdmVcrFr29oWw=s0",
//                 "appname": "Jigsaw free Puzzle games",
//                 "active": true,
//                 "appurl": "https://play.google.com/store/apps/details?id=magic.puzzles.jigsaw.free.mount"
//             },
//             {
//                 "appname": "Word Streak: Word Games For Free",
//                 "active": true,
//                 "imageurl": "https://play-lh.googleusercontent.com/7elfBYyZzVBpaAKQSw009NCAPW3xYAnQVD5I0hQ7furuOWDR2NWoPJufxgqN7saSV24=s0",
//                 "appurl": "https://play.google.com/store/apps/details?id=com.aftek.word.connect"
//             }];
//             var play_game = [
//                 {
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/4.gif?alt=media&token=b9a6cf1e-64f0-4033-9b7e-81e5bc151fdc",
//                     "appurl": "https://www.gamezop.com/?id=xOlaUznLK",
//                     "active": true
//                 },
//                 {
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/1GameZop%2F1.jpeg?alt=media&token=6f32549b-7267-42c8-a2ba-9ab706ef52b9",
//                     "active": true,
//                     "appurl": "https://play43.qureka.com/"
//                 },
//                 {
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/1GameZop%2F2.jpeg?alt=media&token=0797abdc-8801-4aa3-bae8-404fd3121543",
//                     "appurl": "https://www.gamezop.com/?id=xOlaUznLK",
//                     "active": true
//                 },
//                 {
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/1GameZop%2F3.jpeg?alt=media&token=4751f6b5-b2d0-4dd3-934f-d7cf5a5b538d",
//                     "appurl": "https://play43.qureka.com/",
//                     "active": true
//                 },
//                 {
//                     "active": true,
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/1GameZop%2F4.jpeg?alt=media&token=d9adfa81-3e28-433a-b035-ebae35d9b743",
//                     "appurl": "https://www.gamezop.com/?id=xOlaUznLK"
//                 },
//                 {
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/1GameZop%2F5.jpeg?alt=media&token=18712ec6-41f4-4d5d-bac5-6e68fb8ac3e1",
//                     "active": true,
//                     "appurl": "https://play43.qureka.com/"
//                 },
//                 {
//                     "appurl": "https://www.gamezop.com/?id=xOlaUznLK",
//                     "active": true,
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/1GameZop%2F18.jpeg?alt=media&token=f295350d-94ed-4ce5-b0cb-e9706070ad4f"
//                 },
//                 {
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/1GameZop%2F17.jpeg?alt=media&token=978fa79a-5448-496f-b3f0-d4dcd6208fd9",
//                     "active": true,
//                     "appurl": "https://play43.qureka.com/"
//                 },
//                 {
//                     "active": true,
//                     "appurl": "https://www.gamezop.com/?id=xOlaUznLK",
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/1GameZop%2F16.jpeg?alt=media&token=c49f47c2-64cb-4926-b9e8-3b62ac610c4a"
//                 },
//                 {
//                     "active": true,
//                     "appurl": "https://play43.qureka.com/",
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/1GameZop%2F15.jpeg?alt=media&token=49f2a87d-92aa-4bf5-818a-4d5741c4d6db"
//                 },
//                 {
//                     "appurl": "https://www.gamezop.com/?id=xOlaUznLK",
//                     "active": true,
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/1GameZop%2F14.jpeg?alt=media&token=774c9216-4da1-4838-b440-4e4dcaaa2057"
//                 },
//                 {
//                     "appurl": "https://play43.qureka.com/",
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/1GameZop%2F13.jpeg?alt=media&token=5d951920-8e34-4924-be89-42c987268aa3",
//                     "active": true
//                 },
//                 {
//                     "active": true,
//                     "appurl": "https://www.gamezop.com/?id=xOlaUznLK",
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/1GameZop%2F12.jpeg?alt=media&token=db9a706b-0fb4-468d-ab83-600d5d22fd16"
//                 },
//                 {
//                     "appurl": "https://play43.qureka.com/",
//                     "active": true,
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/1GameZop%2F11.jpeg?alt=media&token=73993658-ab05-44ef-bf33-cfaf874b212c"
//                 },
//                 {
//                     "appurl": "https://www.gamezop.com/?id=xOlaUznLK",
//                     "active": true,
//                     "imageurl": "https://firebasestorage.googleapis.com/v0/b/international-stylist-b06a9.appspot.com/o/1GameZop%2F10.jpeg?alt=media&token=580135a1-6513-4c99-9550-dc88782edd46"
//                 }
//             ];
            
//             var docRef = await db.collection("test").doc('ad_id').set({
//                 "admob_openad": "ca-app-pub-3940256099942544/3419835294",
//                 "admob_interstitial": "ca-app-pub-3940256099942544/1033173712",
//                 "facebook_interstitial": "YOUR_PLACEMENT_ID",
//                 "facebook_banner": "YOUR_PLACEMENT_ID",
//                 "admob_native": "ca-app-pub-3940256099942544/2247696110",
//                 "admob_banner": "ca-app-pub-3940256099942544/6300978111",
//                 "facebook_native": "YOUR_PLACEMENT_ID"
//             });
//             await db.collection('test').doc('keyword').set(keyword);
//             await db.collection('test').doc('more_app').set({more_app: more_app});
//             await db.collection('test').doc('play_game').set({play_game: play_game});
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