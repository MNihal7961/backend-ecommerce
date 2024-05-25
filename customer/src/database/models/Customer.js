const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    email: String,
    password: String,
    salt: String,
    phone: String,
    address: [
        { type: Schema.Types.ObjectId, ref: 'address', require: true }
    ],
    cart: [
        {
            product: {
                _id: {
                    type: String,
                    required: true,
                    price: Number
                },
                name: {
                    type: String,
                    required: true
                },
                price: Number
            },
            unit: {
                type: Number,
                required: true
            }
        }
    ],
    wishlist: [
        {
            _id: {
                type: String,
                required: true,
                price: Number
            },
            name: {
                type: String,
                required: true
            },
            description: String,
            available: Boolean,
            price: Number
        }
    ],
    orders: [
        {
            _id: {
                type: String,
                required: true,
                price: Number
            },
            amount: String,
            date: {
                type: Date,
                default: Date.now()
            }
        }
    ]
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.password;
            delete ret.salt;
            delete ret.__v;
        }
    },
    timestamps: true
});

module.exports = mongoose.model('customer', CustomerSchema);