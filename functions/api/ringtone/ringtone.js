const express = require("express");
const router = express.Router();
const db = require('./../../connection/connection')

// Rest get api -- Mobile Back end  
router.get('/:id', (req, res) => {
    (async () => {
        try {
            var dType = req.params.id;
            var resData ;
            if(dType.toUpperCase() === "ANDROID") {
                const androidAds = db.collection('ringtone').doc('android');
                const androidData = await androidAds.get();
                resData = {
                    "status": true,
                    "data" :  androidData.data(),
                }
                return res.status(200).send(resData);
            } else if (dType.toUpperCase() === "IOS" ) {
                const androidAds = db.collection('ringtone').doc('ios');
                const androidData = await androidAds.get();
                resData = {
                    "status": true,
                    "data" :  androidData.data(),
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
router.get('/', (req, res) => {
    (async () => {
        try {
            
            if(dType.toUpperCase() === "ANDROID") {
                const androidAds = db.collection('ringtone').doc('android');
                const androidData = await androidAds.get();
                resData = {
                    "status": true,
                    "data" :  androidData.data(),
                }
                return res.status(200).send(resData);
            } else if (dType.toUpperCase() === "IOS" ) {
                const androidAds = db.collection('ringtone').doc('ios');
                const androidData = await androidAds.get();
                resData = {
                    "status": true,
                    "data" :  androidData.data(),
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

module.exports = router;