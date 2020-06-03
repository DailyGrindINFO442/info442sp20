import React, { Component } from 'react';

export default class AlertView extends Component {
    constructor(props) {
        super(props);
    }
    
    // Pre-Conditions: AlertView is loaded, and the array of alerts is listed
    // in reverse chronological order
    // Post-Conditions: Returns single unread alert
    displayUnreadAlerts(alert) {
        let unreadAlert = (
            <div className="unread">
                <h2 className="unread">{alert.title}</h2>
                <h6 className="unread">{alert.date.toDateString()} at {alert.time}</h6>
                <p className="unread">{alert.description}</p>
                <button onClick={this.handleReadAlert} id="unread">Mark as Read</button>
                <button onClick={this.handleDelete} className="delete">Delete</button>
            </div>
        )
        return unreadAlert;
    }

    // Pre-Conditions: AlertView is loaded, and the array of alerts is listed
    // in reverse chronological order
    // Post-Conditions: Returns single read alert
    displayReadAlerts(alert) {
        let readAlert = (
            <div className="read">
                <h2 className="read">{alert.title}</h2>
                <h6 className="read">{alert.date.toDateString()} at {alert.time}</h6>
                <p className="read">{alert.description}</p>
                <button onClick={this.handleDelete} className="delete">Delete</button>
            </div>
        )
        return readAlert;
    }

    // Pre-Conditions: Alert has been marked as read
    // Required: Alert that has been marked as read
    // Post-Conditions: Changes status & styling of alert
    handleReadAlert(alert) {
    }

    handleDelete(alert) {

    }

    render() {
        let alerts = null;
        // let alertsList = this.props.user.alerts;
        // // How should we go about moving "critical" alerts to the front of the list?
        // for(let i = 0; i < alertsList.length; i++) {
        //     if(alertsList[i].status == 'read') {
        //         alerts += this.displayReadAlerts(alertsList[i]);
        //     } else {
        //         alerts += this.displayUnreadAlerts(alertsList[i]);
        //     }
        // }
        return (
            <div>
                {alerts}      
            </div>
        )
    }
}