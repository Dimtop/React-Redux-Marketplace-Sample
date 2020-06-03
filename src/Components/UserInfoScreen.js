import React, { Component } from 'react';
import Message from './Message';
import AdRecord from './AdRecord';
import AdInWishlst from './AdInWishlist';

class UserInfoScreen extends Component{




    constructor(props){
        super(props);
    }


    componentWillMount(){

        var email = document.cookie.split('; ').find(row => row.startsWith('email')).split('=')[1].replace('%40','@');
        console.log(email);
        fetch('/api/users?email=' + email, {
            method: 'GET',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then( res => res.json())
        .then(data =>{
            console.log(data);
            if(data.error == ''){
                console.log('User: ' + data.user);
            }
            else{
                console.log(data.error);
            }
        })
    }

    render(){
        return(

            <div id="userInfoContainer">
                <div>
                    <div className='card' id="userInfo" style={{height:'100%'}}>
                        <div className='card-content'>
                            <div>
                                <h5 style={{margin:'1em'}}>User Info</h5>
                            </div>
                            <div className="input-field">
                                <input placeholder='Your email' id="first_name" type="text" className="validate" style={{width:'50%', margin:'1em'}}/>
                                <label htmlFor="first_name" style={{margin:'1em'}}>Email</label>
                            </div>
                            <div className="input-field">
                                <input placeholder='Your username' id="first_name" type="text" className="validate" style={{width:'50%', margin:'1em'}}/>
                                <label htmlFor="first_name" style={{margin:'1em'}}>Username</label>
                            </div>
                            <div className="input-field">
                                <input placeholder='Your password' id="first_name" type="password" className="validate" style={{width:'50%', margin:'1em'}}/>
                                <label htmlFor="first_name" style={{margin:'1em'}}>Password</label>
                            </div>
                            <div className="input-field" style={{width:'50%', margin:'1em'}}>
                                <select multiple>
                                    <option value="" disabled defaultValue>Tags</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                            <div className='input-field' style={{width:'50%', margin:'1em'}}>
                                <input value='Promotion tier: Tier 1' id="first_name" type="text" className="validate inputNoMargin" />
                            </div>
                            <div className="input-field" style={{width:'50%', margin:'1em'}}>
                                <a className="waves-effect waves-teal btn" style={{width:'100%'}}>PROMOTE</a>
                            </div>

                            <div className="input-field" style={{textAlign:"right"}}>
                                <a className="waves-effect waves-teal btn-flat">Save changes</a>
                            </div>
                        </div>
                    </div>
                     
                </div>

                <div> 
                    <div className='card' id="userMessages" style={{height:'100%'}}>
                        <div className='card-content'>
                            <div>
                                <h5 style={{margin:'1em'}}>User messages</h5>
                            </div>
                            <div style={{height:'30rem', overflowY:'scroll'}}>
                                <Message/>
                                <Message/>
                                <Message/>
                                <Message/>
                                <Message/>
                                <Message/>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div>
                    <div className='card' id="userAds" style={{height:'100%'}}>
                        <div className='card-content'>
                            <div>
                                <h5 style={{margin:'1em'}}>Wishlist</h5>
                            </div>
                            <div style={{height:'20rem', overflowY:'scroll'}}>
                               <AdInWishlst/>
                               <AdInWishlst/>
                               <AdInWishlst/>
                               <AdInWishlst/>
                               <AdInWishlst/>
                               <AdInWishlst/>
                               <AdInWishlst/>
                               <AdInWishlst/>
                            </div>
                            <div className="input-field" style={{textAlign:"right"}}>
                                <a className="waves-effect waves-teal btn-flat">Save changes</a>
                            </div>
                            
                        </div>
                    </div>
                   

                </div>

                <div>
                    <div className='card' id="userAds" style={{height:'100%'}}>
                        <div className='card-content'>
                            <div>
                                <h5 style={{margin:'1em'}}>User ads</h5>
                            </div>
                            <div style={{height:'20rem', overflowY:'scroll'}}>
                               <AdRecord/>
                               <AdRecord/>
                               <AdRecord/>
                               <AdRecord/>
                               <AdRecord/>
                               <AdRecord/>
                            </div>
                            <div className="input-field" style={{textAlign:"right"}}>
                                <a className="waves-effect waves-teal btn-flat">Save changes</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default UserInfoScreen;