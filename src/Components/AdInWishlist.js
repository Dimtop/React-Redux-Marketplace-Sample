import React, { Component } from 'react';


class AdInWishlist extends Component{



    constructor(props){
        super(props);
    }


    render(){
        return(

            <div style={{display:'grid', gridTemplateColumns:'5fr 3fr', columnGap:'1em', marginBottom:'2rem', marginTop:'2rem'}}>
                <div>
                    <div className='input-field'>
                        <input value='Math lessons at home' id="first_name" type="text" className="validate inputNoMargin" />
                    </div>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr',gridAutoRows:'3rem'}}>
                    <div className="input-field">
                        <a className="waves-effect waves-teal btn-small">View ad</a>
                    </div>
                    <div className="input-field">
                        <a className="waves-effect waves-teal btn-small" style={{backgroundColor:'red'}}>Remove</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default AdInWishlist;