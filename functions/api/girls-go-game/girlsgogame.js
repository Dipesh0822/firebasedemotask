const express = require("express");
const router = express.Router();
const db = require('./../../connection/connection')

// Rest get api -- Mobile Back end  
router.get('/:id', (req, res) => {
    (async () => {
        try {
            var dType = req.params.id;
            var resData ;
            if(dType.toUpperCase() === "ANDROID" || dType.toUpperCase() === "IOS") {
                const androidAds = db.collection('girls_go_game').doc(dType.toLowerCase());
                const androidAdsData = await androidAds.get();
                resData = {
                    "status": true,
                    "data" : androidAdsData.data()
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