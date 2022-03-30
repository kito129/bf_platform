const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');


const User = require("../models/user");

//return all match
exports.login= (req, res, next) => {
    User.findOne({ email: req.body.email })
        .exec()
        .then(user => {
            if (!user) {
                return res.status(401).json(JSON.stringify({
                    message: "Auth failed email"
                }));
            } else{
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (err) {
                        return res.status(401).json(JSON.stringify({
                            message: "Auth failed password"
                        }));
                    }
                    if (result) {
                        const token = jwt.sign(
                            {
                                email: user.email,
                                userId: user._id
                            },
                            process.env.JWT_KEY,
                            {
                                expiresIn: "24h"
                            }
                        );
                        return res.status(200).json({
                            message: "Auth successful",
                            userId: user._id,
                            userName: user.name,
                            token: token
                        });
                    } else {
                        res.status(401).json(JSON.stringify({
                            message: "Auth failed password"
                        }));
                    }
                });
            }
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json(JSON.stringify({
                error: err
            }));
        });
}


exports.createOne= (req, res, next) => {

    bcrypt.hash('NassimTaleb', 10, (err, hash) => {

        const usId = new mongoose.Types.ObjectId()
        const user = new User({
            _id: usId,
            email: "alicante69",
            password: hash,
            name: "piera",
        });
        user
            .save()
            .then(result => {
                res.status(201).json(JSON.stringify({
                    message: "User created"
                }));
            })
            .catch(err => {
                console.log("ERROR:\n" + err);
                res.status(500).json(JSON.stringify({
                    error: err
                }));
            });
    })

}


