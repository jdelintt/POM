const express = require("express");
const mongoose = require("mongoose");
const cookieParserInstance = require('cookie-parser');
const bodyParser = require("body-parser")
const path = require("path");
const methodOverride = require("method-override")



const app = express();

const PORT = process.env.PORT || 3001;

const userRoutes = require("./routes/userRoutes")

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(methodOverride("_method"))
app.use(cookieParserInstance());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/POM", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected")
})


app.use("/api", userRoutes)


app.listen(PORT, () => {
    console.log("app listening at port " + PORT)
})
