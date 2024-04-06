import express, { json } from 'express'
import Addjob from '../models/addjob.js';
import Announcement from '../models/announcement.js';
import Hiringrequest from '../models/hiringreq.js';
import Locationreq from '../models/locationfcreq.js';
import Addlocation from '../models/addlocation.js';
import Seekers from '../models/seekers.js';
import Payment from '../models/payment.js';
import jobrequest from '../models/jobrequest.js';
import Addpreviouswork from '../models/addpreviouswork.js';
const router=express()

router.post('/addjob',async(req,res)=>{
    try{
    console.log(req.body);
    const newAddjob = new Addjob(req.body)
    const savedAddjob = await newAddjob.save();
    res.json({message:"New Job",savedAddjob})
    }
    catch(e){
        res.json(e.message)
            }
})

router.put('/editjob/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let response=await Addjob.findByIdAndUpdate(id,req.body)
    console.log(response)
    res.json(response)
    }
    catch(e){
        res.json(e.message)
    }
})

router.get('/viewjob/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(req.body);
    let response=await Addjob.find({userId:id})
    console.log(response)
    let responsedata=[];
    for(const newresponse of response){
        let anc=await Announcement.findById(newresponse.ancId);
        responsedata.push({
            anc:anc,
            req:newresponse
        })
    }
    console.log(responsedata)
    res.json(responsedata)
}
catch(e){
    res.json(e.message)
}
})

router.get('/viewjobd/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    let response=await Addjob.findById(id)
    console.log(response);
    res.json(response)
    }
    catch(e){
        res.json(e.message)
    }
})

router.get('/viewanc',async(req,res)=>{
    try{
    console.log(req.body);
    let response=await Announcement.find()
    console.log(response)
    res.json(response)
    }
    catch(e){
        res.json(e.message)
    }
})

router.get('/viewancd/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    let response=await Announcement.findById(id)
    console.log(response)
    res.json(response)
}
catch(e){
    res.json()
}

})

router.post('/posthiringreq',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(req.body);
    const newHiringreq = new Hiringrequest(req.body)
    const savedHiringreq = await newHiringreq.save();
    res.json({message:"Hiring team request",savedHiringreq})
    }
    catch(e){
        res.json(e.message)
            }
})




router.post('/locreq',async(req,res)=>{
    try{
        let id=req.params.id
        console.log(req.body);
        const newLocreq = new Locationreq(req.body)
        const savedLocreq = await newLocreq.save();
        res.json({message:"Location request",savedLocreq})
 
        }
        catch(e){
            res.json(e.message)
                }
})

router.get('/locreqst/:id',async(req,res)=>{
    try{
        let id=req.params.id
    console.log(req.body);
    let response=await Locationreq.find({hiringId:id})
    console.log(response);
    let responsedata=[];
    for (const newresponse of response){
        let film=await Announcement.findById(newresponse.Filmname);
        let loc=await Addlocation.findById(newresponse.locationId);
        responsedata.push({
            film:film,
            loc:loc,
            req:newresponse
        })
    }
    console.log(responsedata)
    res.json(responsedata)
}
catch(e){
    res.json(e.message)
}
})

router.get('/viewhreq/:id',async(req,res)=>{
    try{
        let id=req.params.id
        console.log(id);
        let response=await Hiringrequest.find({userId:id})
        console.log(response)   
        let responsedata=[];
    for (const newresponse of response){
        let film=await Announcement.findById(newresponse.ancId);
        let companyName=await Seekers.findById(film.companyId);
        responsedata.push({
            film:film,
            companyName :companyName.companyName,
            req:newresponse
        })
    }
    console.log(responsedata)
    res.json(responsedata)
    }
    catch(e){
        res.json(e.message)
    }
})


// router.post('/addprogress',async(req,res)=>{
//     try{
//     let id=req.params.id
//     console.log(req.body);
//     const newaddProgress = new Progress(req.body)
//     const savedProgress=await newaddProgress.save();
//     res.json({message:"Add progress",savedProgress})
//     }
//     catch(e){
//         res.json(e.message)
//     }
// })

router.put('/hiringprogress/:id',async(req,res)=>{
    console.log('server');
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let response=await Hiringrequest.findByIdAndUpdate(id,req.body,{new:true})
    console.log(response);
    res.json(response)

})

// router.get('/viewfilmcompany/:id',async(req,res)=>{
//     try{
//         let id=req.params.id
//         console.log(req.body);
//         let response=await Announcement.find()
//         console.log(response)
//         let responsedata=[];
//         for(const newresponse of response){
//             let film=await Seekers.findById(newresponse.companyId)
//             responsedata.push({
//                 companyName:film.companyName,
//                 req:newresponse
//             })
//         }
//         console.log(responsedata);
//         res.json(responsedata)
//     }
//     catch(e){
//         res.json(e.message)
//     }
// })

router.post('/addpayment/:id',async(req,res)=>{
    try{
        let id=req.params.id
        console.log(req.body);
        const newpayment = new Payment(req.body)
        const savedpayment = await newpayment.save();
        res.json({message:"New payment",savedpayment})
        }
        catch(e){
            res.json(e.message)
                }
})

router.get('/viewjobreq/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(req.body);
    let job=await Addjob.find({userId:id})
    
    // console.log({job,request})
    // res.json(response)
    let responsedata=[];
    for (const newresponse of job){
        let request=await jobrequest.find({jobId:newresponse._id})
        for(const j of request){
            let seeker=await Seekers.findById(j.sId);
            let jobb=await Addjob.findById(j.jobId);
            let hiring=await Seekers.findById(jobb.userId)
            let anc=await Announcement.findById(jobb.ancId)
            responsedata.push({
                seeker:seeker,
                jobb:jobb,
                hiring:hiring,
                anc:anc,
                status:j.Status,
                date:j.Date,
                
            })
        }
        // console.log(request,'fghjednjenjne');
    //     let film=await Announcement.findById(job.ancId)
    //     let hiring=await Seekers.findById(job.userId)
    // responsedata.push({
    //         // seeker:seeker,
    //         request:request
    // //         film:film,
    // //         hiring:hiring,
    // //         req:newrespose
    //     });
    }
    // }
    console.log(responsedata)
    res.json(responsedata)
}

catch(e){
    res.json(e.message)
}
})


router.get('/viewpwk/:id',async(req,res)=>{
    console.log(req.body);
    let response=await Addpreviouswork.find()
    console.log(response)
    res.json(response)
})

router.get('/viewpwkd/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await Addpreviouswork.findById(id)
    console.log(response)
    res.json(response)
})

router.put('/managejobreq/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let response=await jobrequest.findByIdAndUpdate(id,req.body)
    console.log(response);
})

export default router