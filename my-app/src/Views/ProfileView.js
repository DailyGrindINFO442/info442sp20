import React, { Component } from 'react';

export default class ProfileView extends Component {
    constructor(props) {
        super(props);
    }
    
    handleChangeJT(event) {
        this.setState({jobTitle: event.target.jobTitle});
    }

    handleSubmitJT(event) {
        event.preventDefault();
        this.handleChange(this.state.jobTitle);
    }

    handleChangeS(event) {
        this.setState({status: event.target.status});
    }

    handleSubmitS(event) {
        event.preventDefault();
        this.handleChange(this.state.status);
    }

    handleChangeBio(event) {
        this.setState({bio: event.target.bio});
    }

    handleSubmitBio(event) {
        event.preventDefault();
        this.handleChange(this.state.bio);
    }

    handleChangeOH(event) {
        this.setState({officeHours: event.target.officeHours});
    }

    handleSubmitOH(event) {
        event.preventDefault();
        this.handleChange(this.state.officeHours);
    }
    
    // Pre-Conditions: ProfileView is loaded, user is logged in.
    // Post-Conditions: Displays user's profile
    displayProfile() {
        let profile = null;
        let profileReq = (
            <div>
                <table className="profile">
                    <tr>
                        <td rowspan="2"><img src={this.props.user.profilePhoto} alt="User's Profile Photo" /></td>
                        <td>{this.props.user.name}</td>
                    </tr>
                    <tr>
                        <td>{this.props.user.organization}</td>
                    </tr>
                    <tr>
                        <td>{this.props.user.theme}</td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-allign: right"><button>Edit</button></td>
                    </tr>
                </table>
            </div>
        )
        let profileOptional = null;
        //Displaying job title
        if(this.props.user.jobTitle){
            profileOptional + (
                <div>
                    <p>Job title: {this.props.user.jobTitle}</p>
                </div>
            )
        } else {
            profileOptional + (
                <div>
                    <form onSubmit={this.handleSubmitJT}>
                        <div>
                            <label>
                                Job title:
                                <input type="text" onChange={this.handleChangeJT}/>
                            </label>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            )
        }
        //Displaying user's status
        if(this.props.user.status){
            profileOptional + (
                <div>
                    <p>Status: {this.props.user.status}</p>
                </div>
            )
        } else {
            profileOptional + (
                <div>
                    <form onSubmit={this.handleSubmitS}>
                        <div>
                            <label>
                                Status:
                                <input type="text" onChange={this.handleChangeS}/>
                            </label>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            )
        }
        //Displaying user's bio
        if(this.props.user.bio){
            profileOptional + (
                <div>
                    <p>Status: {this.props.user.bio}</p>
                </div>
            )
        } else {
            profileOptional + (
                <div>
                    <form onSubmit={this.handleSubmitBio}>
                        <div>
                            <label>
                                Bio:
                                <input type="text" onChange={this.handleChangeBio}/>
                            </label>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            )
        }
        //Displaying user's office hours
        if(this.props.user.status){
            profileOptional + (
                <div>
                    <p>Office Hours: {this.props.user.officeHours}</p>
                </div>
            )
        } else {
            profileOptional + (
                <div>
                    <form onSubmit={this.handleSubmitOH}>
                        <div>
                            <label>
                                Office Hours:
                                <input type="text" onChange={this.handleChangeOH}/>
                            </label>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            )
        }
        //Preferred Contacts List (still needs to be done)
        let preferredContacts = null;
        profile = (
            <div>{profileReq}</div>
            <div>
                {profileOptional}
                {preferredContacts}
            </div>
        )
        return profile;
    }

    // Pre-Conditions: Part of profile has been changed
    // Required: Item that has been changed
    // Post-Conditions: Changes content of item & saves to profile
    // This should be where changes to the optional profile fields will
    // sent to the Firebase database since Profile does not have
    // a Controller.
    handleChange(profileItem) {
    }

    render() {
        if(!this.props.user){
            return (
                <div>
                    <p>Please log-in or sign-up in order to access your profile.</p>
                </div>
            )
        } else {
            return displayProfile();
        }
    }
}