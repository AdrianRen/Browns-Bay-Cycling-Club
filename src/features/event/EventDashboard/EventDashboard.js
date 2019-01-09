import React, {Component} from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../../../features/event/EventList/EventList';
import EventForm from '../../../features/event/EventForm/EventForm';
import cuid from 'cuid';

const Column = Grid.Column;
const events_dashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
];

class EventDashboard extends Component {
  constructor(props){
    super(props);

    this.state={
      events: events_dashboard,
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

  handleEditEvent = eventUpdate => () => {
    this.setState({
      selectedEvent: eventUpdate,
      isOpen: true
    })
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
    })
  };

  render() {
    const { events, isOpen, selectedEvent } = this.state;
    return (
      <Grid>
        <Column width={10}>
          <EventList onEventEdit={this.handleEditEvent} events={events}/>
        </Column>

        <Column width={6}>
          <Button positive content={'Create Event'} onClick={this.handleFormOpen}/>
          {isOpen && <EventForm selectedEvent={selectedEvent} handleFormCancle={this.handleFormCancel} handleCreateEvent={this.handleCreateEvent}/>}
        </Column>
      </Grid>
    );
  }
}

export default EventDashboard;