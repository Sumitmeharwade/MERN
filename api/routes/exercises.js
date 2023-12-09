const router = require('express').Router();
const Exercises = require('../models/exercises.model');


router.route('/').get((req,res)=>{
    Exercises.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Erro:'+ err));
});

router.route('/add').post()
module.exports = router;