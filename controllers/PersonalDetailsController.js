const pDetailsDB = require('../models/PersonalDetailsSchema.js');

//to post the data
const pDetailsPost = (req,res) => {
    var personalData = new pDetailsDB(
        {
            firstName:req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            confirmEmail: req.body.confirmEmail
        }
    );
    pDetailsDB.create(req.body)
    .then(pDetails => res.json(personalData))
    .catch(err => res.json({ error: 'Unable to post the data'}))
}

module.exports = { pDetailsPost };