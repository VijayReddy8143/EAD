const mongoose = require('mongoose')
const empSchema = new mongoose.Schema({
    empid : {
        type : Number,
        required : true
    },
    name:{
        type : String,
        required : true
    },
    designation:{
        type : String,
        required : true 
    },
    permanent:{
        type : Boolean,
        required : true,
        default : false
    }
})

module.exports = mongoose.model('Employee',empSchema)