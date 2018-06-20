const User = require('../models/users.js')
const Product = require('../models/products.js')
const bcrypt = require('bcrypt')

class UserController {
    register(req,res){
        User.findOne({email:req.body.email}, (err,userEmail) => {
            if(userEmail){
                return res.json({message: "email Taken!"})
            }
            else {
                let user = new User(req.body)
                user.save(function(error){
                    if (error){
                        return res.json({message: "register failed", err:error})
                    }
                    else {
                        return res.json(user)
                    }
                })
            }
        })
    }
    login (req,res){
        User.find({email:req.body.email}, (err,user) => {
            if(user){
                bcrypt.compare(req.body.password, user[0].password, function(err,result){
                    if (result){
                        req.session.user_id = user[0]._id
                        return res.json(user)
                    }
                    else {
                        return res.json({message: "wrong password", err:err})
                    }
                })
            }
            else {
                return res.json({message: "could not find user", err:err})
            }
        })
    }
    logout(req,res){
        req.session.user_id = null;
        console.log('was here');
        return res.json({message:"Logged out"})
    }
    getOne(req,res){
        User.findOne({_id:req.params.id})
        .populate({
            path:"listings",
            model:"Product"
        })
        .exec((err,user)=>{
            if(user){
                return res.json(user)
            }
            else{
                return res.json({message: "could not find user", err:err})
            }
        })
    }
    getAll(req,res){
        User.find({})
        .populate({
            path:"listings",
            model:"Product"
        })
        .exec((err,user)=>{
            if(user){
                return res.json(user)
            }
            else{
                return res.json({message: "could not find user", err:err})
            }
        })
    }
    currentUser(req,res){
        return res.json(req.session.user_id);
    }
}
module.exports = new UserController()