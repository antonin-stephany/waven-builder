export const SAVE_BUILD = 'SAVE_BUILD';
export const DELETE_BUILD = 'DELETE_BUILD';
export const SET_BUILD = 'SET_BUILD'

export function actionSaveBuild(title) {
  return {
    type: SAVE_BUILD,
    payload: title
  };
}

export function actionDeleteBuild(index) {
  return {
    type: DELETE_BUILD,
    payload: index
  };
}

export function actionSetBuild(index) {
  return {
    type: SET_BUILD,
    payload: index 
  };
}