const express = require("express");
const router = express.Router();
const db = require('./../../connection/connection');
const realtime = require('./../../connection/connection');
const firebase = require("firebase-admin")

router.post('/', (req, res) => {
    (async () => {
        try {
            var resData;
            const { Name, UserId, Age, Country, Gender, IsSocial } = req.body;
            if (UserId !== undefined) {
                if (UserId.trim() === "") {
                    resData = {
                        "status": false,
                        "msg": "Please try again. "
                    }
                    return res.status(200).send(resData);
                }
            } else {
                resData = {
                    "status": false,
                    "msg": "Please try again. "
                }
                return res.status(200).send(resData);

            }
            const getUsers = db.collection("matchparty").doc(UserId);
            const getUser = await getUsers.get();
            if (getUser.data() !== undefined) {
                if (!IsSocial && !(getUser.data().IsSocial)) {
                    const { Password } = req.body;
                    if (Password === getUser.data().Password) {
                        resData = {
                            "status": true,
                            "msg": "Successfully Login.",
                            "user": getUser.data()
                        }
                        return res.status(200).send(resData);
                    } else {
                        resData = {
                            "status": false,
                            "msg": "Please Try Again. Your Password dosen't mismatch."
                        }
                        return res.status(200).send(resData);
                    }
                } else if (getUser.data().IsSocial && IsSocial) {
                    resData = {
                        "status": true,
                        "msg": "Successfully Login.",
                        "user": getUser.data()
                    }
                    return res.status(200).send(resData);
                } else {
                    resData = {
                        "status": false,
                        "msg": "Please Try Again. Your credinals dosen't mismatch."
                    }
                    return res.status(200).send(resData);
                }
            } else {
                let password = '';
                if (!IsSocial) {
                    const { Password } = req.body;
                    if (Password !== undefined) {
                        if (Password.trim() === "") {
                            resData = {
                                "status": false,
                                "msg": "Please Enter Password."
                            }
                            return res.status(200).send(resData);
                        } else {
                            password = Password;
                        }
                    } else {
                        resData = {
                            "status": false,
                            "msg": "Please Enter Password."
                        }
                        return res.status(200).send(resData);
                    }
                }

                await db.collection("matchparty").doc(UserId).set({
                    "Name": Name,
                    "Age": Age,
                    "Country": Country,
                    "Gender": Gender,
                    "Coins": 0,
                    "Stars": 0,
                    "Diamond": 0,
                    "IsSocial": IsSocial,
                    "UserId": UserId,
                    "Password": password
                });
                resData = {
                    "status": true,
                    "msg": "Successfully Register.",
                    "user": {
                        "Name": Name,
                        "Age": Age,
                        "Country": Country,
                        "Gender": Gender,
                        "Coins": 0,
                        "Stars": 0,
                        "Diamond": 0,
                        "IsSocial": IsSocial,
                        "UserId": UserId,
                        "Password": password
                    }
                }
                return res.status(200).send(resData);
            }

        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


router.put('/', (req, res) => {
    (async () => {
        try {
            var resData;
            const { Coins, UserId, Stars, Diamond } = req.body;
            if (UserId !== undefined) {
                if (UserId.trim() === "") {
                    resData = {
                        "status": false,
                        "msg": "Please try again. "
                    }
                    return res.status(200).send(resData);
                }
            } else {
                resData = {
                    "status": false,
                    "msg": "Please try again. "
                }
                return res.status(200).send(resData);

            }
            await db.collection("matchparty").doc(UserId).update({
                "Coins": firebase.firestore.FieldValue.increment(parseInt(Coins)),
                "Stars": firebase.firestore.FieldValue.increment(parseInt(Stars)),
                "Diamond": firebase.firestore.FieldValue.increment(parseInt(Diamond))
            });
            const getUser = await db.collection("matchparty").doc(UserId).get();
            resData = {
                "status": true,
                "msg": "Successfully Update Data.",
                "user": getUser.data()
            }
            return res.status(200).send(resData);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


router.get('/:id', (req, res) => {
    (async () => {
        try {
            var resData;
            const { id } = req.params;
            if (id === "all") {
                const getUsers = db.collection("matchparty");
                const getUser = await getUsers.orderBy('Coins', 'desc').limit(500).get();
                let arrData = [];
                getUser.forEach(doc => {
                    arrData.push(doc.data())
                });

                resData = {
                    "status": true,
                    "msg": "List Show Successfully.",
                    "users": arrData
                }
                return res.status(200).send(resData);
            } else {
                const getUsers = db.collection("matchparty");
                const getUser = await getUsers.where('Country', '==', id).orderBy('Coins', 'desc').limit(100).get();
                let arrData = [];
                getUser.forEach(doc => {
                    arrData.push(doc.data())
                });
                resData = {
                    "status": true,
                    "msg": "List Show Successfully.",
                    "users": arrData
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