import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapState = state => ({
  data: state.test.data
});

class TestComponent extends Component {
  render() {

    return (
      <div>
        <h1>test area</h1>
        <h4>The Answer is: {this.props.data}</h4>
      </div>
    );
  }
}

export default connect(mapState)(TestComponent);