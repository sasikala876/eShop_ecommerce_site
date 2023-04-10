const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aDetailsSchema = new Schema({
    addrType: {
        type:String,
        required:true
    },
    addr1: {
        type:String,
        required:true
    },
   addr2: {
        type:String
    },
    city: {
        type:String,
        required:true
    },
   state: {
        type:String
    },
    pinCode: {
        type:String,
        required:true
    },
    phone: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('AddressDetails',aDetailsSchema);