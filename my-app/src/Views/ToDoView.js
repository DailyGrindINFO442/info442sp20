import React, { Component } from 'react';
import { retrieveRoutineItem, createRoutineItem, editRoutineItem, removeRoutineItem } from '../Controllers/RoutineController'
import { retrieveListItem, createListItem, editListItem, removeListItem } from '../Controllers/RoutineController'


export default class ToDoView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todolist: new Map(),
            labels: new Map()
        }
    }

    // Mount Functions
     retrievePreWorkItems() {
        let rootPath = firebase.database().ref('todo')

        rootPath.once('value', (snapshot) => {
            let info = snapshot.val()
            if (info) {
            }
        })
    }


    // Event Handlers

    addListItem(e) {
        e.preventDefault()
        let todolistItems = this.state.todolist

        let preWorkItem = {
            name: this.state.preWorkName,
            color: this.state.color,
            starred: false
        }

        let itemID = createRoutineItem(preWorkItem, this.props.user.uid)

        checklistItems.set(itemID, preWorkItem)

        this.setState((state) => {
            this.state.checklistItems = checklistItems
            return state
        })
    }

    addItemModal() {
        let content = (
            <div className="modalBox"
                style={{display: this.state.addItemModal}}>
                <div>
                    <form className="modalForm">
                        <button
                            onClick={(e) => this.closeAddItemModal(e)} 
                            className="closeModal">
                            X
                        </button>
                        <div className="modalContent">
                            <div>
                                <input className="modalInput" required
                                    onChange={(e) => this.handleChange(e)}
                                    placeholder="PreWork Name"
                                    type="text"
                                    name="preWorkName"
                                />
                            </div>
                            <button
                                onClick={(e) => this.addPreWorkItem(e)}>
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
        return content
    }

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
        let addItemModal = this.addItemModal()

        return (
            <div>
                <div className="todolist">
                </div>
                <div className="modalItems">
                    {addItemModal}
                </div>      
            </div>
        )
    }
}

class ToDoItem extends Component {

}