import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {

    case FETCH_STREAM:
      return {...state, [action.payload.id]: action.payload }; // this syntax create a new object, pulls out every record in the previous state object using '...state' and then as the second argument [action.payload.id] to create a new key value and is assigned the value of 'action.payload'

    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload };

    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      return _.omit(state, action.payload);

    case FETCH_STREAMS:
      return {...state, ..._.mapKeys(action.payload, 'id') };

    default:
      return state;
  }
};
