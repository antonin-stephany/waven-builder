export const SET_RING = 'SET_RING';

export function actionSetRing({value, label}) {
    return {
      type: SET_RING,
      payload: {value, label}
    };
  }