const mongoose = require('mongoose')
exports.Create_Schema = ()=>{
const UserSchema = new mongoose.Schema({
    Poster: {
        type: String,
        required: true
    },
    Movie:{
        type: String,
        required: true
    },
    Features:{
        type: [String],
        required: true
    },
    Genres:{
        type: [String],
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Dir:{
        type: String,
        required: true
    },
    Cast:{
        type: [String],
        required: true
    },
    Language:{
        type: String,
        required: true
    },
    Year:{
        type: String,
        required: true
    },
    Rating:{
        type: String,
        required: true
    },
    Age:{
        type: String,
        required: true
    },
    
},{timestamps:true})
exports.Content = mongoose.model("Content",UserSchema)
// console.log("hello world");

}


