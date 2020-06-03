import React, { Component } from 'react';
import { retrieveRoutineItem, createRoutineItem, editRoutineItem, removeRoutineItem } from '../Controllers/RoutineController'

export default class PreWorkView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checklistItems: []
        }
    }

    retrieveInfo() {
        let checklistItems = retrieveRoutineItem(this.props.user.uid)
        this.setState((state) => {
              state.checklistItems = checklistItems
              return state
        })
    }

    addItem(e) {
        let taskArray = this.state.items
    }

    markDone(index) {
        let checklist = checklistItems[index];
        checklistItems.splice(itemIndex, 1);
        checklist.done = !checklist.done;
        checklist.done ? checklistItems.push(checklist) : checklistItems.unshift(checklist);
        this.setState({checklistItems : checklistItems});  
    }

    // Pre-Conditions: PreWorkView is loaded
    // Post-Conditions: Displays pre-work routine
    displayPreWork() {
        let checklistItems = this.props.checklistItems.map((item, index) => {
            return <preworkItem key={item.index} item={item} index={index} markDone={this.markDone} />
           
        });
        
        return checklistItems

    }

    // Pre-Conditions: User has clicked "edit" button
    // Post-Conditions: Display edit pop-up & send 
    // filled in information Routine Controller
    displayEditPreWork() {

    }

    render() {
        return (
            <div>
                <ul>
                    {displayPreWork}
                </ul>    
            </div>
        )
    }
}
class preworkItem extends Component {

    constructor(props) {
        super(props);
    }

    addTask(item) {
        return <li key={item.key}></li>
    }
    //Renders new <li> element 
    render(){
        let workItem = this.props.item
        return (
            <li className="list-group-item ">
                    
                
            </li>
        )
    }

    //Toggles complete attribute from true to false or vice versa
    toggleFinished(){
        if(this.complete){
            this.complete = false;
        }else{
            this.complete = true;
        }
    }
}

