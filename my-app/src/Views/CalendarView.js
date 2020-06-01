import React, { Component } from 'react';
import { retrieveEvent } from '../Controllers/EventController'

import FullCalendar from '@fullcalendar/react'
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


        this.state = {
            calendarWeekends: true,
            calendarEvents: [
            // initial event data
            { title: "Event Now", start: new Date() },
            { title: "Test Date", start: test}
            ]
        }
    }

    componentDidMount() {
        // retrieveEvent()
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    // Pre-Conditions: CalendarView is loaded
    // Post-Conditions: Displays calendar information
    // contained with event information, will default
    // to current week view
    displayCalendar() {
    }

    // // Pre-Conditions: View must have been
    // // selected or changed
    // // Required: View, selected view to change to 
    // // Post-Conditions: Displays calendar and events
    // // in selected view form
    // changeView(view) {
    // }

    handleDateClick = arg => {
        console.log(arg)
        if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
          this.setState({
            // add new event data
            calendarEvents: this.state.calendarEvents.concat({
              // creates a new array
              title: "New Event",
              start: arg.date,
              allDay: arg.allDay
            })
          });
        }
      };

    addEvent(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div>
            <div className="calendar">    
                <FullCalendar defaultView="dayGridMonth"
                    header={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                        }} 
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    ref={ this.calendarComponentRef }
                    weekends={ this.state.calendarWeekends }
                    events={ this.state.calendarEvents }
                    dateClick={ this.handleDateClick }
                    />
            </div>
            <div>
                <button
                    onClick={() => test(this)}>
                    Test
                </button>
            </div>
            </div>
        )
    }
}