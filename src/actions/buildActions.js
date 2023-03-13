export const SAVE_BUILD = 'SAVE_BUILD';
export const DELETE_BUILD = 'DELETE_BUILD';
export const SET_BUILD = 'SET_BUILD'
export const SAVE_AGAIN_BUILD = 'SAVE_AGAIN_BUILD'
export const NEW_BUILD = 'NEW_BUILD'

export function actionSaveBuild(title, id) {
  return {
    type: SAVE_BUILD,
    payload: {title, id}
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

export function actionSaveAgainBuild(title, id) {
  return {
    type: SAVE_AGAIN_BUILD,
    payload: {title, id}
  };
}

export function actionNewBuild(){
  return {
    type: NEW_BUILD,
  }
}