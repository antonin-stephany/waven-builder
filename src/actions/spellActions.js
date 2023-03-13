export const SET_SPELL = 'SET_SPELL';
export const DELETE_SPELL = 'DELETE_SPELL';
export const DELETE_ALL = 'DELETE_ALL';

export function actionSetSpell({value, index}) {
  return {
    type: SET_SPELL,
    payload: {value, index}
  };
}

export function actionDeleteSpell(index) {
  return {
    type: DELETE_SPELL,
    payload: index
  };
}

export function actionDeleteAll() {
  return {
    type: DELETE_ALL,
  };
}