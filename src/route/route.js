const express=require("express");
const router=express.Router()
const sampleController = require("../controller/getdata");
const addSample= require("../controller/postSample")

router.get("/sample",sampleController.getSample)

router.post("/createsample",addSample.createSample)


module.exports=router;