import React, { Component } from 'react';




class Ad extends Component{

    constructor(props){
        super(props);
    }



    render(){
        return(
            <div className='card'>
              <div className='card-image'>
                <img src='https://materializecss.com/images/sample-1.jpg'/>
                <span className="card-title">Sample ad</span>
              </div>
              <div className='card-content'>
                This is a sample ad.
              </div>
            </div>  
        );
    }
}


export default Ad;