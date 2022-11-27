import { SET_EXERCISES_ACTIVE_LIST, SET_ACTIVE_EXERCISE, UPDATE_ACTIVE_LIST, CLEAR_EXERCISES } from '../actions/exercises';

export const setExerxisesActiveListAction = (currentDay) => ({
  type: SET_EXERCISES_ACTIVE_LIST,
  payload: currentDay
});

export const clearExerxisesAction = () => ({
  type: CLEAR_EXERCISES
});

export const setActiveExerxiseAction = () => ({
  type: SET_ACTIVE_EXERCISE
});

export const updateExerxisesActiveListAction = () => (dispatch) => {
  dispatch({ type: UPDATE_ACTIVE_LIST });
  dispatch({ type: SET_ACTIVE_EXERCISE });
};
