import React, { Component } from 'react';

import {
    Link
  } from "react-router-dom";


class LoggedInRedirectPrompt extends Component{

    constructor(props){
        super(props);

        this.state={
            shouldRedirect:false
        }
    }




    render(){
        return (
            <div id='loginScreenContainer'>
                
            <div  id='loginForm'>
               
                <div className='card' id="userMessages" style={{height:'100%',textAlign:'center'}}>
                    <div className='card-content' style={{display:'grid', gridTemplateColumns:'1fr', justifyItems:'center',alignItems:'center'}}>
                        <div>
                            <p>You have already logged in.</p>
                            <Link className='waves-effect waves-teal btn-flat'  style={{margin:'0'}} to="/">
                                Click here to redirect to the home page
                            </Link>
                        </div>
                     
                        
                    </div>
                </div>
                
            </div>
     
        </div>
        );
    }
}

export default LoggedInRedirectPrompt;