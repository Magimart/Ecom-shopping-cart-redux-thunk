import User from '../../models/user';
import cloudinary from 'cloudinary';
import catchAsyncErrors from '../../middlewares/catchAsyncErrors';
// import Info from '../../models/info';

// Setting up cloudinary config

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



const registerUser = (async (req, res) => {
    
    try {
        console.log(req.body.avatar);
    
        const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'portfolioApp/avatar',
            width: '150',
            crop: 'scale'
        });
    
        console.log(result)
    
        const { fName, sName, email, password } = req.body;
    
        const user = await User.create({
            fName,
            sName,
            email,
            password,
            avatar: {
                public_id: result.public_id,
                url: result.secure_url
                //  public_id: 'PUBLIC-ID',
                //  url: 'Url'
            }
        });
    
      console.log("here is the user at the regi register router")
     console.log(user)
    
        res.status(200).json({
            success: true,
            message: 'Your are successfully registered'
        })
    } catch (error) {
        console.log(error)
    }
    
    });
    
    // Get all users   =>   /api/users
    const allAdminUsers = catchAsyncErrors(async (req, res) => {

        const users = await User.find();
    
        res.status(200).json({
            success: true,
            users
        })
    
    });
    

    const currentUserProfile = catchAsyncErrors(async (req, res) => {
     
         console.log("user is current user online")
         console.log(req.user)
       const user  = await User.findById(req.user._id);
        
       res.status(200).json({
           message:true,
           user
       })

    });
    

        // Update user profile  =>   /api/me/update-profile
const UpdateUserProfile = catchAsyncErrors(async (req, res) => {
            
    // const { fName, sName, email, password } = req.user;
    //    const user  = await User.findOne({email});
   const user = await User.findById(req.user._id);
          
       if(user){
              user.fName =  req.body.fName;
              user.sName =  req.body.sName;
              user.email =  req.body.email;
          if(req.body.password) user.password = req.body.password; 
       }
    //   update profile avatar image

       if(req.body.avatar !== ""){
           const newImage_id = user.avatar.public_id;

           // delete old previous profile image
           await cloudinary.v2.uploader.destroy(newImage_id);
            
           const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'portfolioApp/avatar',
             width: '150',
             crop: 'scale'
            });

            user.avatar = {
                public_id: result.public_id,
                url: result.secure_url
            }
        }
        await user.save();

        res.status(200).json({
            success: true
        });
    });
    
    

    export{
        allAdminUsers, registerUser, UpdateUserProfile, currentUserProfile
    }



