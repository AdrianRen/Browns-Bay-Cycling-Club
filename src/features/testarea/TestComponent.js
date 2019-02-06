import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
// import Script from 'react-load-script';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
// import GoogleMapReact from 'google-map-react';
import {incrementCounter, decrementCounter} from "./testActions";
import { openModal } from '../modals/ModalActions';

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter,
  openModal
};
// const Marker = () => <Icon name='marker' size='big' color='red'/>;


class TestComponent extends Component {

  state = {
    address:'',
    scriptLoaded: false
  };

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  };

  // onChange = address => {this.setState({address})};

  // handleScriptLoad = () => {this.setState({scriptLoaded:true})};

  render() {
    const { incrementCounter, decrementCounter, data, openModal} = this.props;
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    };

    return (
      <div>
        {/*<Script*/}
          {/*url='https://maps.googleapis.com/maps/api/js?key=AIzaSyD2T-8dpGEEgf5XfVnUCb6SOCsYcYCEtzA&libraries=places'*/}
          {/*onLoad={this.handleScriptLoad}*/}
        {/*/>*/}
        <h1>test area</h1>
        <h4>The Answer is: {data}</h4>
        <Button onClick={incrementCounter} color='green' content='Increment'/>
        <Button onClick={decrementCounter} color='red' content='Decrement'/>
        <Button onClick={() => openModal('TestModal', {data: 43})} color='yellow' content='Open Modal'/>
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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {/*<div style={{ height: '300px', width: '100%' }}>*/}
          {/*<GoogleMapReact*/}
            {/*bootstrapURLKeys={{ key: 'AIzaSyD2T-8dpGEEgf5XfVnUCb6SOCsYcYCEtzA' }}*/}
            {/*defaultCenter={this.props.center}*/}
            {/*defaultZoom={this.props.zoom}*/}
          {/*>*/}
            {/*<Marker*/}
              {/*lat={59.955413}*/}
              {/*lng={30.337844}*/}
              {/*text="My Marker"*/}
            {/*/>*/}
          {/*</GoogleMapReact>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default connect(mapState, actions)(TestComponent);