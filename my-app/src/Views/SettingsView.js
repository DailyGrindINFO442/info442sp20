import React, { Component } from 'react';

class SettingsView extends Component {
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
                        <td className="sidebarItem">My Account</td>
                    </tr> <tr>
                        <td className="sidebarItem">Privacy and Safety</td>
                    </tr> <tr>
                        <td className="sidebarItem">Authorized Apps</td>
                    </tr> <tr>
                        <td className="sidebarItem">Connections</td>
                    </tr>
                </table>
            </div>
        )
        //User account settings
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

        )
        settings = (
            <div>
                {settingsSidebar}
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
        return (
            <div>      
            </div>
        )
    }
}