import React, { Component } from 'react';

// Views
import { EventView, EditEventView } from './EventView.js'

// Controllers
import { retrieveEvent } from '../Controllers/EventController.js'

import FullCalendar from '@fullcalendar/react'
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import '../main.css'
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

export default class CalendarView extends Component {
    constructor(props) {
        super(props)

        let calendarComponentRef = React.createRef();
        let test = new Date('June 2, 2020')
        let test2 = new Date('June 3, 2020')

        this.editViewEventModalButton = this.editViewEventModalButton.bind(this)
        // this.handleChange = this.handleChange.bind(this)

        // this.handleChange = this.props.handleChange.bind(this)

        this.state = {
            calendarWeekends: true,
            calendarEvents: [
                // initial event data
                // { title: "Event Now", start: new Date() },
                { title: "Test Date", start: test, description: "testtest", yuh: "hell yeah!", attendees: ["test1","test2"], end: test2 }
            ],
            eventClick: function(info) {
                console.log(info)
            }
        }
    }

    componentDidMount() {
        console.log("Mounted")
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    handleEventClick = arg => {
        let eventEnd = ""

        if (arg.event.end) {
            eventEnd = formatDate(arg.event.end, {
                month: "long",
                year: 'numeric',
                day: 'numeric',
                weekday: 'long'
            })
        }

        let formattedDate = formatDate(arg.event.start, {
            month: "long",
            year: 'numeric',
            day: 'numeric',
            weekday: 'long'
        })

        this.setState((state) => {
            state.currentDescription = arg.event.extendedProps.description
            state.currentTitle = arg.event.title
            state.currentAttendees = arg.event.extendedProps.attendees
            state.currentStart = formattedDate
            state.currentEnd = eventEnd
            state.eventModal = "block"
            return state
        })
    }

    // handleDateClick = arg => {
    //     console.log(arg)
    //     // if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
    //     //   this.setState({
    //     //     // add new event data
    //     //     calendarEvents: this.state.calendarEvents.concat({
    //     //       // creates a new array
    //     //       title: "New Event",
    //     //       start: arg.date,
    //     //       allDay: arg.allDay
    //     //     })
    //     //   });
    //     // }
    //   };

    // Pre-Conditions: Event must have been sent
    // Post-Conditions: State is updated with event changes
    handleChange = (event) => {
        let field = event.target.name
        let value = event.target.value

        let changes = {}

        changes[field] = value
        this.setState(changes)
    }

    // Pre-Conditions: Add button must have been clicked on
    // Post-Conditions: Displays modal box for adding new event
    addEventModalButton(e) {
        e.preventDefault()
        this.setState((state) => {
            state.addEventModal = "block"
            return state
        })
    }

    editViewEventModalButton(e) {
        e.preventDefault()
        this.setState((state) => {
            state.eventModal = "none"
            state.editModal = "block;"
            return state
        })
    }

    // Pre-Conditions: Modal box for adding event must be visible
    // and close button must have been clicked
    // Post-Conditions: Modal box is no longer shown
    closeAddEventModalButton(e) {
        e.preventDefault()
        this.setState((state) => {
            state.addEventModal = "none"
            return state
        })
    }

    closeViewEventModalButton(e) {
        e.preventDefault()
        this.setState((state) => {
            state.eventModal = "none"
            return state
        })
    }

    closeEditEventModalButton(e) {
        e.preventDefault()
        this.setState((state) => {
            state.editModal = "none"
            return state
        })
    }

    // Pre-Conditions: + Add Event Button must have been clicked
    // Post-Conditions: Returns modal form for adding event
    addEventModalForm() {
        let repeatingForm = null

        if (this.state.eventRepeating === "on") {
            console.log("Yes!")
            repeatingForm = (
                <div className="repeatingForm">
                    <div>
                        <label className="repeatingLabel">Daily</label>
                        <input className="repeatingInput"
                            onChange={(e) => this.handleChange(e)}
                            type="checkbox" name="repeatingDaily" />
                        <label className="repeatingLabel">Weekly</label>
                        <input className="repeatingInput"
                            onChange={(e) => this.handleChange(e)}
                            type="checkbox" name="repeatingWeekly" />
                        <label className="repeatingLabel">Monthly</label>
                        <input className="repeatingInput"
                            onChange={(e) => this.handleChange(e)}
                            type="checkbox" name="repeatingMonthly" />
                    </div>
                    <div>
                        <div>
                            <label className="repeatingLabel">Start Date</label>
                            <input className="repeatingInput" 
                            onChange={(e) => this.handleChange(e)}
                            type="date" name="repeatingStartDate"/>
                        </div>
                        <div>
                        <label className="repeatingLabel">End Date</label>
                        <input className="repeatingInput" type="date"
                            onChange={(e) => this.handleChange(e)} 
                            min={this.state.repeatingStartDate} name="repeatingEndDate"/>
                        </div>
                    </div>
                </div>
            )
        } else {
            repeatingForm = null
        }

        let form = (
            <div className="modalBox"
                style={{ display: this.state.addEventModal }}>
                <div>
                    <form className="modalForm">
                        <button className="closeModal"
                            onClick={(e) => this.closeAddEventModalButton(e)}>
                            X
                    </button>
                        <div className="modalContent">
                            <div>
                                <input className="modalInput"
                                    onChange={(e) => this.handleChange(e)}
                                    id="eventName" placeholder="Event Name" type="text" name="eventName" />
                            </div>
                            <div>
                                <label className="modalLabel"><b>Date</b></label>
                                <input className="modalInput"
                                    onChange={(e) => this.handleChange(e)}
                                    type="date" name="eventDate" />
                            </div>
                            <div id="timeRange">
                                <label className="modalLabel"><b>Time Range</b></label>
                                <input className="modalInputTime"
                                    onChange={(e) => this.handleChange(e)}
                                    type="time" name="eventTime1" />
                                <input className="modalInputTime"
                                    onChange={(e) => this.handleChange(e)}
                                    min={this.state.eventTime1}
                                    type="time" name="eventTime2" />
                            </div>
                            <div>
                                <label className="modalLabel"><b>Location</b></label>
                                <input className="modalInput"
                                    onChange={(e) => this.handleChange(e)}
                                    placeholder="Event Location" type="text" name="eventLocation" />
                            </div>
                            <div id="textAreaDescription">
                                <label className="modalLabel"><b>Event Description</b></label>
                                <textarea maxlength="500" className="modalInput" placeholder="Enter a description"
                                    onChange={(e) => this.handleChange(e)}
                                    rows="4" cols="50"
                                    name="eventDescription" />
                            </div>
                            <div>
                                <label className="modalLabel"><b>Attendees</b></label>
                                <input className="modalInput"
                                    onChange={(e) => this.handleChange(e)}
                                    placeholder="Search..." type="textarea" name="eventDescription" />
                            </div>
                            <div>
                                <label className="modalLabel"><b>Reminders?</b></label>
                                <input className="modalInput"
                                    onChange={(e) => this.handleChange(e)}
                                    type="checkbox" name="eventReminders" /><span>Yes</span>
                            </div>
                            <div>
                                <label className="modalLabel"><b>Repeating Events?</b></label>
                                <input className="modalInput"
                                    onChange={(e) => this.handleChange(e)}
                                    type="checkbox" name="eventRepeating" /><span>Yes</span>
                                {repeatingForm}
                            </div>
                            <div>
                                <button className="save">
                                    <b>Save</b>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
        return form
    }

    viewEventModal() {
        let viewModal = (
            <div 
                className="modalBox" 
                style={{ display: this.state.eventModal }}>
                <div>
                    <form
                        className="modalForm">
                            <button
                                className="closeModal"
                                onClick={(e) => this.closeViewEventModalButton(e)}>
                                    X
                            </button>
                        <EventView
                            editViewEventModalButton = {this.editViewEventModalButton}
                            currentDescription={this.state.currentDescription} 
                            currentTitle = {this.state.currentTitle}
                            currentAttendees = {this.state.currentAttendees}
                            currentStart = {this.state.currentStart}
                            currentEnd = {this.state.currentEnd} 
                        />
                    </form>
                </div>
            </div>
        )
        return viewModal
    }

    editEventModal() {
        let editModal = (
            <div
                className="modalBox"
                style={{display: this.state.editModal}}>
                <div>
                    <form
                        className="modalForm">
                        <button
                            className="closeModal"
                            onClick={(e) => this.closeEditEventModalButton(e)}>
                                X
                        </button>
                        <EditEventView 
                            handleChange = {this.handleChange}
                            currentDescription={this.state.currentDescription} 
                            currentTitle = {this.state.currentTitle}
                            currentAttendees = {this.state.currentAttendees}
                            currentStart = {this.state.currentStart}
                            currentEnd = {this.state.currentEnd} 
                        />
                    </form>
                </div>
            </div>
        )
        return editModal
    }

    // Pre-Conditions: CalendarView is loaded
    // Post-Conditions: Displays calendar information
    // contained with event information, will default
    // to current week view
    displayCalendar() {
        let content = (
            <div className="calendar">
            <FullCalendar defaultView="dayGridMonth"
                header={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                }}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                ref={this.calendarComponentRef}
                weekends={this.state.calendarWeekends}
                events={this.state.calendarEvents}
                dateClick={this.handleDateClick}
                eventClick={this.handleEventClick}
            />
        </div>
        )
        return content
    }

    render() {
        const addEventModalForm = this.addEventModalForm()
        const calendar = this.displayCalendar()

        let viewModal = null

        if (this.state.editModal === "none" || !this.state.editModal) {
            viewModal = this.viewEventModal()
        } else {
            viewModal = this.editEventModal()
        }

        return (
            <div>
                <div className="calendarButtons">
                    <button
                        onClick={(e) => this.addEventModalButton(e)}>
                        {/* <span style={{fontSize:"100px"}}>&#9734;</span> */}
                        <span>&#43;</span> Add Event
                    </button>
                </div>
                <div>
                    {calendar}
                </div>
                <div>
                    {/* {addEventModalForm}
                    {viewEventModal} */}
                    {addEventModalForm}
                    {viewModal}
                </div>
            </div>
        )
    }
}