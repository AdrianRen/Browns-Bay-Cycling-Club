import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '../../../features/event/EventList/EventList';
import { connect } from 'react-redux';
import { createEvent, updateEvent, deleteEvent } from "../eventAction";

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

  handleDeleteEvent = eventId => () =>{
    this.props.deleteEvent(eventId);
  };

  render() {
    return (
      <Grid>
        <Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent}  events={this.props.events}/>
        </Column>

        <Column width={6}>
        </Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);