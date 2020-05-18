import React, { Component } from 'react';

export default class HeaderView extends Component {
    // Pre-Conditions: HeaderView is loaded
    // Post-Conditions: Displays DailyGrind branding information
    displayLogo() {
    }

    // Pre-Conditions: HeaderView is loaded
    // Post-Conditions: Displays navbar
    displayNavbar() {
    }

    render() {
        let links = null;

        if(!this.props.user){
            links = (
                <ul>
                    <li>Calendar</li>
                    <li>Breaks</li>
                    <li>Pre-Work</li>
                    <li>To-Do</li>
                    <li>Alerts</li>
                    <li>Settings</li>
                    <li>Sign-In</li>
                </ul>
            )
        } else {
            links = (
                <ul>
                    <li>Calendar</li>
                    <li>Breaks</li>
                    <li>Pre-Work</li>
                    <li>To-Do</li>
                    <li>Alerts</li>
                    <li>Settings</li>
                    <li>Profile</li>
                </ul>
            )
        }

        return (
            <div className="navBar">  
                <p className="logo">Daily Grind</p>  
                {links}
            </div>
        )
    }
}