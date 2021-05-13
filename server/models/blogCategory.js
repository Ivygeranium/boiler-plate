const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bc_Schema = mongoose.Schema({
    category: {
        type:String
    },
    subCategory: {
        type:Array
    },
    icon: {
        type:String
    },
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})


const BlogCatergory = mongoose.model('BlogCatergory', bc_Schema);

module.exports = { BlogCatergory }