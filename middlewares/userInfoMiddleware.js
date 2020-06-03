const mongoose = require('mongoose');
const UserModel = require('../models/UserModel');



module.exports =   function auth(req,res){

    UserModel.findOne({email:req.query.email},(err,user)=>{
        if(err){
            console.log(err);
            return;
        }
        else{
            if(user){
                res.send({error:'',user:user})
            }
            else{
                res.send({error:'No user was found. Please try again.',user:null});
            }
        }
    });



   

    //mongoose.connection.close();
    
};  