const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const path = require("path");
const crypto = require("crypto");
const multer = require("multer")
const GridFsStorage = require("multer-gridfs-storage")
const passportConfig = require("../configs/passport");
const jwt = require("jsonwebtoken");
const User = require("../models/user");


const signToken = userId => {
    return jwt.sign({
        iss: "POM",
        sub: userId
    }, "POM", { expiresIn: "1h" })
}

userRouter.post("/signup", (req, res) => {
    console.log(req.body)
    const { firstName, lastName, username, password, role, email, ADir } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err) {
            res.status(500).json({ msg: { msgBody: err, msgFlag: true } })
        }
        if (user) {
            res.status(400).json({ msg: { msgBody: "username is already taken", msgFlag: true } })
        }
        else {
            User.create({
                firstName,
                lastName,
                username,
                password,
                role,
                email,
                ADirFile: "",
                ADirFileType: ""
            })
            res.status(201).json({ msg: { msgBody: "we did it", msgFlag: false } })
        }
    })
})

userRouter.post("/login", passport.authenticate("local", { session: false }), (req, res) => {
    if (req.isAuthenticated()) {
        const { _id, username, role } = req.user;
        const token = signToken(_id);
        res.cookie("access_token", token, { httpOnly: true, sameSite: true });
        res.status(200).json({ isAuthenticated: true, user: username, role })
    }
})

userRouter.get("/logout", passport.authenticate("jwt", { session: false }), (req, res) => {
    res.clearCookie("access_token");
    res.json({ user: { username: "", role: "" }, success: true })
})



userRouter.get("/stayAuthenticated", passport.authenticate("jwt", { session: false }), (req, res) => {
    const { username, role } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { username, role } })
})

userRouter.get("/user/:user", passport.authenticate("jwt", { session: false }), (req, res) => {
    User.findOne({ username: req.params.user }, (err, data) => {
        if (err) throw err;
        res.json(data)
    })
})

userRouter.put("/ADR/files", (req, res) => {
    console.log(req.body)
    const { username, password, firstName, lastName, _id, role, email, ADirFile, ADirFileType } = req.body
    User.findOneAndUpdate({ _id: _id }, {
        $set: {
            username,
            password,
            firstName,
            lastName,
            _id,
            role,
            email,
            ADirFile,
            ADirFileType
        }
    }, (err, data) => {
        if (err) {
            console.log("you suck start over")
            throw err

        }
        else {
            res.json(data)
            console.log("you did it, all fucking noght bro")
        }
    })
})



module.exports = userRouter;