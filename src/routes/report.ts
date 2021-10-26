import express from "express";

const router = express.Router();
const Report = require('../models/report');

router.get('/', async (req, res) => {
    try {
        const reports = await Report.find();
        res.json(reports);
    } catch (err) {
        res.json({ message: err });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);
        res.json(report);
    } catch (err) {
        res.json({ message: err });
    }
})

router.post('/', async (req, res) => {
    const report = new Report({
        date: req.body.date,
        compteur: req.body.compteur,
        index: req.body.index,
    })
    try {
        const savedReport = await report.save();
        res.json(savedReport);
    } catch (err) {
        res.json({ message: err });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const reportUpdate = await Report.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    date: req.body.date,
                    compteur: req.body.compteur,
                    index: req.body.index,
                }
            }
        );
        res.json(reportUpdate);
    } catch (err) {
        res.json({message:err})
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const deleteReport=await Report.findByIdAndDelete({_id:req.params.id});
        res.json(deleteReport);
    } catch (err) {
        res.json({message:err})
    }
})

module.exports=router;