import express from 'express'
import announcement from '../models/announcement.js'
import Announcement from '../models/announcement.js'
import { upload } from '../multer.js'
import Addlocation from '../models/addlocation.js'
import Seekers from '../models/seekers.js'
import Hiringrequest from '../models/hiringreq.js'
import Locationreq from '../models/locationfcreq.js'
import jobrequest from '../models/jobrequest.js'
import Addjob from '../models/addjob.js'
const router=express()


router.post('/addanc',upload.single('Image'),async(req,res)=>{
    try{
    console.log(req.file)
    let imagepath=req.file.filename
    const newAnnouncement = new announcement({...req.body,Image:imagepath})
    const savedAnnouncement = await newAnnouncement.save();
    res.json({message:"New Announcement",savedAnnouncement})
    }
    catch(e){
        res.json(e.message)
    }
})

router.put('/editanc/:id',upload.fields([{name:'Image'}]),async(req,res)=>{
    try{
    if(req.files['Image']){
        const image =  req.files['Image'][0].filename;  
        console.log(image)
        req.body={...req.body,Image:image}
    }
    let id=req.params.id
    console.log(req.body)
    let response=await Announcement.findByIdAndUpdate(id,req.body)
}
catch(e){
    res.json(e.message)
}
})

router.delete('/deleteanc/:id',async(req,res)=>{
    let id=req.params.id
    let response=await Announcement.findByIdAndDelete(id)
})

router.put('/hiringfeedbackput/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let response=await Hiringrequest.findByIdAndUpdate(id,req.body,{new:true})
    console.log(response);
    res.json(response)
    }
    catch(e){
        res.json(e.message)
    }

})


router.get('/viewanc/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    let response=await Announcement.find({companyId:id})
    console.log(response);
    res.json(response)
    }
    catch(e){
        res.json(e.message)
    }
})

router.get('/viewloc',async(req,res)=>{
    try{
    console.log(req.body);
    let response=await Addlocation.find({Status:'Accepted'})
    console.log(response)
    res.json(response)
    }
    catch(e){
        res.json(e.message)
    }
})

router.get('/viewlocd/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    let response=await Addlocation.findById(id)
    console.log(response)
    res.json(response)
    }
    catch(e){
        res.json(e.message)
    }
})

router.get('/viewhiringreq/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    console.log(req.body);
    let filmcompany=await Announcement.find({companyId:id})
    console.log(filmcompany,'----------');
    // res.json(response)
    let resposedata=[];
    for (const x of filmcompany){
        let response=await Hiringrequest.find({ancId:x._id})
        console.log(response,'xxxxxxxxxxxxxxxxx');
        for(const newresponse of response){
        let hiring=await Seekers.findById(newresponse.userId);
        let anc=await Announcement.findById(newresponse.ancId);
        resposedata.push({
            hiring:hiring,
            anc:anc,
            req:newresponse
        });
    }}
    console.log(resposedata)
    res.json(resposedata)
}
catch(e){
    res.json(e.message)
}
})





router.get('/viewhiringdetail/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    let response=await Hiringrequest.findById(id)
    console.log(response)
    let hiring=await Seekers.findById(response.userId)
    let anc=await Announcement.findById(response.ancId)
    res.json({response,hiring,anc})
    }
    catch(e){
        res.json(e.message)
    }
})

router.put('/manageHiring/:id',async (req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let response=await Hiringrequest.findByIdAndUpdate(id,req.body)
    console.log(response);
    }
    catch(e){
        res.json(e.message)
    }
})

router.put('/managelocreq/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let response=await Locationreq.findByIdAndUpdate(id,req.body)
    console.log(response);
    }
    catch(e){
        res.json(e.message)
        }
    
})

router.get('/viewlocreq/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let response = await announcement.find({ companyId: id });
        let resposedata = [];

        for (const newresponse of response) {
            let reqs = await Locationreq.find({ Filmname: newresponse.id });
            let announcements = [];

            for (const req of reqs) {
                let hiring = await Seekers.findById(req.hiringId);
                let loc = await Addlocation.findById(req.locationId);
                announcements.push({
                    hiring: hiring,
                    anc: newresponse,
                    loc: loc,
                    req: req
                });
            }

            resposedata.push(announcements);
        }

        console.log(resposedata);
        res.json(resposedata);
    } catch (e) {
        res.json(e.message);
    }
});

router.get('/viewlocreqd/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    let response=await Locationreq.findById(id)
    console.log(response)
    let hiring=await Seekers.findById(response.hiringId)
    let anc=await Announcement.findById(response.Filmname)
    let loc=await Addlocation.findById(response.locationId)
    res.json({response,hiring,anc,loc})
    // let resposedata=[];
    // for (const newrespose of response){
    //     let hiring=await Seekers.findById(newrespose.hiringId);
    //     let anc=await Announcement.findById(newrespose.Filmname);
    //     let loc=await Addlocation.findById(newrespose.locationId)
    //     resposedata.push({
    //         hiring:hiring,
    //         anc:anc,
    //         loc:loc,
    //         req:newrespose
    //     });
    // }
    // console.log(resposedata)
    // res.json(resposedata)
    }
    catch(e){
        res.json(e.message)
    }
})

router.get('/viewlocfname/:id',async(req,res)=>{
    try{
    let id=req.params.id
    let response=await Hiringrequest.find({userId:id,Status:'Accepted'})
    console.log(response)
    // res.json(response)
    let resposedata=[];
    for (const newrespose of response){
        let anc=await Announcement.findById(newrespose.ancId);
        let hiring=await Seekers.findById(newrespose.userId)
        let fc=await Seekers.findById(anc.companyId)
        resposedata.push({
            hiring:hiring,
            anc:anc,
            fc:fc,
            // loc:loc,
            req:newrespose
        });
    }
    console.log(resposedata)
    res.json(resposedata)
}
catch(e){
    res.json(e.message)
}
})


router.get('/viewprogress/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(req.body);
    let response=await Hiringrequest.find()
    console.log(response)
    // res.json(response)
    let resposedata=[];
    for (const newrespose of response){
        let hiring=await Seekers.findById(newrespose.userId);
        let anc=await Announcement.findById(newrespose.ancId);
        resposedata.push({
            hiring:hiring,
            anc:anc,
            req:newrespose
        });
    }
    console.log(resposedata)
    res.json(resposedata)
}
catch(e){
    res.json(e.message)
}
})


router.get('/viewjobseekers/:id', async(req,res)=>{
    try {
        let id = req.params.id;
        console.log(id);
        let anc = await Announcement.find({ companyId: id });
        // ----------------------------

        
        // return true
        
        let newrequest = [];
        let jobsArray = [];
        for(let x of anc){
            
            let jobs = await Addjob.find({ ancId: x._id });
            jobsArray.push(jobs)
        }
        console.log(jobsArray,'------jobs-----------');

        res.json(jobsArray);
return true

            // for(let y of job){
            //     let requests = await jobrequest.find({ jobId: y._id });
            //     let uniqueRequests = requests.filter((value, index, self) =>
            //         index === self.findIndex((t) => (
            //             t._id === value._id
            //         ))
            //     );
            //     newrequest = newrequest.concat(uniqueRequests);
            // }
        // }

        // Fetch data from Seekers and Addjob
        // for (let request of newrequest) {
        //     let seekerData = await Seekers.findById(request.sId);
        //     let jobData = await Addjob.findById(request.jobId);
        //     let ancData= await Announcement.findById(jobData.ancId);
        //     request.seekerData = seekerData;
        //     request.jobData = jobData;
        //     request.ancData = ancData;

        // }

    } catch(e) {
        res.status(500).json({ error: e.message });
    }
});


// router.get('/viewjobseekers/:id', async (req, res) => {
//     try {
//         let id = req.params.id;
//         let jobreq=await jobrequest.find()
//         console.log('1111111111111111',jobreq);
//         let anc = await Announcement.find({ companyId: id });
//         console.log('`````````````',anc);
//         let responsedata = [];
//         for (const newresponse of anc) {
//             let jobs = await Addjob.find({ ancId: newresponse.anc });
//             console.log('2222222222222',jobs,'0000000000000000');
//             for (let j of jobs) {
//                 let request = await jobrequest.find({ jobId: j._id });
//                 for (let r of request) {
//                     let users = await Seekers.findById(r.sId);
//                     responsedata.push({
//                         users: users,
//                         job: j,
//                         jobreq:jobreq,
//                         acc: newresponse,
//                         req: r
//                     });
//                 }
//             }
//         }

//         res.json(responsedata);
//     } catch (e) {
//         res.status(500).json({ error: e.message });
//     }
// });


export default router
