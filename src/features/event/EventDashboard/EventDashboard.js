import React, {Component} from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../../../features/event/EventList/EventList';
import EventForm from '../../../features/event/EventForm/EventForm';
import { connect } from 'react-redux';
import { createEvent, updateEvent, deleteEvent } from "../eventAction";
import cuid from 'cuid';

const Column = Grid.Column;

const mapState = state => ({
  events: state.events
});

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};

class EventDashboard extends Component {
  constructor(props){
    super(props);

    this.state={
      events: this.props.data,
      isOpen: false,
      selectedEvent: null
    }
  }

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen:true
    })
  };

  handleFormCancel = () => {
    this.setState({
      isOpen:false
    })
  };

  handleOpenEvent = eventToOpen => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    })
  };

  handleUpdateEvent = updateEvent => {
    this.props.updateEvent(updateEvent);
    this.setState({
      // events:this.state.events.map( event => {
      //   if (event.id === updateEvent.id) {
      //     return Object.assign({},updateEvent);
      //   } else {
      //     return event;
      //   }
      // }),
      isOpen: false,
      selectedEvent: null
    })
  };

  handleDeleteEvent = eventId => () =>{
    // const updateEvents = this.state.events.filter(e => e.id !== eventId);
    // this.setState({
    //   events: updateEvents
    // })
    this.props.deleteEvent(eventId);
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    // const updatedEvents = [...this.state.events, newEvent];
    this.props.createEvent(newEvent);
    this.setState({
      // events: updatedEvents,
      isOpen: false
    })
  };

  render() {
    const { isOpen, selectedEvent } = this.state;
    console.log(`props`, this.props);
    return (
      <Grid>
        <Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={this.props.events}/>
        </Column>

        <Column width={6}>
          <Button positive content={'Create Event'} onClick={this.handleFormOpen}/>
          {isOpen && <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} handleFormCancle={this.handleFormCancel} handleCreateEvent={this.handleCreateEvent}/>}
        </Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);