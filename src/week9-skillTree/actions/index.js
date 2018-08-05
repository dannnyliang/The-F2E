import * as types from './types';

export const clickSkill = name => ({
  type: types.CLICK_SKILL,
  name,
});

export const clickSubcate = name => ({
  type: types.CLICK_SUBCATE,
  name,
});
