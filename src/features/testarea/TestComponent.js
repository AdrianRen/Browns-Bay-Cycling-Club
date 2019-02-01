import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import Script from 'react-load-script';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import {incrementCounter, decrementCounter} from "./testActions";

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends Component {

  state = {
    address:'',
    scriptLoaded: false
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  };

  onChange = address => {this.setState({address})};

  handleScriptLoad = () => {this.setState({scriptLoaded:true})};

  render() {
    const { incrementCounter, decrementCounter, data} = this.props;
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    };
    return (
      <div>
        <Script
          url='https://maps.googleapis.com/maps/api/js?key=AIzaSyBoY12vzpd57ip2dI9058kJXRcdP9pZ-1s&libraries=places'
          onLoad={this.handleScriptLoad}
        />
        <h1>test area</h1>
        <h4>The Answer is: {data}</h4>
        <Button onClick={incrementCounter} color='green' content='Increment'/>
        <Button onClick={decrementCounter} color='red' content='Decrement'/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Form.Field onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded &&
          <PlacesAutocomplete inputProps={inputProps} />
          }
          <button type="submit">Submit</button>
        </Form.Field>
      </div>
    );
  }
}

export default connect(mapState, actions)(TestComponent);