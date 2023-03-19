export const SET_ITEM = 'SET_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export function actionSetItem({ value, index, type }) {
  return {
    type: SET_ITEM,
    payload: { value, index, type },
  };
}

export function actionDeleteItem({ index, type }) {
  return {
    type: DELETE_ITEM,
    payload: { index, type },
  };
}
