const mongoose = require('mongoose')
const path = require('path')
const ArticleModel = require('../models/article')


router.get('/new',(req,res)=>{
    res.render('new',{article : new ArticleModel()})
})

