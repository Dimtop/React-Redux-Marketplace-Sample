import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setColor} from '../Actions/index';
import store from '../Store/store';
import mainStyles from '../Styles/mainStyles';

import HeaderBar from './HeaderBar';
import HomeScreen from './HomeScreen';
import UserInfoScreen from './UserInfoScreen';
import LoginScreen from './LoginScreen';




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function mapStateToProps(state){
  return {currentComponent:state.currentComponent};
}

function mapDispatchToProps(dispatch){
  return {
    setColor : (color) => dispatch(setColor(color))
  };
}


class ConnectedApp extends Component {

  constructor(props){
    super(props);

    

  }


  render() {
    console.log(this.props.currentComponent);
    return (
      <div id='appContainer'>

        <div id='mainContentContainer'>

          <Router>
            <Switch>
              <Route exact path="/">
                <HeaderBar/>
                <HomeScreen/>
              </Route>
              <Route exact path="/login">
                  <LoginScreen cookies={this.props.cookies}/>
              </Route>
              <Route exact path="/account">
              <HeaderBar/>
                  <UserInfoScreen/>
              </Route>
            </Switch>
          </Router>

          <div>
          
          </div>
        </div>
      </div>
  
    );
  }
}

const App = connect(mapStateToProps,mapDispatchToProps)(ConnectedApp);

export default App;