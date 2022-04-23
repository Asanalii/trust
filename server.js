const express = require("express");
const mongoose=require('mongoose')
const app = express();
const port = 3000;
const ejs=require('ejs')

//mongoose.connect('mongodb://localhost/blog')

app.set('view engine','ejs');

app.use(express.static(__dirname+"/public"))
app.use("/", require("./routes/root"));
app.use("/login", require("./routes/login"));
app.use("/about", require("./routes/about"));
app.use("/signup", require("./routes/signup"));
app.use("/article", require("./routes/article"));
app.use("/chat", require("./routes/chat1"));
app.use("/joinchat", require ("./routes/chat2"));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
