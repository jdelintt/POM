const express = require("express");
const mongoose = require("mongoose");
const cookieParserInstance = require('cookie-parser');
const bodyParser = require("body-parser")
const Grid = require("gridfs-stream")
const path = require("path");
const crypto = require("crypto");
const multer = require("multer")
const GridFsStorage = require("multer-gridfs-storage")
const methodOverride = require("method-override")


const app = express();

const PORT = process.env.PORT || 3001;

const userRoutes = require("./routes/userRoutes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(methodOverride("_method"))
app.use(cookieParserInstance());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/POM", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected")
})


const conn = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/POM")

let gfs;

conn.once("open", () => {
    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection("MedFiles")
})

const storage = new GridFsStorage({
    url: process.env.MONGODB_URI || "mongodb://localhost/POM",
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'MedFiles'
                }
                resolve(fileInfo)
            })
        })
    }
})

const upload = multer({ storage })

app.post("/files/med",upload.single("file") , (req, res) => {
    res.redirect("/landing")
})

app.get("/files/manyfiles", (req, res) => {
    gfs.files.find().toArray((err, files) => {
        if (!files || files.length === 0) {
            res.status(400).json({
                err : "no files exist"
            })
        }
        return res.json(files)
    })
})

app.get("/files/:filename", (req, res) => {
    gfs.files.findOne({filename : req.params.filename}, (err, file) => {
        if (!file ) {
            res.status(400).json({
                err : "no file exist"
            })
        }
        return res.json(file)
    })
})

app.get("/fileshow/:filename", (req, res) => {
    gfs.files.findOne({filename : req.params.filename}, (err, file) => {
        if (!file ) {
            res.status(400).json({
                err : "no file exist"
            })
        }
        // check if pdf
        if (file.contentType === "application/pdf") {
            // then we will read the pdf hopefully
            const readstream = gfs.createReadStream(file.filename)
            readstream.pipe(res)
        }
        else {
            res.status(404).json({
                err : "not a pdf"
            })
        }
    })
})




app.use("/api", userRoutes)


app.listen(PORT, () => {
    console.log("app listening at port " + PORT)
})
