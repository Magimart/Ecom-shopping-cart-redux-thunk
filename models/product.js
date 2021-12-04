
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter painting name'],
        trim: true,
        maxLength: [100, 'painting name cannot exceed 100 characters']
    },
    artistName: {
        type: String,
        required: [false, 'Please enter artist name of this painting'],
        trim: true,
        maxLength: [100, 'painting name cannot exceed 100 characters']
    },
    countryOfArtist: {
        type: String,
        required: [true, 'Please enter your country of origin'],
    },
    address: {
        type: String,
        required: [false, 'enteryour address, note that your infomation will be kept private'],
    },
    price: {
        type: Number,
        required: [true, 'Please enter room price per night'],
        maxLength: [4, 'painting name cannot exceed 4 characters'],
        default: 0.0
    },
    countInStock:{
        type:Number,
        required:true
    },
    description: { 
        type: String,
        required: [true, 'Please enter painting description'],
    },
     medium: {   //---forcategori
        type: String,
        required: [true, 'Please enter painting medium'],
        enum: {
            values: [
                'mixed medium',
                'acrylics on canvas',
                'oils on canvas'
            ],
            message: 'Please select alteat one medium'
        }
    },
    category: {   //---forcategori
        type: String,
        required: [true, 'Please enter painting medium'],
        enum: {
            values: [
                'painting',
                'sculpture',
                'wall hanging'
            ],
            message: 'Please select alteat one medium'
        }
    },

    imagesOfPainting: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    numOfReviews: [
        {
            // user: {
            //     type: mongoose.Schema.ObjectId,
            //     ref: 'User',
            //     required: true
            // },
            name: { //name of the user rating
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
  
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'User',
    //     required: false
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);





