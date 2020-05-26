import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import './App.css';

import HeaderView from './Views/HeaderView';
import FooterView from './Views/FooterView';
import WelcomeView from './Views/WelcomeView';

class App extends Component{
  constructor(props){
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

  render() {
    let content = null;

    content = (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={WelcomeView}/>
          {/*
          Add more routes as views get made using react-router-dom 
          eg: <Route path='/calendar' component={CalendarView}/>  */}
        </Switch>
      </BrowserRouter>
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