
// https://us-central1-international-stylist-b06a9.cloudfunctions.net/app  -- Call Rest Api

// https://www.youtube.com/watch?v=dKoQnNylxm8&list=PLJetLDY7yKupm5WTx02ylh1I25rJLPvXe&index=4   -- Reference Api

const functions = require('firebase-functions');

const admin = require('firebase-admin');
var serviceAccount = require("./international-stylist-b06a9-firebase-adminsdk-vyg93-4e647c0e15.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://international-stylist-b06a9-default-rtdb.firebaseio.com"
});

const express = require('express');
const app = express();

const app_3D_Dress = express();
const video_app = express();
const scratch_app = express();
const scratch02_app = express();

const ipl001_app = express();
const ipl002_app = express();
const cricketscore001_app = express();
const cricketscore002_app = express();

const db = admin.firestore();

const cors = require('cors');
app.use(cors({ origin: true }));


// Rest get api -- Mobile Back end  
app.get('/:id', (req, res) => {
    (async () => {
        try {
            var dType = req.params.id;
            var resData ;
            const initApp = await db.collection('initapp').select('keyword', 'value').get(); //.where('skuname', '==', req.params.id)
            if(dType.toUpperCase() === "ANDROID") {
                const androidAds = await db.collection('android_ad_id').select('keyword', 'value', 'value2', 'value3').get(); //.where('skuname', '==', req.params.id)
                const moreAds = await db.collection('androidmoreapp').where('active', '==', true).orderBy('sequence').select('appname', 'eventname', 'appurl', 'imageurl', 'active').get(); //.where('skuname', '==', req.params.id)
                resData = {
                    "status": true,
                    "data" : initApp.docs.map(doc => doc.data()),
                    "ads" : androidAds.docs.map(doc => doc.data()),
                    "more":  moreAds.docs.map(doc => doc.data()),
                }
                return res.status(200).send(resData);
            } else if (dType.toUpperCase() === "IOS" ) {
                const iosAds = await db.collection('ios_ad_id').select('keyword', 'value','value2', 'value3').get(); //.where('skuname', '==', req.params.id)
                const moreAds = await db.collection('iosmoreapp').where('active', '==', true).orderBy('sequence').select('appname', 'eventname', 'appurl', 'imageurl', 'active').get(); //.where('skuname', '==', req.params.id)
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
app.post('/', (req, res) => {
    (async () => {
        try {
            var data = await db.collection('initapp').doc(req.body.keyword).set({
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
app.post('/:id', (req, res) => {
    (async () => {
        try {
            var batch = db.batch();
            var arrayData = req.body.arrayKeyword;
            for (let index = 0; index < arrayData.length; index++) {
                const reqkeyword = arrayData[index].keyword;
                const reqvalue = arrayData[index].value;
                const reqdesc = arrayData[index].desc;
                var docRef = db.collection("initapp").doc(reqkeyword);
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
app.get('/', (req, res) => {
    (async () => {
        try {
            const snapshot = await db.collection('initapp').get(); //.where('skuname', '==', req.params.id)
            return res.status(200).send(snapshot.docs.map(doc => doc.data()));
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


// Update Api -- Angular Back end (Single Document)
app.put('/:id', (req, res) => {
    (async () => {
        try {
            const updateDoc = await db.collection('initapp').doc(req.params.id).update({
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
app.delete('/:id', (req, res) => {
    (async () => {
        try {
            const deleteDoc = await db.collection('initapp').doc(req.params.id); 
            await deleteDoc.delete();
            return res.status(200).send();
        } catch (error) {
            return res.status(500).send(error);
        }
    })();
});

exports.app = functions.https.onRequest(app);


app_3D_Dress.use(cors({ origin: true }))


// Rest get api -- Mobile Back end  
app_3D_Dress.get('/:id', (req, res) => {
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
app_3D_Dress.post('/', (req, res) => {
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
app_3D_Dress.post('/:id', (req, res) => {
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
app_3D_Dress.get('/', (req, res) => {
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
app_3D_Dress.put('/:id', (req, res) => {
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
app_3D_Dress.delete('/:id', (req, res) => {
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

exports.app3DDressUp = functions.https.onRequest(app_3D_Dress);


video_app.use(cors({ origin: true }));

// Rest get api -- Mobile Back end  
video_app.get('/:id', (req, res) => {
    (async () => {
        try {
            var dType = req.params.id;
            var resData ;
            if(dType.toUpperCase() === "ANDROID") {
                const androidAds = db.collection('video').doc('android');
                const androidData = await androidAds.get();
                resData = {
                    "status": true,
                    "data" :  androidData.data(),
                }
                return res.status(200).send(resData);
            } else if (dType.toUpperCase() === "IOS" ) {
                const androidAds = db.collection('video').doc('ios');
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
video_app.get('/gender/:id', (req, res) => {
    (async () => {
        try {
            var dType = req.params.id;
            var resData ;
            if(dType.toUpperCase() === "MALE") {
                const androidAds = db.collection('video').doc('male');
                const androidData = await androidAds.get();
                resData = {
                    "status": true,
                    "data" :  androidData.data(),
                }
                return res.status(200).send(resData);
            } else if (dType.toUpperCase() === "FEMALE" ) {
                const androidAds = db.collection('video').doc('female');
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

exports.video = functions.https.onRequest(video_app);



// const scratch_app = express();
scratch_app.use(cors({ origin: true }));

// Rest get api -- Mobile Back end  
scratch_app.get('/:id', (req, res) => {
    (async () => {
        try {
            var dType = req.params.id;
            var resData ;
            if(dType.toUpperCase() === "ANDROID") {
                const androidAds = db.collection('scratch').doc('android');
                const androidData = await androidAds.get();
                resData = {
                    "status": true,
                    "data" :  androidData.data(),
                }
                return res.status(200).send(resData);
            } else if (dType.toUpperCase() === "IOS" ) {
                const androidAds = db.collection('scratch').doc('ios');
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


exports.scratch = functions.https.onRequest(scratch_app);


ipl001_app.use(cors({ origin: true }));

// Rest get api -- Mobile Back end  
ipl001_app.get('/:id', (req, res) => {
    (async () => {
        try {
            var dType = req.params.id;
            var resData ;
            if(dType.toUpperCase() === "ANDROID") {
                const androidAds = db.collection('ipl01').doc('android');
                const androidData = await androidAds.get();
                resData = {
                    "status": true,
                    "data" :  androidData.data(),
                }
                return res.status(200).send(resData);
            } else if (dType.toUpperCase() === "IOS" ) {
                const androidAds = db.collection('ipl01').doc('ios');
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


exports.ipl01 = functions.https.onRequest(ipl001_app);


ipl002_app.use(cors({ origin: true }));

// Rest get api -- Mobile Back end  
ipl002_app.get('/:id', (req, res) => {
    (async () => {
        try {
            var dType = req.params.id;
            var resData ;
            if(dType.toUpperCase() === "ANDROID") {
                const androidAds = db.collection('ipl02').doc('android');
                const androidData = await androidAds.get();
                resData = {
                    "status": true,
                    "data" :  androidData.data(),
                }
                return res.status(200).send(resData);
            } else if (dType.toUpperCase() === "IOS" ) {
                const androidAds = db.collection('ipl02').doc('ios');
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


exports.ipl02 = functions.https.onRequest(ipl002_app);


cricketscore001_app.use(cors({ origin: true }));

// Rest get api -- Mobile Back end  
cricketscore001_app.get('/:id', (req, res) => {
    (async () => {
        try {
            var dType = req.params.id;
            var resData ;
            if(dType.toUpperCase() === "ANDROID") {
                const androidAds = db.collection('cricketscore01').doc('android');
                const androidData = await androidAds.get();
                resData = {
                    "status": true,
                    "data" :  androidData.data(),
                }
                return res.status(200).send(resData);
            } else if (dType.toUpperCase() === "IOS" ) {
                const androidAds = db.collection('cricketscore01').doc('ios');
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


exports.cricketscore01 = functions.https.onRequest(cricketscore001_app);

cricketscore002_app.use(cors({ origin: true }));
// Rest get api -- Mobile Back end  
cricketscore002_app.get('/:id', (req, res) => {
    (async () => {
        try {
            var dType = req.params.id;
            var resData ;
            if(dType.toUpperCase() === "ANDROID") {
                const androidAds = db.collection('cricketscore02').doc('android');
                const androidData = await androidAds.get();
                resData = {
                    "status": true,
                    "data" :  androidData.data(),
                }
                return res.status(200).send(resData);
            } else if (dType.toUpperCase() === "IOS" ) {
                const androidAds = db.collection('cricketscore02').doc('ios');
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


exports.cricketscore02 = functions.https.onRequest(cricketscore002_app);


scratch02_app.use(cors({ origin: true }));

// Rest get api -- Mobile Back end  
scratch02_app.get('/:id', (req, res) => {
    (async () => {
        try {
            var dType = req.params.id;
            var resData ;
            if(dType.toUpperCase() === "ANDROID") {
                const androidAds = db.collection('scratch02');
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

exports.scratch02 = functions.https.onRequest(scratch02_app);

