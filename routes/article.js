const express=require('express')
const router = express.Router();
const Article = require('./../models/article')
const mongoose = require("mongoose");

express().use(express.urlencoded({extended:false}))


router.get('/',(req,res)=>{
    const articles=[{
        title: 'Article',
        date: new Date(),
        description:'Test description'
    },
        {
            title: 'Article2',
            date: new Date(),
            description:'Test description2'
        },
        {
            title: 'Article3',
            date: new Date(),
            description:'Test description3'
        }
    ]
    res.render('articles',{articles: articles})
})

router.get('/new',(req,res)=>{
    res.render('new',{article : new Article()})
})

/*router.get('/:id',async (req, res) => {
    const article = await Article.findById(req.params.id)
    if (article==null) res.redirect('/')
    res.render('articles/show', {article: article})
})*/

router.post('/',  (async (req, res) => {

    /*let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })

    await article.save()
*/

}))


module.exports = router;