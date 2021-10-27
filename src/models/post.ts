import {model, Schema} from 'mongoose';

const postSchema=new Schema({
    user:String,
    date:Date,
    contenu:String,
    image:String,
})

const Posts=model('Posts',postSchema);
module.exports=Posts;