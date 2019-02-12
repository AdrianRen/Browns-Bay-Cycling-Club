import React from 'react';
import { Header, Segment } from "semantic-ui-react";

const EventActivity = (props) => {
  return (
    <div>
      <Header attached='top' content='Recent Activity'/>
      <Segment attached>
        <p>Recent Activity</p>
      </Segment>
    </div>
  );
};

EventActivity.propTypes = {};
EventActivity.defaultProps = {};

export default EventActivity;
