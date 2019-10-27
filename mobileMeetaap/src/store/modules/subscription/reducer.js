// import produce from 'immer';
const initialState = {};

export default function subscriptionReducer(state = initialState, action) {
  switch (action.type) {
    case '@subscription/CREATE_SUCCESS':
      return action.subscription;

    case '@subscription/CANCEL_SUCCESS':
      return action.subscription;

    default:
      return state;
  }
}
