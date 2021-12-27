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
    
    
        const { fName, sName, country, address, email, password } = req.body;
    
        const user = await User.create({
            fName,
            sName,
            country,
            address,
            email,
            password,
            avatar: {
                public_id: result.public_id,
                url: result.secure_url
            }
        });
    
    
        res.status(200).json({
            success: true,
            message: 'Your are successfully registered'
        })
    } catch (error) {
        console.log(error)
    }
    
    });
    
    // Get all users   =>   /api/users
    const allAdminUsers = catchAsyncErrors(async (res) => {

        const users = await User.find();
    
        res.status(200).json({
            success: true,
            users
        })
    
    });
    

    const currentUserProfile = catchAsyncErrors(async (req, res) => {
     
    
       const user  = await User.findById(req.user._id);
        
       res.status(200).json({
           message:true,
           user
       })

    });
    

        // Update user profile  =>   /api/me/update-profile     ____ok
const UpdateUserProfile = catchAsyncErrors(async (req, res) => {
            
   
   const user = await User.findById(req.user._id);
          
       if(user){
              user.fName =  req.body.fName;
              user.sName =  req.body.sName;
              user.email =  req.body.email;
          if(req.body.password) user.password = req.body.password; 
       }

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
    
    
    //___________________________check controllers for bugs
    // Get user details  =>   /api/admin/users/:id
const getUserDetails = catchAsyncErrors(async (req, res) => {

    const user = await User.findById(req.query.id);
        if (!user) {
            return next(new ErrorHandler('User not found with this ID.', 400))
        }
        res.status(200).json({
            success: true,
            user
    })

})

// Update user details  =>   /api/admin/users/:id
const updateUser = catchAsyncErrors(async (req, res) => {

    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    }

    const user = await User.findByIdAndUpdate(req.query.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        user
    })

})

// Delete user    =>   /api/admin/users/:id
const deleteUser = catchAsyncErrors(async (req, res) => {

    const user = await User.findById(req.query.id);

    if (!user) {
        return next(new ErrorHandler('User not found with this ID.', 400))
    }

    // Remove avatar 
    const image_id = user.avatar.public_id;
    await cloudinary.v2.uploader.destroy(image_id)


    await user.remove();

    res.status(200).json({
        success: true,
        user
    })

})

    export{
        allAdminUsers, 
        registerUser, 
        UpdateUserProfile,
         currentUserProfile,
         updateUser,
         deleteUser,
         getUserDetails
    }



