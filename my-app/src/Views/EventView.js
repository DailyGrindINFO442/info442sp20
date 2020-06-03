import React, { Component } from 'react';

export class EventView extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    componentDidUpdate() {
        console.log(this.props)
    }

    // Pre-Conditions: An event must be clicked on
    // Post-Conditions: Display event information that
    // was clicked
    displayEvent() {
        let currentStart = this.props.currentStart !== "12:00 AM" ? this.props.currentStart : ""
        let currentEnd = this.props.currentEnd !== "" ? " - " + this.props.currentEnd : ""
        let currentLocation = this.props.currentLocation !== "" ? this.props.currentLocation : "No Location"

        let content = (
            <div className="modalContent">
                <div>
                    <h2>{this.props.currentTitle}</h2>
                </div>
                <div>
                    <p>{this.props.currentDate}</p>
                </div>
                <div>
                    <p>{currentStart}{currentEnd}</p>
                </div>
                <div><p><span>&#10022;</span>{currentLocation}</p></div>
                <div>
                    <p>{this.props.currentDescription}</p>
                </div>
                <button
                    onClick={(e) => this.props.editViewEventModalButton(e)}
                    className="editButton">
                    <span>&#9998;</span>
                </button>
                <button
                    onClick={(e) => this.props.removeCalendarEvent(e)}
                    className="removeButton">
                    <span>&#128465;</span>
                </button>
            </div>
        )
        return content
    }


    render() {
        let content = this.displayEvent()

        return (
            <div>
                {content}
            </div>
        )
    }
}

export class EditEventView extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    componentDidUpdate(){
        console.log(this.props)
    }

    displayEditEvent() {
        let content = (
            <div className="modalContent">
                <div>
                    <input className="modalInput"
                        onChange={(e) => this.props.handleChange(e)}
                        id="eventName" placeholder="Event Name" type="text" name="eventName"
                         />
                </div>
                <div>
                    <label className="modalLabel"><b>Date</b></label>
                    <input className="modalInput"
                        onChange={(e) => this.props.handleChange(e)}
                        type="date" name="eventDate" 
                        />
                </div>
                <div id="timeRange">
                    <label className="modalLabel"><b>Time Range</b></label>
                    <input className="modalInputTime"
                        onChange={(e) => this.props.handleChange(e)}
                        type="time" name="eventTime1" />
                    <input className="modalInputTime"
                        onChange={(e) => this.props.handleChange(e)}
                        min={this.props.eventTime1}
                        type="time" name="eventTime2" />
                </div>
                <div>
                    <label className="modalLabel"><b>Location</b></label>
                    <input className="modalInput"
                        onChange={(e) => this.props.handleChange(e)}
                        placeholder="Event Location" type="text" name="eventLocation" />
                </div>
                <div id="textAreaDescription">
                    <label className="modalLabel"><b>Event Description</b></label>
                    <textarea maxlength="500" className="modalInput" placeholder="Enter a description"
                        onChange={(e) => this.props.handleChange(e)}
                        rows="4" cols="50"
                        name="eventDescription" />
                </div>
                <div>
                    <label className="modalLabel"><b>Attendees</b></label>
                    <input className="modalInput"
                        onChange={(e) => this.props.handleChange(e)}
                        placeholder="Search..." type="textarea" name="eventDescription" />
                </div>
                <div>
                    <label className="modalLabel"><b>Reminders?</b></label>
                    <input className="modalInput"
                        onChange={(e) => this.props.handleChange(e)}
                        type="checkbox" name="eventReminders" /><span>Yes</span>
                </div>
                <div>
                    <button 
                        onClick={(e) => this.props.updateCalendarEvent(e)}
                        className="save">
                        <b>Save</b>
                    </button>
                </div>
            </div>
        )
        return content
    }

    render() {
        let content = this.displayEditEvent()

        return (
            <div>
                {content}
            </div>
        )
    }
}