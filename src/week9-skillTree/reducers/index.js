import { CLICK_SUBCATE, CLICK_SKILL } from '../actions/types';

function skill(state = {
  focus: null,
  complete: [],
}, action) {
  switch (action.type) {
    case CLICK_SUBCATE:
      return {
        ...state,
        focus: action.name,
      };
    case CLICK_SKILL:
      if (state.complete.includes(action.name)) {
        const newComplete = state.complete.filter(skill => skill !== action.name);
        return {
          ...state,
          complete: newComplete,
        };
      } else {
        return {
          ...state,
          complete: [...state.complete, action.name],
        };
      }
    default:
      return state;
  }
}

export default skill;
