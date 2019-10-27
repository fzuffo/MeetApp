import { Alert } from 'react-native';
import { call, all, put, takeLatest } from 'redux-saga/effects';

import {
  createSubscriptionSuccess,
  cancelSubscriptionSuccess,
} from './actions';

import api from '~/services/api';

function* createSubscriptionRequest({ id }) {
  try {
    const response = yield call(api.post, `meetups/${id}/subscriptions`);
    // const subId = response.data.id;
    Alert.alert('Inscrito no meetup com sucesso.');
    console.tron.log(response.data);
    yield put(createSubscriptionSuccess(response.data));
  } catch (err) {
    const { error } = err.response.data;
    Alert.alert(error);
  }
}

function* cancelSubscriptionRequest({ id }) {
  try {
    const response = yield call(api.delete, `meetups/${id}/subscriptions`);

    Alert.alert('Cancelado com sucesso');
    console.tron.log(response.data);
    yield put(cancelSubscriptionSuccess(response.data));
  } catch (err) {
    const { error } = err.response.data;
    Alert.alert(error);
  }
}

export default all([
  takeLatest('@subscription/CREATE_REQUEST', createSubscriptionRequest),
  takeLatest('@subscription/CANCEL_REQUEST', cancelSubscriptionRequest),
]);
