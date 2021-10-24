import express from 'express';
const router = express.Router();
const Counter = require('../models/counter')

// get all counter 
router.get('/', async (req, res) => {
    try {
        const counters = await Counter.find();
        res.json(counters);
    } catch (err) {
        res.json({ message: err });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const selectedCounter = Counter.findById(req.params.id);
        res.json(selectedCounter);
    } catch (err) {
        res.json({ message: err });
    }
})

// save counter 
router.post('/', async (req, res) => {
    const newCounter = new Counter({
        type: req.body.type,
        user: req.body.user,
        adresse: req.body.adresse,
    });

    try {
        const savedUser = await newCounter.save();
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err })
    }
})
// update counter 
router.put('/:id', async (req, res) => {
    try {
        const counterUpdate = await Counter.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    type: req.body.type,
                    user: req.body.user,
                    adresse: req.body.adresse,
                }
            }
        )
        res.json(counterUpdate);
    } catch (err) {
        res.json({ message: err })
    }
})
// delete counter 
router.delete('/:id',async(req,res)=>{
    try {
        const deleteCounter=Counter.findByIdAndDelete(req.params.id);
        res.json(deleteCounter);
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;