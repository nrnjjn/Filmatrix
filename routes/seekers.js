import express from 'express'
import Seekers from '../models/seekers.js'
import Addpreviouswork from '../models/addpreviouswork.js'
import { upload } from '../multer.js'

const router=express()


router.post('/register',upload.fields([{name:'Idproof'},{name:"Liscence"}]),async(req,res)=>{
    try{
    console.log(req.files)
    
    if(req.files['Idproof']){
        const idproof = req.files['Idproof'][0].filename
        req.body={...req.body,Idproof:idproof}
    }
    if(req.files['Liscence']){

        const liscence =  req.files['Liscence'][0].filename;  
        console.log(liscence)
        req.body={...req.body,Liscence:liscence}
    }
    const newSeekers = new Seekers(req.body)
    const savedSeekers = await newSeekers.save();
    console.log(newSeekers,'new user');
    res.json({message:"Registration",savedSeekers})
}
catch(e){
    console.log(e);
    res.json(e.message)
}
})

router.post('/login',async(req,res)=>{
    try{
    console.log(req.body);
    let users=await Seekers.findOne(req.body)
    console.log(users)
    res.json(users)
}
catch(e){
res.json(e.message)
}
})

router.post('/addpreviouswork',async(req,res)=>{
    try{
        console.log(req.body);
        const newPreviouswork = new Addpreviouswork(req.body)
        const savedPreviouswork = await newPreviouswork.save()
        res.json({message:"Previous Work",savedPreviouswork})

    }
    catch(e){
        res.json(e.message)
    }
})

router.get('/viewprofile/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id)
    let response=await Seekers.findById(id)
    console.log(response);
    res.json(response)
})

router.put('/editprofile/:id',upload.fields([{name:'Liscence'}]),async(req,res)=>{
    try{

    
    if(req.files['Liscence']){
        const liscence =  req.files['Liscence'][0].filename;  
        console.log(liscence)
        req.body={...req.body,Liscence:liscence}
    }
    let id=req.params.id
    console.log(req.body)
    let response=await Seekers.findByIdAndUpdate(id,req.body)
}
catch(e){
    res.json(e.message)
}
})

export default router