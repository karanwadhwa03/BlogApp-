const express=require('express');
const router=express.Router();
const CREATE=require('./../controllers/createcontroller');
router.get('/',CREATE.get);
router.post('/',CREATE.post)




module.exports=router;