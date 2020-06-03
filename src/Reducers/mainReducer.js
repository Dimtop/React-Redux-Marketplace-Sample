import HomeScreen from "../Components/HomeScreen";
import React, { Component } from 'react';
import HeaderBar from "../Components/HeaderBar";

const initialState = {
    currentComponent: 
    <div>
           <HeaderBar/>
            <HomeScreen/>
    </div>,
    isLoggedIn: false
 
};

const mainReducer = function(state = initialState, action){
    switch (action.type){
        case 'COLOR_CHANGE':
            return Object.assign({}, state, {
                color:action.color
            });
        case 'NAVIGATION':  
            return Object.assign({},state,{
                currentComponent:action.component
            });
        case 'LOG_IN_USER':
            return Object.assign({},state,{
                isLoggedIn:action.isLoggedIn
            });
        case 'LOG_OUT_USER':
            return Object.assign({},state,{
                isLoggedIn:action.isLoggedIn
            });
        default:
            return state;
    }
}



export default mainReducer;