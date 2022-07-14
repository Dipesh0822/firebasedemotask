// video_call02

const express = require("express");
const router = express.Router();
const db = require('./../../connection/connection')

// Rest get api -- Mobile Back end  
router.get('/:id', (req, res) => {
    (async () => {
        try {
            var dType = req.params.id;
            var resData;
            if (dType.toUpperCase() === "ANDROID" || dType.toUpperCase() === "IOS") {
                const androidAds = db.collection('video_call02').doc(dType.toLowerCase());
                const androidAdsData = await androidAds.get();
                resData = {
                    "status": 1,
                    "fb_medium_rectangle": androidAdsData.data().fb_medium_rectangle,
                    "fb_banner": androidAdsData.data().fb_banner,
                    "banner_key": androidAdsData.data().banner_key,
                    "app_open_ads": androidAdsData.data().app_open_ads,
                    "fb_native": androidAdsData.data().fb_native,
                    "fb_native_banner": androidAdsData.data().fb_native_banner,
                    "fb_interstitial": androidAdsData.data().fb_interstitial,
                    "interstitial_key": androidAdsData.data().interstitial_key,
                    "native_key": androidAdsData.data().native_key,
                    "adtype": androidAdsData.data().adtype
                };
                return res.status(200).send(resData);
            } else {
                resData = {
                    "status": 0
                };
                return res.status(200).send(resData);
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

module.exports = router;