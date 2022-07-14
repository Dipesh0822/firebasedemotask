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
                const androidAds = db.collection('siminfo02');
                const androidAdsData = await androidAds.get();
                const dataAndroid = {};
                androidAdsData.forEach(doc => {
                    if(doc.id === "more_app") {
                      dataAndroid[doc.id] = doc.data().more_app
                    } else if(doc.id === "play_game") {
                        dataAndroid[doc.id] = doc.data().play_game
                    } else {
                       dataAndroid[doc.id] = doc.data()
                    }
                });
                resData = {
                    "status": true,
                    "data" : dataAndroid
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