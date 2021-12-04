import cloudinary from 'cloudinary';
import catchAsyncErrors from '../../middlewares/catchAsyncErrors';
import Info from '../../models/info';






// Get all infos   =>   /api/app_info
const allInfos = catchAsyncErrors(async (req, res) => {

    const users = await Info.find({}).exec();

    res.status(200).json({
        success: true,
        users
    })

})




// // Get room details   =>   /api/rooms/:id
// const getInfoById = catchAsyncErrors(async (req, res, next) => {

//     const info = await Info.findById(req.query.id);

//     console.log("here is the info matching yours")

//     if (!info) {
//         return next(new ErrorHandler('no info found with this ID', 404))
//     }

//     res.status(200).json({
//         success: true,
//         room
//     })
// })


 // publish info   =>   /api/publish_info/publish-app-info
 const PublishAboutInfo = (async (req, res) => {
    
    try {

        const { pageTitle, subTitle, siteIntro } = req.body;
    
        const info = await Info.create({
            pageTitle,
            subTitle ,
            siteIntro
        });
    
      console.log("here is the info to be published")
     console.log(info)
    
        res.status(200).json({
            success: true,
            message: 'Your are article has been published'
        })
    } catch (error) {
        console.log(error)
    }
    
    }); 

    export{
        PublishAboutInfo, allInfos
    }



