const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const {JSDOM} = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)

const companionSchema = new mongoose.Schema({
    location: {
        type: String,
        required:true
    },
    destination :{
        type: String
    },
    time: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default : Date.now
    },
    slug:{
        type: String,
        required:true,
        unique:true
    },

})

companionSchema.pre('validate',function(next){
    if(this.title){
        this.slug=slugify(this.title,{lower:true,strict:true})
    }

    next()
})

module.exports = mongoose.model('Companion',companionSchema)
