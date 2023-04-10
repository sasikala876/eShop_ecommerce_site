const cartDB = require('../models/CartPageSchema.js');

//to post the data
const cartDetailsPost = (req,res) => {
    var cartData = new cartDB(
        {
           image: req.body.image,
           name: req.body.name,
            quantity: req.body.quantity,
          amount: req.body.amount
        }
    );
    cartDB.create(req.body)
    .then(cartDetails => res.json(cartData))
    .catch(err => res.json({ error: 'Unable to post the cart datas'}))
}

module.exports = { cartDetailsPost };