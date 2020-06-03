const mongoose = require('mongoose');
const UserModel = require('../models/UserModel');



module.exports =   function auth(req,res){

    UserModel.find({email:req.body.data.email,password:req.body.data.password},(err,users)=>{
        if(err){
            console.log(err);
            return;
        }
        else{
            if(users.length > 0){
                res.cookie('email',users[0].email);
                res.cookie('password',users[0].password);
                res.send({error:''})
            }
            else{
                res.send({error:'No user was found. Please try again.'});
            }
        }
    });



   

    //mongoose.connection.close();
    
};  