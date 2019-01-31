import React, {Component} from 'react';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { updateEvent, createEvent } from "../eventAction";
import { connect } from 'react-redux';
import {reduxForm, Field} from "redux-form";
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate';
import moment from 'moment';
import cuid from "cuid";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter( event => event.id === eventId)[0];
  }

  return {
    initialValues: event
  }
};

const actions = {
  updateEvent,
  createEvent
};

const category = [
  {key: 'drinks', text: 'Drinks', value: 'drinks'},
  {key: 'culture', text: 'Culture', value: 'culture'},
  {key: 'film', text: 'Film', value: 'film'},
  {key: 'food', text: 'Food', value: 'food'},
  {key: 'music', text: 'Music', value: 'music'},
  {key: 'travel', text: 'Travel', value: 'travel'},
];

const validate = combineValidators({
  title: isRequired({message:'The event is required'}),
  category: isRequired({message:'Please provide a category'}),
  description: composeValidators(
    isRequired({message:'Please enter a description'}),
    hasLengthGreaterThan(4)({message:'Descriptions need to be at least five characters'})
  )(),
  city: isRequired({message:'city is required'}),
  venue: isRequired({message:'venue is required'}),
  date: isRequired({message:'date is required'}),
});

class EventForm extends Component {

  onFormSubmit = value => {
    value.date=moment(value.date).format();
    if (this.props.initialValues.id) {
      this.props.updateEvent(value);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...value,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy:'Adrian'
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events`)
    }
  };


  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Event Details'/>
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field name='title' type='text' component={TextInput} placeholder='Give Your Event a Name'/>
              <Field name='category' type='text' component={SelectInput} placeholder='Category of the event' options={category} multiple={false}/>
              <Field name='description' type='text' rows={3} component={TextArea} placeholder='Description of the event'/>

              <Header sub color='teal' content='Event Location Details'/>
              <Field name='city' type='text' component={TextInput} placeholder='Event City'/>
              <Field name='venue' type='text' component={TextInput} placeholder='Event Venue'/>
              <Field
                name='date'
                type='date'
                component={DateInput}
                dateFormat='DD-MM-YYYY HH:mm'
                timeFormat='HH:mm'
                showTimeSelect
                placeholder='Date and Time of Event'
              />

              <Button positive type="submit" disabled={invalid || submitting || pristine}>
                Submit
              </Button>
              <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(
  reduxForm({form:'eventForm', enableReinitialize:true, validate}
  )(EventForm));