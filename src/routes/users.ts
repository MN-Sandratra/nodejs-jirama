import express from "express";
const router = express.Router();
const User = require('../models/users');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const selectedUser= await User.findById(req.params.id);
        res.json(selectedUser);
    } catch (err) {
        res.json({ message: err});
    }
})

router.post('/', async (req, res) => {
    const user = new User({
        nom: req.body.nom,
        prenom: req.body.prenom,
        telephone: req.body.telephone,
        adresse: req.body.adresse,
        commune: req.body.commune,
        agence: req.body.agence,
        sexe: req.body.sexe,
        username: req.body.username,
        password: req.body.password
    })
    try {
        const savedUser = await user.save();
        res.json(savedUser)
    } catch (err) {
        res.json({ message: err })
    }
});
//modify user
router.put('/:id', async (req, res) => {
    try {
        const userUpdate = await User.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    telephone: req.body.telephone,
                    adresse: req.body.adresse,
                    commune: req.body.commune,
                    agence: req.body.agence,
                    sexe: req.body.sexe,
                    username: req.body.username,
                    password: req.body.password
                }
            }
        )
        res.json(userUpdate);
    } catch (err) {
        res.json({ message: err })
    }
})

//delete user
router.delete('/:id', async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete({ _id: req.params.id })
        res.json(deleteUser);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;

