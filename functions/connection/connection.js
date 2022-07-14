
const admin = require('firebase-admin');
var serviceAccount = require("./../international-stylist-b06a9-firebase-adminsdk-vyg93-4e647c0e15.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://international-stylist-b06a9-default-rtdb.firebaseio.com"
});
var db = admin.firestore();
// var realtime = admin.database();
module.exports = db ;