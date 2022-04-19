const express = require("express");
const app = express();
const port = 3000;
const ejs=require('ejs')

app.set('view engine','ejs');

app.use(express.static(__dirname+"/public"))
app.use("/", require("./routes/root"));
app.use("/login", require("./routes/login"));
app.use("/about", require("./routes/about"));
app.use("/signup", require("./routes/signup"));
app.use("/article", require("./routes/article"));

//let a = 1;
//ds

app.listen(port, () =>

    console.log(`App listening at http://localhost:${port}`)
);
