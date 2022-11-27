import {
  STOP_CIRCLE_TIMER,
  ADD_CIRCLE,
  SET_CIRCLE_TIME,
  CLEAR_CIRCLE_LIST
} from '../actions/circles'

const initialState = {
  time: null,
  list: [],
  timerID: null
};

export const circlesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CIRCLE_TIME:
      return {
        ...state,
        time: payload.time,
        timerID: payload.timerID
      };

    case STOP_CIRCLE_TIMER:
      if (state.timerID) {
        clearInterval(state.timerID);
        return {
          ...state,
          time: null,
          timerID: null
        };
      }
      break;

    case ADD_CIRCLE:
      const num = state.list.length + 1;

      return {
        ...state,
        list: [
          ...state.list,
          {
            num,
            count: num * 8,
            time: state.time
          }
        ]
      };

    case CLEAR_CIRCLE_LIST:
      return {
        ...state,
        list: []
      };

    default:
      return state;
  }
};
