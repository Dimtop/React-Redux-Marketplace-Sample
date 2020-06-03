import React, { Component } from 'react';


class Message extends Component{


    constructor(props){
        super(props);
    }




    render(){

        return(
            <div style={{margin:'1em'}}>
                <div>
                    <p style={{fontWeight:'bold'}}>From: Topalidis Dimitrios</p>
                </div>
                <div >
                    <p>In all of these examples I have been working in English, which is a left-to-right language. This means that our start lines are top and left of our grid when thinking in physical directions.</p>
                </div>
                <div className="input-field">
                    <input placeholder='Your message' id="first_name"    className="validate" />
                </div>
                <div className="input-field" style={{textAlign:"right"}}>
                    <a className="waves-effect waves-teal btn-flat">Reply</a>
                </div>
            </div>
        );
    }
}


export default Message;