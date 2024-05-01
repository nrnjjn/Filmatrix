import express from 'express'
import Seekers from '../models/seekers.js';
import Addlocation from '../models/addlocation.js';
import jobrequest from '../models/jobrequest.js';
import Announcement from '../models/announcement.js';
import Addjob from '../models/addjob.js';
import category from '../models/category.js';
import { upload } from '../multer.js';

const router=express()



router.put('/acceptusers/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    console.log(req.body);
    let response=await Seekers.findByIdAndUpdate(id,req.body)
    console.log(response);
    }
    catch(e){
        res.json(e.message)
    }
})

router.post('/createcategory',upload.single('Image'),async(req,res)=>{
    try{
        console.log(req.body);
        let imagepath=req.file.filename
        req.body={...req.body,Image:imagepath}
    let response=new category(req.body)
    let ress = await response.save()
    res.json(ress)
    }
    catch(e){
        res.json(e.message)
    }
})

router.get('/viewcategory',async(req,res)=>{
    try{
    let response=await category.find()

    res.json(response)

    }
    catch(e){
        res.json(e.message)
    }
})
router.delete('/viewcategory/:id',async(req,res)=>{
    try{
    let response=await category.findByIdAndDelete(req.params.id)

    res.json(response)

    }
    catch(e){
        res.json(e.message)
    }
})

router.put('/editcategory/:id', upload.fields([{ name: 'Image' }]), async (req, res) => {
    try {
        let id = req.params.id;
        let updateData = {};
        
        if (req.files['Image']) {
            const image = req.files['Image'][0].filename;
            updateData.Image = image;
        }

        if (req.body.name) {
            updateData.name = req.body.name;
        }

        let response = await category.findByIdAndUpdate(id, updateData, { new: true }); // Ensure { new: true } to return the updated document

        res.json(response);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.get('/categorydetail/:id',async(req,res)=>{
    try{
        let id=req.params.id
        console.log(id);
        let response=await category.findById(id)
        console.log(response);
        res.json(response)
    }
    catch(e){
        res.json(e.message)
    
    }
})


router.get('/viewfilmcompany',async(req,res)=>{
    try{
    console.log(req.body);
    let response=await Seekers.find({userType:'filmcompany'})
    console.log(response);
    res.json(response)
    }
    catch(e){
        res.json(e.message)
    }

})




router.get('/viewhiringteam',async(req,res)=>{
    try{
    console.log(req.body);
    let response=await Seekers.find({userType:'hiringteam'})
    console.log(response);
    res.json(response)
    }
    catch(e){
        res.json(e.message)
    }

})




router.get('/viewlocationowner',async(req,res)=>{
    console.log(req.body);
    let response=await Seekers.find({userType:'locationowner'})
    console.log(response);
    res.json(response)

})




router.get('/viewlocationreq',async(req,res)=>{
    try{
    console.log(req.body);
    let response=await Addlocation.find()
    console.log(response)
    // res.json(response)
    let resposedata=[];
    for (const newrespose of response){
        let locationowner=await Seekers.findById(newrespose.userId);
console.log(locationowner);
        if(locationowner && locationowner.Name){

            resposedata.push({
                locationowner:locationowner,
                ownername:locationowner.Name,
                req:newrespose
            });
        }else{
            resposedata.push({
                locationowner:locationowner,
                req:newrespose
            }); 
        }
    }
    console.log(resposedata)
    res.json(resposedata)
}
catch(e){
    res.json(e.message)
}
})




router.get('/locationreqd/:id',async(req,res)=>{
    try{
        let id=req.params.id
        console.log(id);
        let response=await Addlocation.findById(id)
        console.log(response)
        let loc=await Seekers.findById(response.userId)
        res.json({response,loc})
    }
    catch(e){
        res.json(e.message)
    }
})




router.put('/managelocreq/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let response=await Addlocation.findByIdAndUpdate(id,req.body)
    console.log(response);
})




router.get('/viewseekers',async(req,res)=>{
    try{
    console.log(req.body);
    let response=await jobrequest.find({Status:'Accepted'})
    console.log(response);
    let responsedata=[];
    for(const newresponse of response){
        let user=await Seekers.findById(newresponse?.sId)
        let job=await Addjob.findById(newresponse?.jobId)
        let cat=await category.findById(job?.category)
        let anc=await Announcement.findById(job?.ancId)
        let fc=await Seekers.findById(anc?.companyId)
        let hiring=await Seekers.findById(job?.userId)
        responsedata.push({
            user:user,
            job:job,
            anc:anc,
            fc:fc,
            cat:cat,
            hiring:hiring,
            req:newresponse
        })
    }
    console.log(responsedata);
    res.json(responsedata)
    }
    catch(e){
        res.json(e.message)
    }

})


export default router
