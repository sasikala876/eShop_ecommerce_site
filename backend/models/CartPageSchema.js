const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    image: {
        type:String
    },
    name: {
        type:String
    },
  quantity: {
        type:Number
    },
    amount: {
        type:Number
    }
});

module.exports = mongoose.model('Cart',cartSchema);