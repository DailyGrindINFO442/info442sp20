import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter, withRouter } from 'react-router-dom';
import './App.css';

import firebase from 'firebase/app';

import HeaderView from './Views/HeaderView';
import FooterView from './Views/FooterView';
import WelcomeView from './Views/WelcomeView';
import CalendarView from './Views/CalendarView';
import ProfileView from './Views/ProfileView';
import AlertView from './Views/AlertView';
import SignInView from './Views/SignInView';
import SignUpView from './Views/SignUpView';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  // uncomment when firebase is set up to adjust state based on sign in/out 
  // componentDidMount(){
  //   this.unregFunction = firebase.auth().onAuthStateChanged((curUser) => {
  //     if (curUser) {
  //       this.setState({
  //         user: curUser.displayName
  //       })
  //     } else {
  //       this.setState({
  //         user: null
  //       })
  //     }
  //   })
  // }

  componentDidMount() {
    this.authUnSubFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) { // If user is logged in
        this.setState({
          user: firebaseUser
        })
      } else { // Log user out
        this.setState({
          user: null
        })
      }
    })
  }

  componentWillUnmount() {
    this.authUnSubFunction(); // Stops listening for auth changes
  }

  render() {
    let content = null;

    content = (
      <Switch>
        <Route exact path="/" component={WelcomeView} />
        <Route path="/calendar" render={() => <CalendarView 
          {...this.state}/>} />
        <Route path="/profile" component={ProfileView} />
        <Route path="/alerts" component={AlertView} />
        <Route path="/signin" component={SignInView} />
        <Route path="/signup" render={() =>
          <SignUpView
            {...this.state}/>} />
        {/*
          Add more routes as views get made using react-router-dom 
          eg: <Route path='/calendar' component={CalendarView}/>  */}
      </Switch>
    )

    return (
      <div className="DailyGrind">
        <header className="header">
          <HeaderView user={this.state.user}></HeaderView>
        </header>

        <main>
          {content}
        </main>

        <footer className="footer">
          <FooterView></FooterView>
        </footer>
      </div>
    );
  }
}

export default App;