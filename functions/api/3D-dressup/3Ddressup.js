const express = require("express");
const router = express.Router();
const db = require('./../../connection/connection')

// Rest get api -- Mobile Back end  
router.get('/:id', (req, res) => {
    (async () => {
        try {
            var dType = req.params.id;
            var resData ;
            const initApp = await db.collection('3D_initapp').select('keyword', 'value').get(); //.where('skuname', '==', req.params.id)
            if(dType.toUpperCase() === "ANDROID") {
                const androidAds = await db.collection('3D_android_ad_id').select('keyword', 'value', 'value2', 'value3').get(); //.where('skuname', '==', req.params.id)
                const moreAds = await db.collection('3D_androidmoreapp').where('active', '==', true).orderBy('sequence').select('appname', 'eventname', 'appurl', 'imageurl', 'active').get(); //.where('skuname', '==', req.params.id)
                resData = {
                    "status": true,
                    "data" : initApp.docs.map(doc => doc.data()),
                    "ads" : androidAds.docs.map(doc => doc.data()),
                    "more":  moreAds.docs.map(doc => doc.data()),
                }
                return res.status(200).send(resData);
            } else if (dType.toUpperCase() === "IOS" ) {
                const iosAds = await db.collection('3D_ios_ad_id').select('keyword', 'value','value2', 'value3').get(); //.where('skuname', '==', req.params.id)
                const moreAds = await db.collection('3D_iosmoreapp').where('active', '==', true).orderBy('sequence').select('appname', 'eventname', 'appurl', 'imageurl', 'active').get(); //.where('skuname', '==', req.params.id)
                resData = {
                    "status": true,
                    "data" : initApp.docs.map(doc => doc.data()),
                    "ads" : iosAds.docs.map(doc => doc.data()),
                    "more":  moreAds.docs.map(doc => doc.data()),
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

// Create Api -- Angular Back end
router.post('/', (req, res) => {
    (async () => {
        try {
            var data = await db.collection('3D_initapp').doc(req.body.keyword).set({
                value: req.body.value,
                keyword: req.body.keyword,
                desc: req.body.desc
            });
            return res.status(200).send(data);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


// Create Api -- Angular Back end -- With Bulk Insert 
router.post('/:id', (req, res) => {
    (async () => {
        try {
            var batch = db.batch();
            var arrayData = req.body.arrayKeyword;
            console.log(arrayData)
            for (let index = 0; index < arrayData.length; index++) {
                const reqkeyword = arrayData[index].keyword;
                const reqvalue = arrayData[index].value;
                const reqdesc = arrayData[index].desc === undefined ? "" : arrayData[index].desc;
                var docRef = db.collection("3D_initapp").doc(reqkeyword);
                batch.set(docRef, {keyword:reqkeyword,value: reqvalue, desc: reqdesc});
            }
            batch.commit();
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// Get Api -- Angular Back end -- All Data
router.get('/', (req, res) => {
    (async () => {
        try {
            const snapshot = await db.collection('3D_initapp').get(); //.where('skuname', '==', req.params.id)
            return res.status(200).send(snapshot.docs.map(doc => doc.data()));
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


// Update Api -- Angular Back end (Single Document)
router.put('/:id', (req, res) => {
    (async () => {
        try {
            const updateDoc = await db.collection('3D_initapp').doc(req.params.id).update({
                value: req.body.value,
                keyword: req.body.keyword,
                desc: req.body.desc
            });
            return res.status(200).send();
        } catch (error) {
           return res.status(500).send(error);
        }
    })();
});


// Delete Api -- Angular Back end (Single Document)
router.delete('/:id', (req, res) => {
    (async () => {
        try {
            const deleteDoc = await db.collection('3D_initapp').doc(req.params.id); 
            await deleteDoc.delete();
            return res.status(200).send();
        } catch (error) {
            return res.status(500).send(error);
        }
    })();
});

module.exports = router;