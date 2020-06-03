module.exports = function(req,res){
    if(req.cookies.email && req.cookies.password){
        res.send({isLoggedIn:true});
    }
    else{
        res.send({isLoggedIn:false});
    }
};