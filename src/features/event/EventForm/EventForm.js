import React, {Component} from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const emptyEvent = {
  title:'',
  date:'',
  city:'',
  venue:'',
  hostedBy:''
};

class EventForm extends Component {
  state={
    event: emptyEvent
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if( !this.props.selectedEvent && !prevProps.selectedEvent) return;
    if (this.props.selectedEvent.id !== prevProps.selectedEvent.id) {
      this.setState({
        event: this.props.selectedEvent || emptyEvent
      })
    }
  }


  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
    } else {
      this.props.handleCreateEvent(this.state.event);
    }
  };

  onInputChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent
    })
  };


  render() {
    const { handleFormCancel } = this.props;
    const {event} = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input name='title' placeholder="Event Title" value={event.title} onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input name='date' type="date" placeholder="Event Date" value={event.date}onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name='city' placeholder="City event is taking place" value={event.city} onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name='venue' placeholder="Enter the Venue of the event" value={event.venue} onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name='hostedBy' placeholder="Enter the name of person hosting" value={event.hostedBy} onChange={this.onInputChange}/>
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={handleFormCancel}>Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;