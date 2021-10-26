import {Schema,model} from 'mongoose';

const reportSchema=new Schema({
    date:Date,
    compteur:{
        required:true,
        type: Schema.Types.ObjectId,
        refs: 'Counters',
    },
    index:Number,
});

const Reports=model('Reports',reportSchema);
module.exports=Reports;

