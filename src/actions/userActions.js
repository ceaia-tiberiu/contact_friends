import {
  FETCH_USERS,
  ACCEPTED_USERS,
  REJECTED_USERS,
  COUNT_ACCEPTED,
  COUNT_REJECTED,
} from './types';

export const fetchUsers = () => dispatch => {
  try {
    fetch('http://localhost:3000/data/db.json')
      .then(r => r.json())
      .then(users => {
        dispatch({
          type: FETCH_USERS,
          payload: users.data,
        });
      });
  } catch (error) {
    console.error(error);
  }
};

export const acceptUsers = id => ({
  type: ACCEPTED_USERS,
  payload: id,
});

export const rejectUsers = id => ({
  type: REJECTED_USERS,
  payload: id,
});

export const countAccepted = () => ({
  type: COUNT_ACCEPTED,
  payload: 'accepted',
});

export const countRejected = () => ({
  type: COUNT_REJECTED,
  payload: 'rejected',
});
