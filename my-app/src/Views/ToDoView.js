import React, { Component } from 'react';
import { retrieveRoutineItem, createRoutineItem, editRoutineItem, removeRoutineItem } from '../Controllers/RoutineController'
import { retrieveListItem, createListItem, editListItem, removeListItem } from '../Controllers/RoutineController'


export default class ToDoView extends Component {
    
    // Pre-Conditions: ToDoView is loaded
    // Post-Conditions: Displays to do list
    displayToDo() {
    }

    // Pre-Conditions: Item must have been marked as complete
    // Required: Item that has been completed
    // Post-Conditions: Changes status of item & moves it to end of list
    handleCompleteEvent(listItem) {
    }

    render() {
        return (
            <div>      
            </div>
        )
    }
}

export default class ToDoItem extends Component {

}