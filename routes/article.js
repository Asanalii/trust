const express=require('express')
const router = express.Router();
var path = require('path')


router.get('/',(req,res)=>{
    const articles=[{
        title: 'Test article',
        date: new Date(),
        description:'Test description'
    },
        {
            title: 'Test article2',
            date: new Date(),
            description:'Test description2'
        },
        {
            title: 'Test article3',
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