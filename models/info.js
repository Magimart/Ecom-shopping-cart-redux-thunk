import mongoose from 'mongoose'


const infoSchema = new mongoose.Schema({
    pageTitle: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: false,
    },   
    siteIntro: {
        type: String,
        required: true,
    },
}, 
   {timestamps: true,}

)


export default mongoose.models.Info || mongoose.model('Info', infoSchema);


