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






 // publish info   =>   /api/publish_info/publish-app-info
 const PublishAboutInfo = (async (req, res) => {
    
    try {

        const { pageTitle, subTitle, siteIntro } = req.body;
    
        const info = await Info.create({
            pageTitle,
            subTitle ,
            siteIntro
        });
    
    
        res.status(200).json({
            success: true,
            message: 'Your are article has been published',
            info
        })
    } catch (error) {
        console.log(error)
    }
    
    }); 

    export{
        PublishAboutInfo, allInfos
    }



