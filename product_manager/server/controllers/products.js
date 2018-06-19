const Product = require('../models/products.js')
class ProductController {
    all( req,res ){
        Product.find({}, function (err, products){
            if (err){
                return res.json({message: "Could not find Products", error: err})
            }
            else {
                return res.json(products)
            }
        })
    }
    getOne(req,res){
        Product.findById(req.params.id, function(err, product){
            if (err){
                return res.json({message: "Could not find Product: "+req.params.id, error: err})
            }
            else{
                return res.json(product)
            }
        })
    }
    update(req,res){
        Product.findById(req.params.id, function(err, product){
            if (err){
                return res.json({message: "Could not find Product: "+req.params.id, error: err})
            }
            else{
                product.title = req.body.title || product.title;
                product.price = req.body.price || product.price;
                product.image = req.body.image || product.image;
                product.save(function(err){
                    if (err){
                        return res.json({message: "Could not update Product: "+req.params.id, error: err})
                    }
                    else{
                        return res.json(product)
                    }
                })
            }
        })
    }
    delete(req,res){
        Product.findById(req.params.id, function (err,product){
            if (err){
                return res.json({message: "Could not find Product: "+req.params.id, error: err})
            }
            else {
                Product.remove({_id:req.params.id}, function(err){
                    if (err){
                        return res.json({message: "Could not remove Product"+req.params.id, error: err})
                    }
                    else{
                        return res.json(product)
                    }
                })
            }
        })
    }
    create(req,res){
        var product = new Product(req.body)
        product.save(function(err){
            if (err){
                return res.json({message: "Could not create Product", error: err})
            }
            else{
                return res.json(product)
            }
        })
    }
}
module.exports = new ProductController()