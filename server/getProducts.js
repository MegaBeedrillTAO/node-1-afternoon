
const products = require("../products.json");


const getProducts =  (req,res) =>{
    
    if (req.query.price){
        res.status(200).send(products.filter(el =>{
            return el.price >= parseInt(req.query.price);
        }));
    }
    else{
        res.status(200).send(products);
    }

    
}


module.exports = getProducts;
