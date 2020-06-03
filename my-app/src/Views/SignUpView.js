import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { signUp } from '../Controllers/SignUpController'

export default class SignUpView extends Component {
    constructor(props) {
        super(props)
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

    handleSignUp(e) {
        e.preventDefault()
        if (this.state.email && this.state.password 
            && this.state.password === this.state.retypePassword) {
                let user = signUp(this.state.email, this.state.password)
                this.setState(user)
        } else {
            console.log("Error creating account")
        }
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
                        <input type="email" name="email"
                            onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </div>
                    <div>
                        <div>
                        <label>Password</label>
                        </div>
                        <div>
                        <input type="password" name="password"
                            onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </div>
                    <div>
                        <div>
                        <label>Retype Password</label>
                        </div>
                        <div>
                        <input type="password" name="retypePassword"
                            onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </div>
                    <button 
                        onClick={(e) => this.handleSignUp(e)}
                        className="createAccount">
                        Create Account
                    </button>
                </form>
                <div>
                    <NavLink id="navLinkAccount" to="/signin">Already Have an Account?</NavLink>
                </div>
            </div>
        )
    }
}