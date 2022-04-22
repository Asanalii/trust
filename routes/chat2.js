const express=require('express')
const router = express.Router();
var path = require('path')
/*const ejs=require('ejs')*/


function formatMessage(username, text) {
    return {
        username,
        text,
        time: express().format('h:mm a')
    };
}




router
    .route("/")
    .get((req,res)=> res.render(path.resolve('views/chat2.ejs')))
    .post((req,res) => res.send("POST"));

module.exports = router;