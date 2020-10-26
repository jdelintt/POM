const express = require("express");
const mongoose = require("mongoose");
const cookieParserInstance = require('cookie-parser');

const app = express();

const PORT = process.env.PORT || 3001;

const userRoutes = require("./routes/userRoutes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParserInstance());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/POM", {useNewUrlParser : true, useUnifiedTopology : true}, () => {
    console.log("connected")
})

app.use("/api" , userRoutes)


app.listen(PORT, () => {
    console.log("app listening at port " + PORT)
})
