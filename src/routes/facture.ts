import express from 'express';

const router = express.Router();
const Facture = require('../models/facture');

router.get('/', async (req, res) => {
    try {
        const factures = await Facture.find();
        res.json(factures);
    } catch (err) {
        res.json({ message: err });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const facture = await Facture.findById(req.params.id);
        res.json(facture);
    } catch (err) {
        res.json({ message: err });
    }
})

router.post('/', async (req, res) => {
    const facture = new Facture({
        lastReport:req.body.lastReport,
        newReport: req.body.newReport,
        date: req.body.date,
        status: req.body.status,
    })
    try {
        const savedFacture = await facture.save();
        res.json(savedFacture);
    } catch (err) {
        res.json({ message: err });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updateFacture = await Facture.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    lastReport:req.body.lastReport,
                    newReport: req.body.newReport,
                    date: req.body.date,
                    status: req.body.status,
                }
            }
        );
        res.json(updateFacture);
    } catch (err) {
        res.json({ message: err });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteFacture=await Facture.findByIdAndDelete({_id:req.params.id});
        res.json(deleteFacture);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports=router;