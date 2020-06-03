const setColor = function(color){

    return {
        type: 'COLOR_CHANGE',
        color: color    
    };
};



const navigate = function(componentToRender){

    return {
        type:'NAVIGATION',
        component:componentToRender
    }
};


const logInUser = function(){

    return{
        type:'LOG_IN_USER',
        isLoggedIn:true
    }

};

const logOutUser = function(){

    return{
        type:'LOG_OUT_USER',
        isLoggedIn:false
    }

};



module.exports = {navigate, logInUser, logOutUser};