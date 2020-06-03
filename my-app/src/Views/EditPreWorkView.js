import React, { Component } from 'react';
import { retrieveRoutineItem, createRoutineItem, editRoutineItem, removeRoutineItem } from '../Controllers/RoutineController'
import firebase from 'firebase/app';

export default class EditPreWorkView extends Component {
    constructor(props) {
        super(props)

        this.listInfo = this.listInfo.bind(this)

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

        if (this.props.user) {
            rootPath.once('value', (snapshot) => {
                let info = snapshot.val()
                console.log(info)
                if (info) {
                    console.log(info[this.props.user.uid])
                    // let keys = Object.keys(info)
                    let itemMap = new Map()
    
                    let keys = Object.keys(info[this.props.user.uid])
                    
                    keys.map((key) => {
                        itemMap.set(key, info[this.props.user.uid][key])
                    })
                    this.setState((state) => {
                        state.checklistItems = itemMap
                        return state
                    })
                }
            })
        }
    }

    // Event Handlers

    submitEditItem(e) {
        e.preventDefault()
        editRoutineItem(this.state.editItemName, this.props.user.uid, this.state.currentListItemID)
        let newMap = this.state.checklistItems
        console.log(newMap)
        let item = newMap.get(this.state.currentListItemID)
        console.log(item)
        item.name = this.state.editItemName
        newMap.set(this.state.currentListItemID, item)
        this.setState((state) => {
            state.checklistItems = newMap
            state.editItemModal = "none"
            return state
        })
    }
    
    removeItem(e) {
        e.preventDefault()
        removeRoutineItem(this.props.user.uid, this.state.currentListItemID)
        let newMap = this.state.checklistItems
        newMap.delete(this.state.currentListItemID)

        this.setState((state) => {
            state.checklistItems = newMap
            state.editItemModal = "none"
            return state
        })
    }

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
            this.state.addItemModal = "none"
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
            state.editItemName = ""
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

    closeEditItemModal(e) {
        e.preventDefault()
        this.setState((state) => {
            state.editItemModal = "none";
            return state
        })
    }

    // Display Functions

    editItemModal() {
        let content = (
            <div className="modalBox"
                style={{display: this.state.editItemModal}}>
                <div>
                    <form className="preWorkModalForm">
                        <button
                            onClick={(e) => this.closeEditItemModal(e)}
                            className="closeModal">
                                X
                            </button>
                        <div className="preWorkModalContent">
                            <div>
                                <input id="editName"
                                    onChange={(e) => this.handleChange(e)}
                                    placeholder="Edit Item Name"
                                    name="editItemName"
                                    value={this.state.editItemName}/>
                            </div>
                            <div id="saveRemoveButtons">
                                <button
                                    onClick={(e) => this.submitEditItem(e)}
                                    className="editSave">Save</button>
                                <button
                                    onClick={(e) => this.removeItem(e)}
                                    className="itemRemoveButton">
                                        Remove
                                </button>
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
                    <form className="preWorkModalForm">
                        <button
                            onClick={(e) => this.closeAddItemModal(e)} 
                            className="closeModal">
                            X
                        </button>
                        <div className="preWorkModalContent">
                            <div>
                                <input className="modalInput" required
                                    id="addName"
                                    onChange={(e) => this.handleChange(e)}
                                    placeholder="PreWork Name"
                                    type="text"
                                    name="preWorkName"
                                />
                            </div>
                            <button
                                id="addItemButton"
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
            return <PreworkItem
                listInfo={this.listInfo}
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
                    </div>
                    <div>
                        <ul className="listGroup">
                            {checklistItems}
                        </ul>
                    </div>
                    <div>
                        <button className="addItemButton"
                            onClick={(e) => this.openAddItemModal(e)}>
                            <span>&#43;</span>
                        </button>
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

    listInfo(e, id, name) {
        e.preventDefault()
        this.setState((state) => {
            state.editItemModal = "block"
            state.currentListItemID = id
            state.currentListItemName = name
            return state
        })
    }

    render() {
        let displayPreWork = this.displayPreWork()
        let addItemModal = this.addItemModal()
        let editItemModal = this.editItemModal()

        return (
            <div className="editPreWorkView">
                <div>
                    {displayPreWork}
                </div>
                <div>
                    {addItemModal}
                    {editItemModal}
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
            <div className="editPreWorkListItem">
                <li className="listpreWork"><button 
                onClick={(e) => this.props.listInfo(e, this.props.id, this.props.name)}
                className="listButton">{this.props.name}</button></li>
            </div>
        )
    }
}
