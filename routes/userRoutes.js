const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const passportConfig = require("./../configs/passport");
const jwt = require("jsonwebtoken");
const User = require("./../models/user");


const signToken = userId => {
    return jwt.sign({
        iss: "POM",
        sub : userId
    }, "POM", {expiresIn : "1h"})
}

userRouter.post("/signup", (req, res) => {
    console.log(req.body)
    const {firstName, lastName, username, password, role} = req.body;
    User.findOne({username}, (err, user) => {
        if (err) {
            res.status(500).json({msg : {msgBody: err, msgFlag: true}})
        }
        if (user) {
            res.status(400).json({msg : {msgBody: "username is already taken", msgFlag: true}})
        }
        else {
            User.create({
                firstName,
                lastName,
                username,
                password,
                role
            })
            res.status(201).json({msg : {msgBody: "we did it", msgFlag: false}})
        }
    })
})

userRouter.post("/login", passport.authenticate("local", {session : false}) ,(req, res) => {
    if (req.isAuthenticated()) {
        const {_id, username, role} = req.user;
        const token = signToken(_id);
        res.cookie("access_token", token, {httpOnly : true, sameSite : true});
        res.status(200).json({isAuthenticated : true, user: username, role})
    }
})

userRouter.get("/logout", passport.authenticate("jwt", {session : false}) ,(req, res) => {
    res.clearCookie("access_token");
    res.json({user : {username : "", role : ""}, success : true })
})

userRouter.put("/provider/patients", passport.authenticate("jwt", {session : false}) ,(req, res) => {

})


userRouter.get("/stayAuthenticated", passport.authenticate("jwt", {session : false}) ,(req, res) => {
    console.log(req.user)
    const {username, role} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username, role}})
})



module.exports = userRouter;