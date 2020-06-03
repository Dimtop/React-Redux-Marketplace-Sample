import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Link, Redirect
  } from "react-router-dom";


import LoggedInRedirectPromt from './LoggedInRedirectPrompt';
import {logInUser, logOutUser} from '../Actions/index'


function mapDispatchToProps(dispatch){
    return {
        logInUser : () => dispatch(logInUser()),
        logOutUser : () => dispatch(logOutUser())
    };
}

function mapStateToProps(state){
    return {isLoggedIn: state.isLoggedIn};
}
  


class ConnectedLoginScreen extends Component{

    constructor(props){
        super(props);

        this.state={
            email:'',
            password:'',
            error:'',
            shouldRedirect:false,
            logInPromt: null
        };

        this.manageEmailChange = this.manageEmailChange.bind(this);
        this.managePasswordChange = this.managePasswordChange.bind(this);
        this.postDataForAuthentication = this.postDataForAuthentication.bind(this);
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

            if(this.props.isLoggedIn){
                this.setState({
                    logInPromt:<LoggedInRedirectPromt/>
                });
            }
            else{
                this.setState({
                    logInPromt:
                    <div id='loginScreenContainer'>
                
                    <div  id='loginForm'>
                       
                        <div className='card' id="userMessages" style={{height:'100%',textAlign:'center'}}>
                            <div className='card-content' style={{display:'grid', gridTemplateColumns:'1fr', justifyItems:'center'}}>
                                <div>
                                    <h5>Log In</h5>
                                </div>
                                <div>
                                    <div className='input-field' style={{width:'100%'}}>
                                        <input placeholder="Email" id="email" type="email" className="validate inputNoMargin" onInput={this.manageEmailChange}/>
                                    </div>
                                </div>
                                <div>
                                    <div className='input-field' style={{width:'100%'}}>
                                        <input placeholder="Password" id="password" type="password" className="validate inputNoMargin" onInput={this.managePasswordChange}/>
                                    </div>
                                </div>
    
                                <div>
     
                                    <a className='waves-effect waves-teal btn' onClick={this.postDataForAuthentication}>
                                        Submit
                                    </a>
                                
                                </div>
                                <div>
                                    <p style={{color:'red'}}>{this.state.error}</p>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
             
                </div>
                });
            }
        });

    }

    managePasswordChange(e){
        this.setState({password:e.target.value});
    }


    manageEmailChange(e){
        this.setState({email: e.target.value});
    }

    postDataForAuthentication(e){

        e.preventDefault();

        var credentials =  {
            data: {
                email:this.state.email,
                password:this.state.password
            }
  
        };


        fetch('/api/login', {
            method: 'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(credentials)
        })
        .then( res => res.json())
        .then(data =>{
            if(data.error ==''){
                this.props.logInUser();
                this.setState({shouldRedirect:true});
            }
            else{
                this.props.logOutUser();
                this.setState({error:data.error});
            }
        });
    }

    render(){


        return(
            this.state.shouldRedirect?<Redirect to="/"/>:this.state.logInPromt
        );
    }
}


const LoginScreen = connect(mapStateToProps,mapDispatchToProps)(ConnectedLoginScreen);

export default LoginScreen;