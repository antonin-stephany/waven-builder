export const SAVE_BUILD = 'SAVE_BUILD';
export const DELETE_BUILD = 'DELETE_BUILD';

export function actionSaveBuild() {
  return {
    type: SAVE_BUILD,
  };
}

export function actionDeleteBuild(index) {
  return {
    type: DELETE_BUILD,
    payload: index
  };
}