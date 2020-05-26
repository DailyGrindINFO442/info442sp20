import React, { Component } from 'react';

export default class WelcomeView extends Component {

    // Pre-Conditions: WelcomeView is loaded
    // Post-Conditions: Displays current date and day of the week
    constructor(props) {
        super(props);
        this.state = {
          date: new Date().toDateString()
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
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var ampm = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12;
        hour = hour ? hour : 12; // the hour '0' should be '12'
        minute = minute < 10 ? '0'+minute : minute;
        this.setState({
            time: hour + ":" + minute + " " + ampm 
        });
    }

    render() {
        return (
            <div className="welcome">
                <div className="welcomeText">
                    <h2>Today is</h2>
                    <h1>
                        {this.state.date}
                    </h1>
                    <h2>{this.state.time}</h2>
                </div>
            </div>
        );
    }
}
