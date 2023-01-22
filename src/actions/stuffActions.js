export const SET_RING = 'SET_RING';
export const DELETE_RING = 'DELETE_RING';

export function actionSetRing({value, label}) {
  return {
    type: SET_RING,
    payload: {value, label}
  };
}

export function actionDeleteRing(label) {
  return {
    type: DELETE_RING,
    payload: label
  };
}