import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter, withRouter } from 'react-router-dom';
import './App.css';

import HeaderView from './Views/HeaderView';
import FooterView from './Views/FooterView';
import WelcomeView from './Views/WelcomeView';
import CalendarView from './Views/CalendarView';

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

  handleChange = (event) => {
    console.log(event)
    let field = event.target.name
    let value = event.target.value

    let changes = {}

    changes[field] = value
    this.setState(changes)
  }

  render() {
    let content = null;

    content = (
        <Switch>
          <Route exact path="/" component={WelcomeView} />
          {/* <Route path="/calendar" component={CalendarView} /> */}
          <Route path="/calendar" render={() => <CalendarView
            handleChangeCallBack={this.handleChange}/>}/>
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