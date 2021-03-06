import React, { Component } from 'react';
import { signIn, signUp } from '../Controllers/SignUpController.js'
import { NavLink } from 'react-router-dom';
import firebase from 'firebase/app';

export default class SignInView extends Component {
    constructor(props) {
        super(props)
    }

    handleSignIn = (event) => {
        event.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((err) => {
        this.setState({ 
          errorMessage: err.message,
          signInErr: "Login failed. Incorrect email or password." 
        })
      })
    }

    // Pre-Conditions: Event must have been sent
    // Post-Conditions: State is updated with event changes
    handleChange = (event) => {
        let field = event.target.name
        let value = event.target.value

        let changes = {}

        changes[field] = value
        this.setState(changes)
    }

    render() {
        return (
            <div>
                <form className="signInForm">
                    <div>
                        <div>
                            <label>Email</label>
                        </div>
                        <div>
                            <input type="email" name="email" onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Password</label>
                        </div>
                        <div>
                            <input type="password" name="password" onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </div>
                    <button 
                        onClick={(e) => this.handleSignIn(e)}
                        className="regButton">
                        Login
                    </button>
                </form>
                <div>
                    <NavLink id="createAccountNav" to="/signup">Create Account</NavLink>
                    </div>
            </div>
        )
    }
}