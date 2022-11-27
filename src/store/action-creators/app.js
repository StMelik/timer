import moment from 'moment';

import {
  PAUSE_TRANING,
  PLAY_TRANING,
  PRE_START_TRANING,
  PRE_START_TRANING_DONE,
  SET_CURRENT_TIME,
  START_REST_TIMER,
  START_TRANING,
  STOP_REST_TIMER,
  STOP_TRANING
} from '../actions/app';
import { addCircleAction, clearCircleListAction, startCircleTimerAction, stopCircleTimerAction } from './circles';
import {
  clearExerxisesAction,
  setActiveExerxiseAction,
  setExerxisesActiveListAction,
  updateExerxisesActiveListAction
} from './exercises';

export const setCurrentTimeAction = () => (dispatch) => {
  setInterval(
    () =>
      dispatch({
        type: SET_CURRENT_TIME,
        payload: moment().format('HH:mm:ss')
      }),
    1000
  );
};

export const preStartTraningAction = () => ({
  type: PRE_START_TRANING
});

export const preStartTraningDoneAction = () => ({
  type: PRE_START_TRANING_DONE
});

export const startTraningAction = () => ({
  type: START_TRANING
});

export const stopTraningAction = () => ({
  type: STOP_TRANING
});

export const pauseTraningAction = () => (dispatch, getState) => {
  // const exerciseActiveListLength = getState().exercises.activeList.length;
  // const circlesListLength = getState().circles.list.length;

  // const isStopTraning = exerciseActiveListLength === 1 && circlesListLength === 7;

  // if (isStopTraning) dispatch({ type: STOP_TRANING });

  dispatch({ type: PAUSE_TRANING });
};

export const playTraningAction = () => ({
  type: PLAY_TRANING
});

export const startRestTimerAction = () => (dispatch, getState) => {
  const circlesListLength = getState().circles.list.length;

  dispatch({
    type: START_REST_TIMER,
    payload: circlesListLength
  });
};

export const stopRestTimerAction = () => ({
  type: STOP_REST_TIMER
});

export const handleEndPreStartTimerAction = () => (dispatch) => {
  dispatch(preStartTraningDoneAction()); // preStart => false
  dispatch(startTraningAction()); // started => true
  dispatch(setActiveExerxiseAction()); // выбрать активное упражнение
  dispatch(startCircleTimerAction()); // запустить секундомер подхода
};

export const handleEndCircleTimerAction = () => (dispatch) => {
  dispatch(playTraningAction()); // paused => false
  dispatch(startCircleTimerAction()); // запуск секундомера
};

export const handleEndExerxiseTimerAction = () => (dispatch) => {
  dispatch(playTraningAction()); // paused => false
  dispatch(clearCircleListAction()); // Очистить список подходов
  dispatch(updateExerxisesActiveListAction()); // Обновить активное упражнение
  dispatch(startCircleTimerAction()); // запуск секундомера
};

export const handlePreStartTraningAction = () => (dispatch, getState) => {
  const currentDay = getState().app.currentDay;

  dispatch(preStartTraningAction()); // preStart => true
  dispatch(setExerxisesActiveListAction(currentDay)); // Установить список упражнений текущего дня
  dispatch(startRestTimerAction()); // Запуск таймера
};

const handleEndTraningAction = () => (dispatch) => {
  dispatch(addCircleAction()); // Записать подход
  dispatch(stopCircleTimerAction()); // Сбросить секундомер подхода
  dispatch(clearExerxisesAction()); // Очистить список активных упражнений и активное упражнение
  dispatch(stopTraningAction()); // started => false
};

export const handleEndCircleAction = () => (dispatch, getState) => {
  const timerID = getState().circles.timerID;

  if (!timerID) return;

  const isLastExercise = getState().exercises.activeList.length === 1;
  const isLastCircles = getState().circles.list.length === 7;

  if (isLastExercise && isLastCircles) {
    return dispatch(handleEndTraningAction());
  }

  dispatch(pauseTraningAction()); // paused => true
  dispatch(addCircleAction()); // Записать подход
  dispatch(stopCircleTimerAction()); // Сбросить секундомер подхода
  dispatch(startRestTimerAction()); // Запуск таймера
};
