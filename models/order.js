import mongoose from 'mongoose';
//  import timeZone from 'mongoose-timezone';

const orderSchema = new mongoose.Schema({
    
    purchasedProduct:[{
        _id: {
             type: mongoose.Schema.Types.ObjectId,
             required: false, //___ch_____!!
             ref: 'Product',
        },
        title: {type: String },
        price: {
                type: Number,
                required: true,
        },
        qty: {type: Number },
    }],
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,  //______ch_______!!
        ref: 'User'
    },
    amountPaid: {
        type: Number,
        required: false, //______ch_______!!
    },

    shippingAddress: {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zip: {
            type: Number,
            required: true,
        },
        country: {
            type: String,
            required: true,
        }
    },

    paymentMethod: {
        id: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: false,  //_____ch________!!
        }
    },

    paidAt: {
        type: Date,
         required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

//    orderSchema.plugin(timeZone);

export default mongoose.models.Order || mongoose.model('Order', orderSchema)