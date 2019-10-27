export function createSubscriptionRequest(id) {
  return {
    type: '@subscription/CREATE_REQUEST',
    id,
  };
}

export function createSubscriptionSuccess(subscription) {
  return {
    type: '@subscription/CREATE_SUCCESS',
    subscription,
  };
}

export function cancelSubscriptionRequest(id) {
  return {
    type: '@subscription/CANCEL_REQUEST',
    id,
  };
}

export function cancelSubscriptionSuccess(subscription) {
  return {
    type: '@subscription/CANCEL_SUCCESS',
    subscription,
  };
}
