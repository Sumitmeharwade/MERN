const router=require('express').Router()
const Admin = require("../models/admin.model")

router.route('/').get((req,res)=>{
    Admin.find()
        .then(admin=>res.json(admin))
        .catch(err => res.status(400).json('Erro:'+ err));
})

module.exports=router;