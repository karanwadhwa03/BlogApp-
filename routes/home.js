const express=require('express')
const router=express.Router();
const CONTROL=require('./../controllers/homecontrol')

router.get('/',CONTROL.get)
router.get('/blogs/:id',CONTROL.getsingle)
router.post('/delete',CONTROL.delete)
router.get('/update/:id',CONTROL.update)

router.post('/update',CONTROL.updatepost)

module.exports=router;


