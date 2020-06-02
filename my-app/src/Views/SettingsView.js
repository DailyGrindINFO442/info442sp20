import React, { Component } from 'react';

export default class SettingsView extends Component {
    constructor(props) {
        super(props);
    }
    
    handleChangeName(event) {
        this.setState({name: event.target.name});
    }

    handleChangeEmail(event) {
        this.setState({name: event.target.name});
    }

    handleSubmitAccount(event) {
        event.preventDefault();
        this.handleChange(this.state.name);
        this.handleChange(this.state.email);
        this.handleChange(this.state.org);
        var x = document.getElementById("theme");
        this.handleChange(x.options[x.selectedIndex].value);
    }

    handleSubmitApps(event) {
        event.preventDefault();
        if(!document.getElementById("google").checked) {
            //Should this log the user out of Google? Unsure of exactly what this setting
            //should do if the user does not authorize Google.
        }
    }
    
    // Pre-Conditions: SettingsView is loaded
    // Post-Conditions: Displays user's settings
    displaySettings() {
        let settings = null;
        //Settings menu
        let settingsSidebar = (
            <div className="sidebar">
                <table>
                    <tr>
                        <th>User Settings</th>
                    </tr> <tr>
                        <td className="sidebarItem"><button>My Account</button></td>
                    </tr> <tr>
                        <td className="sidebarItem"><button>Privacy and Safety</button></td>
                    </tr> <tr>
                        <td className="sidebarItem"><button>My Account</button></td>
                    </tr> <tr>
                        <td className="sidebarItem"><button>My Account</button></td>
                    </tr>
                </table>
            </div>
        )
        //User account settings (still need to add profile photo submit)
        let accountSettings = (
            <div>
                <form onSubmit={this.handleSubmitAccount}>
                    <div>
                        <label>
                            Name:
                            <input type="text" onChange={this.handleChangeName}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input type="email" onChange={this.handleChangeEmail}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Organization:
                            <input type="text" onChange={this.handleChangeOrg}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Theme:
                            <select id="theme">
                                <option selected value="light">Light</option>
                                <option value="dark">Dark</option>
                            </select>
                        </label>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
        //Authorized app settings
        let authorizedAppSettings = (
            <div>
                <form onSubmit={this.handleSubmitApps}>
                    <div>
                        <label id="google">
                            Google:
                            <input type="checkbox" name="google" id="google"/>
                        </label>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
        //Currently set to default view Account settings
        settings = (
            <div>
                {settingsSidebar}
                {accountSettings}
            </div>
        )
        return settings;
    }

    // Pre-Conditions: Settings has been changed
    // Required: Changed setting
    // Post-Conditions: Send changed setting to FirebaseController & display changed setting
    handleChange(setting) {
    }

    render() {
        if(!this.props.user){
            return (
                <div>
                    <p>Please log-in or sign-up in order to access your settings.</p>
                </div>
            )
        } else {
            return displaySettings();
        }
    }
}