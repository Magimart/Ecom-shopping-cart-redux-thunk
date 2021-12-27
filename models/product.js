
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter painting name'],
        trim: true,
        maxLength: [100, 'painting name cannot exceed 100 characters']
    },
    // artistName, countryOfArtist, countryOfArtist => ref: user,    
    user: {  //____user who created the safari
        type: mongoose.Schema.ObjectId,
        ref:'User',
        required: true
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
                'oils on canvas',
                'ink on paper',
                'fabrics',
                'ceramics',
                'photography'
            ],
            message: 'Please select alteat one medium'
        }
    },
    dimenssion:{
        width: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        }
    },
    category: {   //---forcategori
        type: String,
        required: [true, 'Please enter painting medium'],
        enum: {
            values: [
                'painting',
                'sculpture',
                'wall hanging',
                'water colours',
               'photography', 'fabrics','ceramics'
            ],
            message: 'Please select alteat one medium'
        }
    },

    // imagesOfPainting: [
    imagesOfProduct: [
   
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





