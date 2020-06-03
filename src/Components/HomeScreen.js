import React, { Component } from 'react';

import Ad from './Ad';

class HomeScreen extends Component{

    constructor(props){
        super(props);
    }




    render(){
        return(

            <div id='adsContainer'>
                <Ad/>
                <Ad/>
                <Ad/>
                <Ad/>
            </div>
        );
    }
}


export default HomeScreen;