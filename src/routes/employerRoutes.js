const express=require('express')
const router=express.Router();
const {sginIn,sginUp}=require('../controllers/employerControllers')





router.post('/sginup',sginUp);
router.post('/sginin',sginIn);


module.exports=router