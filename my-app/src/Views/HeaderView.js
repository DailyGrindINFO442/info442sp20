import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter, NavLink} from 'react-router-dom';
import firebase from 'firebase/app';

import CalendarView from './CalendarView';


export default class HeaderView extends Component {
    // Pre-Conditions: HeaderView is loaded
    // Post-Conditions: Displays DailyGrind branding information
    displayLogo() {
    }

    // Pre-Conditions: HeaderView is loaded
    // Post-Conditions: Displays navbar
    displayNavbar() {
    }

    handleSignOut = () => {
        this.setState({ errorMessage: null });
        firebase.auth().signOut()
          .catch((err) => {
            this.setState({ errorMessage: err.message })
          })
        window.location.reload()
      }

    render() {
        let links = null;

        if(!this.props.user){
            links = (
                <ul>
                    <li><NavLink to='/signin'>Sign-In</NavLink></li>
                    {/* <li><NavLink to='/settings'>Settings</NavLink></li>
                    <li><NavLink to='alerts'>Alerts</NavLink></li>
                    <li><NavLink to='todo'>To-Do</NavLink></li>
                    <li><NavLink to='/prework'>Pre-Work</NavLink></li>
                    <li><NavLink to='breaks'>Breaks</NavLink></li>
                    <li><NavLink to="/calendar">Calendar</NavLink></li> */}
                </ul>
            )
        } else {
            links = (
                <ul>
                    <li><button id="headerSignOut" onClick={(e) => this.handleSignOut(e)}>Sign Out</button></li>
                    {/* <li><NavLink to='/profile'>Profile</NavLink></li>
                    <li><NavLink to='/settings'>Settings</NavLink></li>
            <li><NavLink to='alerts'>Alerts</NavLink></li> */}
                    <li><NavLink to='/todo'>To-Do</NavLink></li> 
                    <li><NavLink to='/prework'>Pre-Work</NavLink></li>
                    {/* <li><NavLink to='breaks'>Breaks</NavLink></li> */}
                    <li><NavLink to='/calendar'>Calendar</NavLink></li>
                </ul>
            )
        }

        return (
            <div className="navBar">  
                {/* <BrowserRouter> */}
                    <p className="logo"><NavLink to='/'>Daily Grind</NavLink></p> 
                    {links}
                {/* </BrowserRouter> */}
            </div>
        )
    }
}