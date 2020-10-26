const express = require("express");
const mongoose = require("mongoose");
const cookieParserInstance = require('cookie-parser');
const bodyParser = require("body-parser")
const Grid = require("gridfs-stream")
const methodOverride = require("method-override")


const app = express();

const PORT = process.env.PORT || 3001;

const userRoutes = require("./routes/userRoutes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(methodOverride("_method"))
app.use(cookieParserInstance());

 mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/POM", {useNewUrlParser : true, useUnifiedTopology : true}, () => {
    console.log("connected")
})


const conn = mongoose.createConnection(process.env.MONGODB_MED || "mongodb://localhost/MedFiles")

let gfs;

conn.once("open", () => {
    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection("MedFiles")
})


app.use("/api" , userRoutes)


app.listen(PORT, () => {
    console.log("app listening at port " + PORT)
})
