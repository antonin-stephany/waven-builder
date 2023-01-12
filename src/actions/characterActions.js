
export const SAVE_BUILD = 'SAVE_BUILD';

export function actionSaveBuild(inputTitle, inputLevel, inputClass, inputHero) {
  return {
    type: SAVE_BUILD,
    payload: {inputTitle, inputLevel, inputClass, inputHero},
  };
}