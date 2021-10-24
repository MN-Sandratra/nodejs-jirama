import {Schema,model} from 'mongoose';

const userSchema=new Schema(
    {
        nom:String,
        prenom:String,
        telephone:String,
        adresse:String,
        commune:String,
        agence:String,
        sexe:Boolean,
        username:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true
        },
    }
)

const Users= model('Users',userSchema);

module.exports=Users;
