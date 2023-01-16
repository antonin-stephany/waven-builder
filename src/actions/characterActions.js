
export const SAVE_BUILD = 'SAVE_BUILD';
export const SET_LEVEL = 'SET_LEVEL';
export const SET_CLASS = 'SET_CLASS';

export function actionSaveBuild(inputTitle, level, classes, inputHero) {
  return {
    type: SAVE_BUILD,
    payload: {inputTitle, level, classes, inputHero},
  };
}

export function actionSetLevel(level) {
  return {
    type: SET_LEVEL,
    payload: level,
  };
}

export function actionSetClass(classes) {
  return {
    type: SET_LEVEL,
    payload: classes,
  };
}