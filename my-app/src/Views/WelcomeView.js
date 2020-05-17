import React, { Component } from 'react';

export default class WelcomeView extends Component {

    // Pre-Conditions: WelcomeView is loaded
    // Post-Conditions: Displays current date and day of the week
    constructor(props) {
        super(props);
        this.state = {
          date: new Date().toLocaleString()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );  
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    render() {
        return (
            <div className="welcome">
                <div className="welcomeText">
                    <h2>Today is</h2>
                    <h1 className="Welcome-clock">
                        {this.state.time}
                    </h1>
                </div>
            </div>
        );
    }
}
