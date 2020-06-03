(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,a){e.exports=a(54)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),i=a.n(r),c=a(7),o=(a(39),a(3)),s=a(4),u=a(6),m=a(5),d=a(8),v=(a(40),a(9)),p=a.n(v),h=a(14),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"componentDidUpdate",value:function(){console.log(this.props)}},{key:"displayEvent",value:function(){var e=this,t="12:00 AM"!==this.props.currentStart?this.props.currentStart:"",a=""!==this.props.currentEnd?" - "+this.props.currentEnd:"",n=""!==this.props.currentLocation?this.props.currentLocation:"No Location";return l.a.createElement("div",{className:"modalContent"},l.a.createElement("div",null,l.a.createElement("h2",null,this.props.currentTitle)),l.a.createElement("div",null,l.a.createElement("p",null,this.props.currentDate)),l.a.createElement("div",null,l.a.createElement("p",null,t,a)),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("span",null,"\u2726"),n)),l.a.createElement("div",null,l.a.createElement("p",null,this.props.currentDescription)),l.a.createElement("button",{onClick:function(t){return e.props.editViewEventModalButton(t)},className:"editButton"},l.a.createElement("span",null,"\u270e")),l.a.createElement("button",{onClick:function(t){return e.props.removeCalendarEvent(t)},className:"removeButton"},l.a.createElement("span",null,"\ud83d\uddd1")))}},{key:"render",value:function(){var e=this.displayEvent();return l.a.createElement("div",null,e)}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"componentDidUpdate",value:function(){console.log(this.props)}},{key:"displayEditEvent",value:function(){var e=this;return l.a.createElement("div",{className:"modalContent"},l.a.createElement("div",null,l.a.createElement("input",{className:"modalInput",onChange:function(t){return e.props.handleChange(t)},id:"eventName",placeholder:"Event Name",type:"text",name:"eventName"})),l.a.createElement("div",null,l.a.createElement("label",{className:"modalLabel"},l.a.createElement("b",null,"Date")),l.a.createElement("input",{className:"modalInput",onChange:function(t){return e.props.handleChange(t)},type:"date",name:"eventDate"})),l.a.createElement("div",{id:"timeRange"},l.a.createElement("label",{className:"modalLabel"},l.a.createElement("b",null,"Time Range")),l.a.createElement("input",{className:"modalInputTime",onChange:function(t){return e.props.handleChange(t)},type:"time",name:"eventTime1"}),l.a.createElement("input",{className:"modalInputTime",onChange:function(t){return e.props.handleChange(t)},min:this.props.eventTime1,type:"time",name:"eventTime2"})),l.a.createElement("div",null,l.a.createElement("label",{className:"modalLabel"},l.a.createElement("b",null,"Location")),l.a.createElement("input",{className:"modalInput",onChange:function(t){return e.props.handleChange(t)},placeholder:"Event Location",type:"text",name:"eventLocation"})),l.a.createElement("div",{id:"textAreaDescription"},l.a.createElement("label",{className:"modalLabel"},l.a.createElement("b",null,"Event Description")),l.a.createElement("textarea",{maxlength:"500",className:"modalInput",placeholder:"Enter a description",onChange:function(t){return e.props.handleChange(t)},rows:"4",cols:"50",name:"eventDescription"})),l.a.createElement("div",null,l.a.createElement("label",{className:"modalLabel"},l.a.createElement("b",null,"Attendees")),l.a.createElement("input",{className:"modalInput",onChange:function(t){return e.props.handleChange(t)},placeholder:"Search...",type:"textarea",name:"eventDescription"})),l.a.createElement("div",null,l.a.createElement("label",{className:"modalLabel"},l.a.createElement("b",null,"Reminders?")),l.a.createElement("input",{className:"modalInput",onChange:function(t){return e.props.handleChange(t)},type:"checkbox",name:"eventReminders"}),l.a.createElement("span",null,"Yes")),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(t){return e.props.updateCalendarEvent(t)},className:"save"},l.a.createElement("b",null,"Save"))))}},{key:"render",value:function(){var e=this.displayEditEvent();return l.a.createElement("div",null,e)}}]),a}(n.Component);function b(e,t){var a=p.a.database().ref(t).push(e).getKey();return console.log(a),a}function g(e,t){"routine"===t.substring(0,7)?p.a.database().ref(t).update({name:e}):p.a.database().ref(t).update({event:e})}function k(e){p.a.database().ref(e).remove()}var y=a(30),C=a(1),N=a(16),I=a(31),D=a(32),M=(a(41),a(42),a(43),a(44),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(o.a)(this,a),(n=t.call(this,e)).handleEventClick=function(e){var t="";console.log(e.event.start),console.log(e.event.end);var a=Object(C.jb)(e.event.start,{hour:"numeric",minute:"2-digit"});e.event.end&&(t=Object(C.jb)(e.event.end,{hour:"numeric",minute:"2-digit"}),console.log(t));var l=Object(C.jb)(e.event.start,{month:"long",year:"numeric",day:"numeric",weekday:"long"});console.log(l),n.setState((function(n){return n.currentDescription=e.event.extendedProps.description,n.currentTitle=e.event.title,n.currentAttendees=e.event.extendedProps.attendees,n.currentLocation=e.event.extendedProps.location,n.currentDate=l,n.currentStart=a,n.currentEnd=t,n.eventModal="block",n.currentID=e.event.id,n}))},n.handleChange=function(e){var t=e.target.name,a=e.target.value,l={};l[t]=a,n.setState(l)},n.calendarComponentRef=l.a.createRef();new Date("June 2, 2020"),new Date("June 3, 2020");return n.editViewEventModalButton=n.editViewEventModalButton.bind(Object(h.a)(n)),n.removeCalendarEvent=n.removeCalendarEvent.bind(Object(h.a)(n)),n.addCalendarEvent=n.addCalendarEvent.bind(Object(h.a)(n)),n.updateCalendarEvent=n.updateCalendarEvent.bind(Object(h.a)(n)),n.state={calendarWeekends:!0,calendarEvents:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log("Mounted"),console.log(this.props),this.retrieveUserCalendar()}},{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"retrieveUserCalendar",value:function(){var e=this;p.a.database().ref("events").once("value",(function(t){var a=t.val();if(a){console.log(a);var n=a[e.props.user.uid];console.log(n);var l=Object.keys(n).map((function(e){return console.log(n[e].start),n[e].start=Date.parse(n[e].start),n[e].end=Date.parse(n[e].end),n[e].id=e,n[e]}));e.setState((function(e){return e.calendarEvents=l,e}))}}))}},{key:"stringToHash",value:function(e){var t=0;if(0==e.length)return t;for(var a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a),t&=t}return t}},{key:"addCalendarEvent",value:function(e){e.preventDefault();var t=this.state.eventTime1?this.state.eventTime1:"",a=new Date(this.state.eventDate+"T00:00:00"),n="",l=!0;""!==t&&(a=new Date(this.state.eventDate+" "+this.state.eventTime1),l=!1),this.state.eventTime2&&(n=new Date(this.state.eventDate+" "+this.state.eventTime2));var r,i,c=this.state.eventDescription?this.state.eventDescription:"",o=this.state.eventLocation?this.state.eventLocation:"",s={title:this.state.eventName,start:a.toString(),end:n.toString(),description:c,allDay:l,location:o},u=(r=s,i=this.props.user.uid,b(r,"events/"+i));this.setState({calendarEvents:this.state.calendarEvents.concat({title:this.state.eventName,start:a,end:n,description:c,location:o,id:u,allDay:l})})}},{key:"updateCalendarEvent",value:function(e){e.preventDefault();this.state.calendarEvents;console.log(this.state)}},{key:"removeCalendarEvent",value:function(e){e.preventDefault();var t=function(e,t,a){var n;return n=e.length<=1?[]:e.filter((function(e){return e.id!=t})),k("events/"+a+"/"+t),n}(this.state.calendarEvents,this.state.currentID,this.props.user.uid);this.updateArray(t)}},{key:"updateArray",value:function(e){this.setState((function(t){return t.calendarEvents=e,t}))}},{key:"addEventModalButton",value:function(e){e.preventDefault(),this.setState((function(e){return e.addEventModal="block",e}))}},{key:"editViewEventModalButton",value:function(e){e.preventDefault(),this.setState((function(e){return e.eventModal="none",e.editModal="block;",e}))}},{key:"closeAddEventModalButton",value:function(e){e.preventDefault(),this.setState((function(e){return e.addEventModal="none",e}))}},{key:"closeViewEventModalButton",value:function(e){e.preventDefault(),this.setState((function(e){return e.eventModal="none",e}))}},{key:"closeEditEventModalButton",value:function(e){e.preventDefault(),this.setState((function(e){return e.editModal="none",e}))}},{key:"addEventModalForm",value:function(){var e=this,t=null;return"on"===this.state.eventRepeating?(console.log("Yes!"),t=l.a.createElement("div",{className:"repeatingForm"},l.a.createElement("div",null,l.a.createElement("label",{className:"repeatingLabel"},"Daily"),l.a.createElement("input",{className:"repeatingInput",onChange:function(t){return e.handleChange(t)},type:"checkbox",name:"repeatingDaily"}),l.a.createElement("label",{className:"repeatingLabel"},"Weekly"),l.a.createElement("input",{className:"repeatingInput",onChange:function(t){return e.handleChange(t)},type:"checkbox",name:"repeatingWeekly"}),l.a.createElement("label",{className:"repeatingLabel"},"Monthly"),l.a.createElement("input",{className:"repeatingInput",onChange:function(t){return e.handleChange(t)},type:"checkbox",name:"repeatingMonthly"})),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",{className:"repeatingLabel"},"Start Date"),l.a.createElement("input",{className:"repeatingInput",onChange:function(t){return e.handleChange(t)},type:"date",name:"repeatingStartDate"})),l.a.createElement("div",null,l.a.createElement("label",{className:"repeatingLabel"},"End Date"),l.a.createElement("input",{className:"repeatingInput",type:"date",onChange:function(t){return e.handleChange(t)},min:this.state.repeatingStartDate,name:"repeatingEndDate"}))))):t=null,l.a.createElement("div",{className:"modalBox",style:{display:this.state.addEventModal}},l.a.createElement("div",null,l.a.createElement("form",{className:"modalForm"},l.a.createElement("button",{className:"closeModal",onClick:function(t){return e.closeAddEventModalButton(t)}},"X"),l.a.createElement("div",{className:"modalContent"},l.a.createElement("div",null,l.a.createElement("input",{className:"modalInput",required:!0,onChange:function(t){return e.handleChange(t)},id:"eventName",placeholder:"Event Name",type:"text",name:"eventName"})),l.a.createElement("div",null,l.a.createElement("label",{className:"modalLabel"},l.a.createElement("b",null,"Date")),l.a.createElement("input",{className:"modalInput",required:!0,onChange:function(t){return e.handleChange(t)},type:"date",name:"eventDate"})),l.a.createElement("div",{id:"timeRange"},l.a.createElement("label",{className:"modalLabel"},l.a.createElement("b",null,"Time Range")),l.a.createElement("input",{className:"modalInputTime",onChange:function(t){return e.handleChange(t)},type:"time",name:"eventTime1"}),l.a.createElement("input",{className:"modalInputTime",onChange:function(t){return e.handleChange(t)},min:this.state.eventTime1,type:"time",name:"eventTime2"})),l.a.createElement("div",null,l.a.createElement("label",{className:"modalLabel"},l.a.createElement("b",null,"Location")),l.a.createElement("input",{className:"modalInput",value:"",onChange:function(t){return e.handleChange(t)},placeholder:"Event Location",type:"text",name:"eventLocation"})),l.a.createElement("div",{id:"textAreaDescription"},l.a.createElement("label",{className:"modalLabel"},l.a.createElement("b",null,"Event Description")),l.a.createElement("textarea",{maxlength:"500",className:"modalInput",placeholder:"Enter a description",onChange:function(t){return e.handleChange(t)},rows:"4",cols:"50",name:"eventDescription"})),l.a.createElement("div",null,l.a.createElement("label",{className:"modalLabel"},l.a.createElement("b",null,"Attendees")),l.a.createElement("input",{className:"modalInput",onChange:function(t){return e.handleChange(t)},placeholder:"Search...",type:"textarea",name:"eventDescription"})),l.a.createElement("div",null,l.a.createElement("label",{className:"modalLabel"},l.a.createElement("b",null,"Reminders?")),l.a.createElement("input",{className:"modalInput",onChange:function(t){return e.handleChange(t)},type:"checkbox",name:"eventReminders"}),l.a.createElement("span",null,"Yes")),l.a.createElement("div",null,l.a.createElement("label",{className:"modalLabel"},l.a.createElement("b",null,"Repeating Events?")),l.a.createElement("input",{className:"modalInput",onChange:function(t){return e.handleChange(t)},type:"checkbox",name:"eventRepeating"}),l.a.createElement("span",null,"Yes"),t),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(t){return e.addCalendarEvent(t)},className:"save"},l.a.createElement("b",null,"Save")))))))}},{key:"viewEventModal",value:function(){var e=this;return l.a.createElement("div",{className:"modalBox",style:{display:this.state.eventModal}},l.a.createElement("div",null,l.a.createElement("form",{className:"modalForm"},l.a.createElement("button",{className:"closeModal",onClick:function(t){return e.closeViewEventModalButton(t)}},"X"),l.a.createElement(E,Object.assign({},this.state,{editViewEventModalButton:this.editViewEventModalButton,removeCalendarEvent:this.removeCalendarEvent})))))}},{key:"editEventModal",value:function(){var e=this;return l.a.createElement("div",{className:"modalBox",style:{display:this.state.editModal}},l.a.createElement("div",null,l.a.createElement("form",{className:"modalForm"},l.a.createElement("button",{className:"closeModal",onClick:function(t){return e.closeEditEventModalButton(t)}},"X"),l.a.createElement(f,{updateCalendarEvent:this.updateCalendarEvent,handleChange:this.handleChange,currentDescription:this.state.currentDescription,currentTitle:this.state.currentTitle,currentAttendees:this.state.currentAttendees,currentStart:this.state.currentStart,currentEnd:this.state.currentEnd}))))}},{key:"displayCalendar",value:function(){return l.a.createElement("div",{className:"calendar"},l.a.createElement(y.a,{defaultView:"dayGridMonth",header:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},plugins:[N.d,I.a,D.a],ref:this.calendarComponentRef,weekends:this.state.calendarWeekends,events:this.state.calendarEvents,dateClick:this.handleDateClick,eventClick:this.handleEventClick}))}},{key:"render",value:function(){var e=this,t=this.addEventModalForm(),a=this.displayCalendar(),n=null;return n="none"!==this.state.editModal&&this.state.editModal?this.editEventModal():this.viewEventModal(),l.a.createElement("div",null,l.a.createElement("div",{className:"calendarButtons"},l.a.createElement("button",{className:"addItemButton",onClick:function(t){return e.addEventModalButton(t)}},l.a.createElement("span",null,"+")," Add Event")),l.a.createElement("div",null,a),l.a.createElement("div",null,t,n))}}]),a}(n.Component)),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"displayLogo",value:function(){}},{key:"displayNavbar",value:function(){}},{key:"render",value:function(){var e=null;return e=this.props.user?l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",null,"Sign Out")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/profile"},"Profile")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/settings"},"Settings")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"alerts"},"Alerts")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"todo"},"To-Do")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/prework"},"Pre-Work")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"breaks"},"Breaks")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/calendar"},"Calendar"))):l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.c,{to:"/signin"},"Sign-In")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/settings"},"Settings")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"alerts"},"Alerts")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"todo"},"To-Do")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/prework"},"Pre-Work")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"breaks"},"Breaks")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/calendar"},"Calendar"))),l.a.createElement("div",{className:"navBar"},l.a.createElement("p",{className:"logo"},l.a.createElement(c.c,{to:"/"},"Daily Grind")),e)}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"displayFooter",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Created for INFO 442 Spring 2020"))}}]),a}(n.Component);function O(e,t){return b(e,"routine/"+t)}var w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target.name,a=e.target.value,l={};l[t]=a,n.setState(l)},n.state={checklistItems:new Map},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.retrievePreWorkItems()}},{key:"componentDidUpdate",value:function(){}},{key:"retrievePreWorkItems",value:function(){var e=this;p.a.database().ref("routine").once("value",(function(t){var a=t.val();if(console.log(a),a){console.log(a[e.props.user.uid]);var n=new Map;Object.keys(a[e.props.user.uid]).map((function(t){n.set(t,a[e.props.user.uid][t])})),e.setState((function(e){return e.checklistItems=n,e}))}}))}},{key:"addPreWorkItem",value:function(e){var t=this;e.preventDefault();var a=this.state.checklistItems,n={name:this.state.preWorkName,starred:!1},l=O(n,this.props.user.uid);a.set(l,n),this.setState((function(e){return t.state.checklistItems=a,e}))}},{key:"openAddItemModal",value:function(e){e.preventDefault(),this.setState((function(e){return e.addItemModal="block",e}))}},{key:"openEditItemModal",value:function(e){e.preventDefault(),this.setState((function(e){return e.editItemModal="block",e}))}},{key:"closeAddItemModal",value:function(e){e.preventDefault(),this.setState((function(e){return e.preWorkName="",e.addItemModal="none",e}))}},{key:"editItemModal",value:function(){var e=this;return l.a.createElement("div",{className:"modalBox",style:{display:this.state.editItemModal}},l.a.createElement("div",null,l.a.createElement("form",{className:"modalForm"},l.a.createElement("button",{onClick:function(t){return e.closeEditItemModal(t)},className:"closeModal"},"X"),l.a.createElement("div",{className:"modalContent"},l.a.createElement("div",null,l.a.createElement("input",{className:"modalInput"}))))))}},{key:"addItemModal",value:function(){var e=this;return l.a.createElement("div",{className:"modalBox",style:{display:this.state.addItemModal}},l.a.createElement("div",null,l.a.createElement("form",{className:"modalForm"},l.a.createElement("button",{onClick:function(t){return e.closeAddItemModal(t)},className:"closeModal"},"X"),l.a.createElement("div",{className:"modalContent"},l.a.createElement("div",null,l.a.createElement("input",{className:"modalInput",required:!0,onChange:function(t){return e.handleChange(t)},placeholder:"PreWork Name",type:"text",name:"preWorkName"})),l.a.createElement("button",{onClick:function(t){return e.addPreWorkItem(t)}},"Add")))))}},{key:"renderPreWorkList",value:function(){return Array.from(this.state.checklistItems.entries()).map((function(e){return l.a.createElement(W,{id:e[0],name:e[1].name,starred:e[1].starred})}))}},{key:"displayPreWork",value:function(){var e=this.renderPreWorkList();return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"preWorkTitleElements"},l.a.createElement("div",null,l.a.createElement("h2",null,"Pre-Work Items")),l.a.createElement("div",null)),l.a.createElement("div",null,l.a.createElement("ul",{className:"listGroup"},e))))}},{key:"displayEditPreWork",value:function(){}},{key:"render",value:function(){var e=this.displayPreWork(),t=this.addItemModal();return l.a.createElement("div",{className:"preWorkView"},l.a.createElement("div",null,e),l.a.createElement("div",null,t))}}]),a}(n.Component),W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.starred?l.a.createElement("button",{className:"starButton"},l.a.createElement("span",null,"\u2605")):l.a.createElement("button",{className:"starButton"},l.a.createElement("span",null,"\u2606"));return l.a.createElement("div",null,l.a.createElement("li",{className:"listpreWork"},e,l.a.createElement("button",{className:"listButton"},this.props.name)))}}]),a}(n.Component),P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={date:(new Date).toDateString()},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){var e=new Date,t=e.getHours(),a=e.getMinutes(),n=t>=12?"PM":"AM";t=(t%=12)||12,a=a<10?"0"+a:a,this.setState({time:t+":"+a+" "+n})}},{key:"render",value:function(){return l.a.createElement("div",{className:"welcome"},l.a.createElement("div",{className:"welcomeText"},l.a.createElement("h2",null,"Today is"),l.a.createElement("h1",null,this.state.date),l.a.createElement("h2",null,this.state.time)),l.a.createElement("div",{className:"preWorkView"},l.a.createElement(w,this.props)))}}]),a}(n.Component),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"handleChangeJT",value:function(e){this.setState({jobTitle:e.target.jobTitle})}},{key:"handleSubmitJT",value:function(e){e.preventDefault(),this.handleChange(this.state.jobTitle)}},{key:"handleChangeS",value:function(e){this.setState({status:e.target.status})}},{key:"handleSubmitS",value:function(e){e.preventDefault(),this.handleChange(this.state.status)}},{key:"handleChangeBio",value:function(e){this.setState({bio:e.target.bio})}},{key:"handleSubmitBio",value:function(e){e.preventDefault(),this.handleChange(this.state.bio)}},{key:"handleChangeOH",value:function(e){this.setState({officeHours:e.target.officeHours})}},{key:"handleSubmitOH",value:function(e){e.preventDefault(),this.handleChange(this.state.officeHours)}},{key:"displayPreferredContacts",value:function(e){return l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",{rowspan:"2"},l.a.createElement("img",{src:e.profilePhoto,alt:"User's Profile Photo"})),l.a.createElement("td",null,e.name)),l.a.createElement("tr",null,l.a.createElement("td",null,e.organization))))}},{key:"addToContacts",value:function(){}},{key:"displayProfile",value:function(){var e=l.a.createElement("div",null,l.a.createElement("table",{className:"profile"},l.a.createElement("tr",null,l.a.createElement("td",{rowspan:"2"},l.a.createElement("img",{src:this.props.user.profilePhoto,alt:"User's Profile Photo"})),l.a.createElement("td",null,this.props.user.name)),l.a.createElement("tr",null,l.a.createElement("td",null,this.props.user.organization)),l.a.createElement("tr",null,l.a.createElement("td",null,this.props.user.theme)),l.a.createElement("tr",null,l.a.createElement("td",{colspan:"2",style:"text-allign: right"},l.a.createElement("span",{className:"input-group-btn"},l.a.createElement(c.b,{to:"/settings"},"Edit")))))),t=null;t=this.props.user.jobTitle?l.a.createElement("div",null,l.a.createElement("p",null,"Job title: ",this.props.user.jobTitle)):l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmitJT},l.a.createElement("div",null,l.a.createElement("label",null,"Job title:",l.a.createElement("input",{type:"text",onChange:this.handleChangeJT})),l.a.createElement("input",{type:"submit",value:"Submit"})))),t=this.props.user.status?l.a.createElement("div",null,l.a.createElement("p",null,"Status: ",this.props.user.status)):l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmitS},l.a.createElement("div",null,l.a.createElement("label",null,"Status:",l.a.createElement("input",{type:"text",onChange:this.handleChangeS})),l.a.createElement("input",{type:"submit",value:"Submit"})))),t=this.props.user.bio?l.a.createElement("div",null,l.a.createElement("p",null,"Status: ",this.props.user.bio)):l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmitBio},l.a.createElement("div",null,l.a.createElement("label",null,"Bio:",l.a.createElement("input",{type:"text",onChange:this.handleChangeBio})),l.a.createElement("input",{type:"submit",value:"Submit"})))),t=this.props.user.status?l.a.createElement("div",null,l.a.createElement("p",null,"Office Hours: ",this.props.user.officeHours)):l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmitOH},l.a.createElement("div",null,l.a.createElement("label",null,"Office Hours:",l.a.createElement("input",{type:"text",onChange:this.handleChangeOH})),l.a.createElement("input",{type:"submit",value:"Submit"}))));for(var a=l.a.createElement("div",null,l.a.createElement("h1",null,"Preferred Contacts")),n=this.props.user.preferredContacts,r=0;r<n.length;r++)a+=this.displayPreferredContacts(n[r]);return a+=l.a.createElement("button",{onClick:this.addToContacts},"Add contacts"),l.a.createElement("div",null,l.a.createElement("div",null,e),l.a.createElement("div",null,t,a))}},{key:"handleChange",value:function(e){}},{key:"render",value:function(){var e=this.displayProfile();return this.props.user?{displayProfile:e}:l.a.createElement("div",null,l.a.createElement("p",null,"Please log-in or sign-up in order to access your profile."))}}]),a}(n.Component),B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"displayUnreadAlerts",value:function(e){return l.a.createElement("div",{className:"unread"},l.a.createElement("h2",{className:"unread"},e.title),l.a.createElement("h6",{className:"unread"},e.date.toDateString()," at ",e.time),l.a.createElement("p",{className:"unread"},e.description),l.a.createElement("button",{onClick:this.handleReadAlert,id:"unread"},"Mark as Read"),l.a.createElement("button",{onClick:this.handleDelete,className:"delete"},"Delete"))}},{key:"displayReadAlerts",value:function(e){return l.a.createElement("div",{className:"read"},l.a.createElement("h2",{className:"read"},e.title),l.a.createElement("h6",{className:"read"},e.date.toDateString()," at ",e.time),l.a.createElement("p",{className:"read"},e.description),l.a.createElement("button",{onClick:this.handleDelete,className:"delete"},"Delete"))}},{key:"handleReadAlert",value:function(e){}},{key:"handleDelete",value:function(e){}},{key:"render",value:function(){return l.a.createElement("div",null,null)}}]),a}(n.Component);var L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSignIn=function(e){e.preventDefault()},n.handleChange=function(e){var t=e.target.name,a=e.target.value,l={};l[t]=a,n.setState(l)},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("form",{className:"signInForm"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"Email")),l.a.createElement("div",null,l.a.createElement("input",{type:"email",name:"email",onChange:function(t){return e.handleChange(t)}}))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"Password")),l.a.createElement("div",null,l.a.createElement("input",{type:"password",name:"password",onChange:function(t){return e.handleChange(t)}}))),l.a.createElement("button",{className:"regButton"},"Login")),l.a.createElement("div",null,l.a.createElement(c.c,{id:"createAccountNav",to:"/signup"},"Create Account")))}}]),a}(n.Component),T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target.name,a=e.target.value,l={};l[t]=a,n.setState(l)},n}return Object(s.a)(a,[{key:"handleSignUp",value:function(e){if(e.preventDefault(),this.state.email&&this.state.password&&this.state.password===this.state.retypePassword){var t=(a=this.state.email,n=this.state.password,void p.a.auth().createUserWithEmailAndPassword(a,n).then((function(){var e=p.a.auth().currentUser,t={email:e.email,uid:e.uid.toString()};return b(t,"users/"+e.uid.toString()),t})).catch((function(e){return console.log(e.message),e.message})));this.setState(t)}else console.log("Error creating account");var a,n}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("form",{className:"signInForm"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"Email")),l.a.createElement("div",null,l.a.createElement("input",{type:"email",name:"email",onChange:function(t){return e.handleChange(t)}}))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"Password")),l.a.createElement("div",null,l.a.createElement("input",{type:"password",name:"password",onChange:function(t){return e.handleChange(t)}}))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"Retype Password")),l.a.createElement("div",null,l.a.createElement("input",{type:"password",name:"retypePassword",onChange:function(t){return e.handleChange(t)}}))),l.a.createElement("button",{onClick:function(t){return e.handleSignUp(t)},className:"createAccount"},"Create Account")),l.a.createElement("div",null,l.a.createElement(c.c,{id:"navLinkAccount",to:"/signin"},"Already Have an Account?")))}}]),a}(n.Component),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target.name,a=e.target.value,l={};l[t]=a,n.setState(l)},n.listInfo=n.listInfo.bind(Object(h.a)(n)),n.state={checklistItems:new Map},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log("Test!"),this.retrievePreWorkItems()}},{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"retrievePreWorkItems",value:function(){var e=this;p.a.database().ref("routine").once("value",(function(t){var a=t.val();if(console.log(a),a){console.log(a[e.props.user.uid]);var n=new Map;Object.keys(a[e.props.user.uid]).map((function(t){console.log(t,a[e.props.user.uid][t]),n.set(t,a[e.props.user.uid][t])})),e.setState((function(e){return e.checklistItems=n,e}))}}))}},{key:"submitEditItem",value:function(e){var t,a,n;e.preventDefault(),t=this.state.editItemName,a=this.props.user.uid,n=this.state.currentListItemID,g(t,"routine/"+a+"/"+n)}},{key:"removeItem",value:function(e){var t,a;e.preventDefault(),t=this.props.user.uid,a=this.state.currentListItemID,k("routine/"+t+"/"+a)}},{key:"addPreWorkItem",value:function(e){var t=this;e.preventDefault();var a=this.state.checklistItems,n={name:this.state.preWorkName,starred:!1},l=O(n,this.props.user.uid);a.set(l,n),this.setState((function(e){return t.state.checklistItems=a,e}))}},{key:"openAddItemModal",value:function(e){e.preventDefault(),this.setState((function(e){return e.addItemModal="block",e}))}},{key:"openEditItemModal",value:function(e){e.preventDefault(),this.setState((function(e){return e.editItemModal="block",e}))}},{key:"closeAddItemModal",value:function(e){e.preventDefault(),this.setState((function(e){return e.preWorkName="",e.addItemModal="none",e}))}},{key:"editItemModal",value:function(){var e=this;return l.a.createElement("div",{className:"modalBox",style:{display:this.state.editItemModal}},l.a.createElement("div",null,l.a.createElement("form",{className:"preWorkModalForm"},l.a.createElement("button",{onClick:function(t){return e.closeEditItemModal(t)},className:"closeModal"},"X"),l.a.createElement("div",{className:"preWorkModalContent"},l.a.createElement("div",null,l.a.createElement("input",{id:"editName",onChange:function(t){return e.handleChange(t)},placeholder:"Edit Item Name",name:"editItemName"})),l.a.createElement("div",{id:"saveRemoveButtons"},l.a.createElement("button",{onClick:function(t){return e.submitEditItem(t)},className:"editSave"},"Save"),l.a.createElement("button",{onClick:function(t){return e.removeItem(t)},className:"itemRemoveButton"},"Remove"))))))}},{key:"addItemModal",value:function(){var e=this;return l.a.createElement("div",{className:"modalBox",style:{display:this.state.addItemModal}},l.a.createElement("div",null,l.a.createElement("form",{className:"modalForm"},l.a.createElement("button",{onClick:function(t){return e.closeAddItemModal(t)},className:"closeModal"},"X"),l.a.createElement("div",{className:"modalContent"},l.a.createElement("div",null,l.a.createElement("input",{className:"modalInput",required:!0,onChange:function(t){return e.handleChange(t)},placeholder:"PreWork Name",type:"text",name:"preWorkName"})),l.a.createElement("button",{onClick:function(t){return e.addPreWorkItem(t)}},"Add")))))}},{key:"renderPreWorkList",value:function(){var e=this;return Array.from(this.state.checklistItems.entries()).map((function(t){return l.a.createElement(R,{listInfo:e.listInfo,id:t[0],name:t[1].name,starred:t[1].starred})}))}},{key:"displayPreWork",value:function(){var e=this,t=this.renderPreWorkList();return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"preWorkTitleElements"},l.a.createElement("div",null,l.a.createElement("h2",null,"Pre-Work Items"))),l.a.createElement("div",null,l.a.createElement("ul",{className:"listGroup"},t)),l.a.createElement("div",null,l.a.createElement("button",{className:"addItemButton",onClick:function(t){return e.openAddItemModal(t)}},l.a.createElement("span",null,"+")))))}},{key:"displayEditPreWork",value:function(){}},{key:"listInfo",value:function(e,t,a){e.preventDefault(),this.setState((function(e){return e.editItemModal="block",e.currentListItemID=t,e.currentListItemName=a,e}))}},{key:"render",value:function(){var e=this.displayPreWork(),t=this.addItemModal(),a=this.editItemModal();return l.a.createElement("div",{className:"editPreWorkView"},l.a.createElement("div",null,e),l.a.createElement("div",null,t,a))}}]),a}(n.Component),R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"editPreWorkListItem"},l.a.createElement("li",{className:"listpreWork"},l.a.createElement("button",{onClick:function(t){return e.props.listInfo(t,e.props.id,e.props.name)},className:"listButton"},this.props.name)))}}]),a}(n.Component),U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={user:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.authUnSubFunction=p.a.auth().onAuthStateChanged((function(t){t?e.setState({user:t}):e.setState({user:null})}))}},{key:"componentWillUnmount",value:function(){this.authUnSubFunction()}},{key:"render",value:function(){var e,t=this;return e=l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",render:function(){return l.a.createElement(P,t.state)}}),l.a.createElement(d.a,{path:"/calendar",render:function(){return l.a.createElement(M,t.state)}}),l.a.createElement(d.a,{path:"/profile",component:A}),l.a.createElement(d.a,{path:"/alerts",component:B}),l.a.createElement(d.a,{path:"/signin",component:L}),l.a.createElement(d.a,{path:"/prework",render:function(){return l.a.createElement(x,Object.assign({},t.state,{currentUser:t.state.user}))}}),l.a.createElement(d.a,{path:"/signup",render:function(){return l.a.createElement(T,t.state)}})),l.a.createElement("div",{className:"DailyGrind"},l.a.createElement("header",{className:"header"},l.a.createElement(S,{user:this.state.user})),l.a.createElement("main",null,e),l.a.createElement("footer",{className:"footer"},l.a.createElement(j,null)))}}]),a}(n.Component);a(49),a(51),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.initializeApp({apiKey:"AIzaSyBo_JJSCm3s7IVHAoMuh5WnjuEhny4HqZY",authDomain:"info442-s20-dailygrind.firebaseapp.com",databaseURL:"https://info442-s20-dailygrind.firebaseio.com",projectId:"info442-s20-dailygrind",storageBucket:"info442-s20-dailygrind.appspot.com",messagingSenderId:"550288362845",appId:"1:550288362845:web:ee14e06dccc6b03d526cb4",measurementId:"G-G09PD0YC5K"}),i.a.render(l.a.createElement(c.a,null,l.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.7848cd70.chunk.js.map