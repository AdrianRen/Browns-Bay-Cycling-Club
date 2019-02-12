import {CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENTS} from "./eventConstants";
import { asyncActionFinish, asyncActionStart, asyncActionError } from "../async/asyncActions";
import { fetchSampleData } from "../../app/data/mockApi";
import {toastr} from 'react-redux-toastr';

export const loadEvents = () =>{
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      let events = await fetchSampleData();
      dispatch(fetchEvents(events));
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  }
};

export const createEvent = event => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_EVENT,
        payload:{
          event
        }
      });
      toastr.success('Success!', 'The event has been created!');
      }
      catch(e) {
        toastr.fail('Oops', 'Something went wrong!')
      }
  };
};

export const updateEvent = event => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_EVENT,
        payload:{
          event
        }
      });
      toastr.success('Success!', 'The event has been updated!');
    }
    catch(e) {
      toastr.fail('Oops', 'Something went wrong!')
    }
  };
};

export const deleteEvent = eventId => {
  return async dispatch => {
    try {
      dispatch({
        type: DELETE_EVENT,
        payload:{
          eventId
        }
      });
      toastr.success('Success!', 'The event has been deleted!');
    }
    catch(e) {
      toastr.fail('Oops', 'Something went wrong!')
    }
  };
};

export const fetchEvents = events => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_EVENTS,
        payload: events
      });
      toastr.success('Success!', 'Events have fetched!');
    }
    catch(e) {
      toastr.fail('Oops', 'Something went wrong!')
    }
  };
};