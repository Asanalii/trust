const mongoose = require('mongoose')
const path = require('path')
const ArticleModel = require('../models/article')


/*router.get('/new',(req,res)=>{
    res.render('new',{article : new ArticleModel()})
})*/

exports.new = async(req,res)=>{
    res.render('new',{article : new ArticleModel()})
}

exports.findThroughId = async(req,res)=>{
    res.render('new',{article : new ArticleModel()})
}

exports.add = (async (req, res) => {
    let article = new ArticleModel({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try{
       article = await article.save();
       res.redirect(`/article/${article.id}`)
    } catch (e) {
        res.render('articles/new')
    }

})