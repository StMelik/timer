import moment from 'moment';
import { REST_TIME } from '../../utils/constants';

import {
  SET_CURRENT_TIME,
  PRE_START_TRANING,
  PRE_START_TRANING_DONE,
  START_TRANING,
  STOP_TRANING,
  PAUSE_TRANING,
  PLAY_TRANING,
  START_REST_TIMER,
  STOP_REST_TIMER
} from '../actions/app';

const initialState = {
  currentTime: moment().format('HH:mm:ss'),
  currentDay: moment().day(), // Текущий день недели
  preStart: false, // запуск таймера на 5 сек
  started: false, // начало тренировки
  paused: false, // отдых между подходами/упражнениями
  restTimer: null // Отсчет до выполнения подхода/упражнения
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_TIME:
      return {
        ...state,
        currentTime: payload
      };

    case PRE_START_TRANING:
      return {
        ...state,
        preStart: true
      };

    case PRE_START_TRANING_DONE:
      return {
        ...state,
        preStart: false
      };

    case START_TRANING:
      return {
        ...state,
        started: true
      };

    case STOP_TRANING:
      return {
        ...state,
        started: false
      };

    case PAUSE_TRANING:
      return {
        ...state,
        paused: true
      };

    case PLAY_TRANING:
      return {
        ...state,
        paused: false
      };

    case START_REST_TIMER:
      let restTimer = null;

      if(state.preStart) {
        restTimer = REST_TIME.START
      } else if (payload < 8) {
        restTimer = REST_TIME.CIRCLE
      } else if (payload === 8) {
        restTimer = REST_TIME.EXERCISE
      }

      return {
        ...state,
        restTimer
      };

    case STOP_REST_TIMER:
      return {
        ...state,
        restTimer: null
      };

    default:
      return state;
  }
};
