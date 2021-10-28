import { Schema, model } from "mongoose";

const factureSchema = new Schema({
    lastReport:{
        type: Schema.Types.ObjectId,
        refs: 'Reports',
    },   
    newReport: {
            required: true,
            type: Schema.Types.ObjectId,
            refs: 'Reports',
        },
    date:Date,
    status:String,
    compteur:{
        type: Schema.Types.ObjectId,
        refs: 'Counters',
    },   
});

const Factures=model('Factures',factureSchema);
module.exports=Factures;