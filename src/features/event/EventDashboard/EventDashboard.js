import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '../../../features/event/EventList/EventList';

const Column = Grid.Column;

class EventDashboard extends Component {
  render() {
    return (
      <Grid>
        <Column width={10}>
          <EventList/>
        </Column>

        <Column width={6}>
          <h1>Right Column</h1>
        </Column>
      </Grid>
    );
  }
}

export default EventDashboard;