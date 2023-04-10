const aDetailsDB = require('../models/AddressDetailsSchema.js');

//to post the data
const aDetailsPost = (req,res) => {
    var addressData = new aDetailsDB(
        {
           addrType: req.body.addrType,
            addr1: req.body.addr1,
            addr2: req.body.addr2,
            city: req.body.city,
            state: req.body.state,
            pinCode: req.body.pinCode,
            phone: req.body.phone
        }
    );
    aDetailsDB.create(req.body)
    .then(aDetails => res.json(addressData))
    .catch(err => res.json({ error: 'Unable to post the address data'}))
}

module.exports = { aDetailsPost };