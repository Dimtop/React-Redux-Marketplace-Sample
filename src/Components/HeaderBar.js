import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../Store/store';
import {logInUser, logOutUser} from '../Actions/index'
import LoginScreen from './LoginScreen';

import {
    Link
  } from "react-router-dom";


function mapDispatchToProps(dispatch){
  return {
    logInUser : () => dispatch(logInUser()),
    logOutUser : () => dispatch(logOutUser())
};
  }


  function mapStateToProps(state){
    return {isLoggedIn: state.isLoggedIn};
}
  

class ConnectedHeaderBar extends Component{



    constructor(props){
        super(props);

        this.state = {
          accountButtonsContainer:null
        };

        this.navigateToLoginPage = this.navigateToLoginPage.bind(this);
    }


    componentWillMount(){

       
        fetch('/api/login', {
            method: 'GET',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then( res => res.json())
        .then(data =>{
            if(data.isLoggedIn){
                this.props.logInUser();
            }
            else{
                this.props.logOutUser();
            }
        })
        .then( () =>{
          if(!this.props.isLoggedIn){
            this.setState({accountButtonsContainer : 
                      <div id='accountButtonsContainer'>
                        <div>
                                <Link className='waves-effect waves-teal btn-flat'  style={{margin:'0'}} to="/login">
                                    Login
                                </Link>
    
                        </div>
                        <div>
                            <a className='waves-effect waves-teal btn-flat' style={{margin:'0'}}>Register</a>
                        </div>
                      </div>
            });
          }
          else{
            this.setState({accountButtonsContainer : 
                        <div id='accountButtonsContainer'>
                        <div>
                                <Link className='waves-effect waves-teal btn-flat'  style={{margin:'0'}} to="/account">
                                    Account
                                </Link>

                        </div>
                        <div>
    
                        </div>
                      </div>
                    });
          }
          
        
        
        });
    
      
    }

    navigateToLoginPage(){
        this.props.navigate(<LoginScreen/>);
    }


    render(){

      console.log(this.props.isLoggedIn);
     
        return(
        <div id='headerBarContainer'>
            <div className="card">
                <div className='card-content' id='appBarContentContainer'>
                  <div>
                    <h5 style={{margin:'0'}}>UniShop</h5>
                  </div>
                  {this.state.accountButtonsContainer}
                </div>
            </div>
        </div>
        );
    }
}


const HeaderBar = connect(mapStateToProps,mapDispatchToProps)(ConnectedHeaderBar);

export default HeaderBar;
