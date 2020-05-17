import React, { Component } from 'react';
import './App.css';

import HeaderView from './Views/HeaderView';
import FooterView from './Views/FooterView';
import WelcomeView from './Views/WelcomeView';

class App extends Component{
  render() {
    let content = null;

    // use if/else blocks to change contnt to be rendered on the screen or import
    // react-router-dom or other library for routing
    content = (<WelcomeView></WelcomeView>)

    return (
      <div className="DailyGrind">
        <header className="header">
          <HeaderView></HeaderView>
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