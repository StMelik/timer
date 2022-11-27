import moment from 'moment';
import { ADD_CIRCLE, CLEAR_CIRCLE_LIST, SET_CIRCLE_TIME, STOP_CIRCLE_TIMER } from '../actions/circles';

export const startCircleTimerAction = () => (dispatch) => {
  let tmpTime = 0;

  const timerID = setInterval(() => {
    tmpTime += 1;

    dispatch({
      type: SET_CIRCLE_TIME,
      payload: {
        timerID,
        time: moment.unix(tmpTime).format('mm:ss')
      }
    });
  }, 1000);
};

export const stopCircleTimerAction = () => ({
  type: STOP_CIRCLE_TIMER
});

export const addCircleAction = () => ({
  type: ADD_CIRCLE
});

export const clearCircleListAction = () => ({
  type: CLEAR_CIRCLE_LIST
});
