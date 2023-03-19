export const SET_LEVEL = 'SET_LEVEL';
export const SET_CLASS = 'SET_CLASS';
export const SET_HERO = 'SET_HERO';

export function actionSetLevel(level) {
  return {
    type: SET_LEVEL,
    payload: level,
  };
}

export function actionSetClass(classes) {
  return {
    type: SET_CLASS,
    payload: classes,
  };
}

export function actionSetHero(hero) {
  return {
    type: SET_HERO,
    payload: hero,
  };
}
