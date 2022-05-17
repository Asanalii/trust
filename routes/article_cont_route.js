const express=require('express')
const router = express.Router();
const mongoose = require("mongoose");
const ArticleController = require("../controllers/article_controller");

express().use(express.urlencoded({extended:false}))


router.get('/',(req,res)=>{
    const articles=[{
        title: 'Articles',
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

router.get('/new',ArticleController.new);
/*
router.get('/:id',UserController.findOne);
router.post('/',UserController.create);
router.patch('/:id',UserController.update);
router.delete('/:id',UserController.destroy);
*/


/*router.get('/new',(req,res)=>{
    res.render('new',{article : new Article_cont_route()})
})*/

/*router.get('/:id',async (req, res) => {
    const article = await Article_cont_route.findById(req.params.id)
    if (article==null) res.redirect('/')
    res.render('articles/show', {article: article})
})*/

/* router.post('/',  (async (req, res) => {

    let article = new Article_cont_route({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })

    await article.save()
})) */

router.post('/',ArticleController.add)



module.exports = router;