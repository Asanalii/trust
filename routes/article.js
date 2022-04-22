const express=require('express')
const router = express.Router();
var path = require('path')


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
    res.render('new')
})

module.exports = router;