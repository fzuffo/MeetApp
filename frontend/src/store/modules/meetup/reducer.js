// import produce from 'immer';
const initialState = {};

export default function meetupReducer(state = initialState, action) {
  switch (action.type) {
    case '@meetup/SELECTED':
      return action.meetup;

    case '@meetup/CLEAR_MEETUP_SELECTED':
      return (action.meetup = null);

    case '@meetup/CANCEL_MEETUP_SUCCESS':
      return (action.meetup = null);

    default:
      return state;
  }
}
