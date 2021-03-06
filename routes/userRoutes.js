const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const nodemailer = require("nodemailer");
const passportConfig = require("../configs/passport");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Sign = require("../models/sign");



const signToken = userId => {
    return jwt.sign({
        iss: "POM",
        sub: userId
    }, "POM", { expiresIn: "1h" })
}

userRouter.post("/signup", (req, res) => {
    const { firstName, lastName, username, password, role, emails } = req.body;
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
                emails,
                ADirFile: "",
                ADirFileType: "",
                signatures: []
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
    const { username, password, firstName, lastName, _id, role, emails, ADirFile, ADirFileType, signatures } = req.body
    User.findOneAndUpdate({ _id: _id }, {
        $set: {
            username,
            password,
            firstName,
            lastName,
            _id,
            role,
            emails,
            ADirFile,
            ADirFileType,
            signatures
        }
    }, (err, data) => {
        if (err) {
            throw err

        }
        else {
            res.json(data)
        }
    })
})

userRouter.post("/email/send", (req, res) => {
    console.log(req.body.emails)




    const output = `
    <p>This is a new Client who needs there medical form faxed over to there doctors</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Advanced Directive Form: 
      </li>

    </ul>

  `;

    for (let i = 0; i < req.body.emails.length; i++) {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'pomindservices@gmail.com',
                pass: 'bNqVr$Wcdu#5'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Peace Of Mind" <pomindservices@gmail.com>', // sender address
            to: req.body.emails[i], // list of receivers
            subject: 'Advanced Directive PDF', // Subject line
            text: 'Advanced Directive', // plain text body
            html: output,
            attachments: [
                {
                    filename: "AdvancedDirective.pdf",
                    path: req.body.ADirFile
                }
            ]
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            res.render('contact', { msg: 'Email has been sent' });
        });
    }

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'pomindservices@gmail.com',
            pass: 'bNqVr$Wcdu#5'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"YOU NEED TO FAX THIS RIGHT NOW" <pomindservices@gmail.com>', // sender address
        to: 'pomindservices@gmail.com', // list of receivers
        subject: 'FAX THIS NEW CUSTOMER', // Subject line
        text: 'FAX THIS', // plain text body
        html: output,
        attachments: [
            {
                filename: "AdvancedDirective.pdf",
                path: req.body.ADirFile
            }
        ]
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('contact', { msg: 'Email has been sent' });
    });
})

userRouter.post("/sign/trail", (req, res) => {
    const { trimmedURI, timesStarted, timesEnded, username } = req.body;
    Sign.create({
        trimmedURI,
        timesStarted,
        timesEnded,
        whoSigned: timesEnded[0].title,
        username
    }, (error, info) => {
        if (error) throw error;
        res.json(info)
    })
})





module.exports = userRouter;