import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '../../../features/event/EventList/EventList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../../../features/event/EventActivity/EventActivity';
import { createEvent, updateEvent, deleteEvent } from "../eventAction";

const Column = Grid.Column;

const mapState = state => ({
  events: state.firestore.ordered.events,
  loading: state.async.loading
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
    const { loading } = this.props;
    if(loading) return <LoadingComponent inverted={true}/>;
    return (
      <Grid>
        <Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent}  events={this.props.events}/>
        </Column>

        <Column width={6}>
          <EventActivity/>
        </Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(
  firestoreConnect([{collection:'events'}])(EventDashboard)
);