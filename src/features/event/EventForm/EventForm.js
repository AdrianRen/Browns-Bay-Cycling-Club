import React, {Component} from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { updateEvent, createEvent } from "../eventAction";
import { connect } from 'react-redux';
import cuid from "cuid";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title:'',
    date:'',
    city:'',
    venue:'',
    hostedBy:''
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter( event => event.id === eventId)[0];
  }

  return {
    event
  }
};

const actions = {
  updateEvent,
  createEvent
};

class EventForm extends Component {

  state={
    event: Object.assign({}, this.props.event)
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...this.state.event,
        id: cuid(),
        hostPhotoURL: '/assets/user.png'
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events`)
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
          <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(mapState, actions)(EventForm);