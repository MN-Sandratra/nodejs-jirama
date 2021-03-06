import express from 'express';
const cors=require('cors');
const mongoose = require('mongoose');
require('dotenv/config')

const app=express();
const port=3030;

//route
const userRoute=require('./routes/users');
const counterRoute=require('./routes/counter');
const reportRoute = require('./routes/report');
const factureRoute=require('./routes/facture');
const postRoute=require('./routes/post');

global.__basedir = __dirname;

//Middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//middleware route
app.use('/api/users',userRoute);
app.use('/api/counters',counterRoute);
app.use('/api/reports',reportRoute);
app.use('/api/factures',factureRoute);
app.use('/api/posts',postRoute);

app.get('/',(req,res)=>{
    res.send('Hello world')
});
async function startServer(){
    await mongoose.connect(process.env.CONNECTION_DB,
        {useNewUrlParser:true,
         useUnifiedTopology: true },
        ).then(()=>console.log("Connected to MongoDB Database"))
        .catch(()=>console.log("tsy mety eh"));
    app.listen(3030,()=>console.log(
        "server running at http://localhost:3030 "
    ));
}

startServer();