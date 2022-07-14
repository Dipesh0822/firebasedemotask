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
                const androidAds = db.collection('freefire01').doc('android');
                const androidData = await androidAds.get();
                resData = {
                    "status": true,
                    "data": androidData.data(),
                }
                return res.status(200).send(resData);
            } else if (dType.toUpperCase() === "IOS") {
                const androidAds = db.collection('freefire01').doc('ios');
                const androidData = await androidAds.get();
                resData = {
                    "status": true,
                    "data": androidData.data(),
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

// Rest get api -- Mobile Back end  
// router.get('/', async (req, res) => {
//     (async () => {
//         try {
//             var arrayMoreApp = [];
//             var arrayPlaygame = [];
//             for (let index = 0; index < 15; index++) {
//                 var objectMoreApp = {};
//                 var objectPlayApp = {};
//                 var appurl = "https://play.google.com/store/apps/details?id=com.mountgames.plane.wars.air.combat";
//                 var appname =  "Plane War";
//                 var imageurl =  "https://play-lh.googleusercontent.com/egScCB93eXAmP6JnV_UixzKf8_2iKrgZ-5h-90Ne1_UUxqCxm2IxNKc5KZMklNtjVqY8=s0";
//                 var active = true;
//                 objectMoreApp = {
//                     appurl: appurl,
//                     appname: appname,
//                     imageurl: imageurl,
//                     active: active
//                 }
//                 objectPlayApp = {
//                     appurl: appurl,
//                     imageurl: imageurl,
//                     active: active
//                 }
//                 arrayMoreApp.push(objectMoreApp);
//                 arrayPlaygame.push(objectPlayApp);
//             }
//             const data =
//             {
//                 "ad_id": {
//                     "facebook_native": "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
//                     "admob_banner": "ca-app-pub-3940256099942544/6300978111",
//                     "facebook_banner": "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
//                     "admob_openad": "ca-app-pub-3940256099942544/3419835294",
//                     "admob_interstitial": "ca-app-pub-3940256099942544/1033173712",
//                     "facebook_interstitial": "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
//                     "admob_native": "ca-app-pub-3940256099942544/1044960115"
//                 },
//                 "keyword": {
//                     "ad_priority": "admob"
//                 },
//                 "more_app": arrayMoreApp,
//                 "play_game": arrayPlaygame
//             };
//             const androidAds = await db.collection('freefire02').doc('android').set(data);
            
//             return res.status(200).send(androidAds);

//         } catch (error) {
//             console.log(error);
//             return res.status(500).send(error);
//         }
//     })();
// });

module.exports = router;