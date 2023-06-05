const data = require('../item_list.json');


const productCtr = {

    get: (req,res)=>{
        const proID = req.params.id;
        const produ = data.filter((product)=>{
            return proID == product.id;
        })
        res.send(produ);
    }
}

module.exports = productCtr;