import React, { Component } from 'react';

export default class WelcomeView extends Component {

    // Pre-Conditions: WelcomeView is loaded
    // Post-Conditions: Displays current date and day of the week
    displayDate() {
    }

    render() {
        let today = new Date();

        return (
            <div className="welcome">
                <div className="welcomeText">
                    <h2>Today is</h2>
                    <h1>{today.toDateString()}</h1>
                </div>
            </div>
        )
    }
}