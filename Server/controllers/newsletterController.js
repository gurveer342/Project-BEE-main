//GET NEWSLETTER , POST NEWSLETTER

const asyncHandler = require("express=asunc-handler");
const Newsletterr = require("../models/newsletterModel");

const getNewsletter = asyncHandler(async(req,res)=>{
        try{
            const data = await Newsletterr.find({});
            
        }catch(err){
            return res.status(404).json({err:err.message})
        }
});

const createNewsletter = asyncHandler(async(req,res)=>{
    
})

module.exports = {getNewsletter,createNewsletter}