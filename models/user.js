  
import mongoose from 'mongoose'
import validator from 'validator'
 import bcrypt from 'bcryptjs'
// import crypto from 'crypto'

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [50, 'Your name must be less 50 characters']
    },
    sName: {
        type: String,
        required: false,
        maxLength: [20, 'Your name must be less 50 characters']
    },
    country: {
        type: String,
        required: true,
        maxLength: [20, 'Your country must be less 100 characters'] //select field
    },
    address: {
        type: String,
        required: true,
        maxLength: [300, 'Your address must be less 300 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [5, 'Your password must be longer than 6 characters'],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: false //__________ch to true
        },
        url: {
            type: String,
            required: false
        }
    },
    
    role: {
        type: String,
        default: 'user',
        enum:["user",'admin', 'touroperator', 'root']  //!!rewiew
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
});

// Encryp password if modified  and save
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        console.log("below use this object keyword-----------------------------------<<")
        console.log(this)

        next()
    } 
    console.log("below use this object keyword-----------------------------------<<")
  let user =  this.password = await bcrypt.hash(this.password, 10)
  console.log(user)

});

// console.log(userSchema.methods)


// Compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}



export default mongoose.models.User || mongoose.model('User', userSchema)
