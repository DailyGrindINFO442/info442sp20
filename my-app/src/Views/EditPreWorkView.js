import React, { Component } from 'react';
import { retrieveRoutineItem, createRoutineItem, editRoutineItem, removeRoutineItem } from '../Controllers/RoutineController'
import firebase from 'firebase/app';

export default class EditPreWorkView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checklistItems: new Map()
            // user: this.props.user.uid
        }
    }

    componentDidMount() {
        console.log("Test!")
        this.retrievePreWorkItems()
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    // Mount Functions

    retrievePreWorkItems() {
        let rootPath = firebase.database().ref('routine')

        rootPath.once('value', (snapshot) => {
            let info = snapshot.val()
            console.log(info)
            if (info) {
                console.log(info[this.props.user.uid])
                // let keys = Object.keys(info)
                let itemMap = new Map()

                let keys = Object.keys(info[this.props.user.uid])
                
                keys.map((key) => {
                    console.log(key, info[this.props.user.uid][key])
                    itemMap.set(key, info[this.props.user.uid][key])
                })
                this.setState((state) => {
                    state.checklistItems = itemMap
                    return state
                })
            }
        })
    }

    // Event Handlers

    addPreWorkItem(e) {
        e.preventDefault()
        let checklistItems = this.state.checklistItems

        let preWorkItem = {
            name: this.state.preWorkName,
            starred: false
        }

        let itemID = createRoutineItem(preWorkItem, this.props.user.uid)

        checklistItems.set(itemID, preWorkItem)

        this.setState((state) => {
            this.state.checklistItems = checklistItems
            return state
        })
    }

    openAddItemModal(e) {
        e.preventDefault()
        this.setState((state) => {
            state.addItemModal = "block"
            return state
        })
    }

    openEditItemModal(e) {
        e.preventDefault()
        this.setState((state) => {
            state.editItemModal = "block"
            return state
        })
    }

    closeAddItemModal(e) {
        e.preventDefault()
        this.setState((state) => {
            state.preWorkName = ""
            state.addItemModal = "none"
            return state
        })
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

    // Display Functions

    editItemModal() {
        let content = (
            <div className="modalBox"
                style={{display: this.state.editItemModal}}>
                <div>
                    <form className="modalForm">
                        <button
                            onClick={(e) => this.closeEditItemModal(e)}
                            className="closeModal">
                                X
                            </button>
                        <div className="modalContent">
                            <div>
                                <input className="modalInput">

                                </input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
        return content
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

    renderPreWorkList() {
        const list = Array.from(this.state.checklistItems.entries()).map((key) => {
            console.log(key)
            return <PreworkItem
                id={key[0]}
                name={key[1].name}
                starred={key[1].starred}/>
        })
        return list
    }

    // Pre-Conditions: PreWorkView is loaded
    // Post-Conditions: Displays pre-work routine
    displayPreWork() {
        const checklistItems = this.renderPreWorkList()

        let content = (
            <div>
                <div>
                    <div className="preWorkTitleElements">
                        <div>
                        <h2>
                            Pre-Work Items
                        </h2>
                        </div>
                        <div>
                        <button className="addItemButton"
                            onClick={(e) => this.openAddItemModal(e)}>
                            <span>&#43;</span> Add Item
                        </button>
                        </div>

                    </div>
                    <div>
                        <ul className="listGroup">
                            {checklistItems}
                        </ul>
                    </div>
                </div>
            </div>
        )
        return content
    }

    // Pre-Conditions: User has clicked "edit" button
    // Post-Conditions: Display edit pop-up & send 
    // filled in information Routine Controller
    displayEditPreWork() {

    }

    render() {
        let displayPreWork = this.displayPreWork()
        let addItemModal = this.addItemModal()

        return (
            <div className="editPreWorkView">
                <div>
                    {displayPreWork}
                </div>
                <div>
                    {addItemModal}
                </div>
            </div>
        )
    }
}
class PreworkItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li className="listpreWork"><button className="listButton">{this.props.name}</button></li>
            </div>
        )
    }
}
