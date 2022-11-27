import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { stopRestTimerAction } from '../store/action-creators/app';
import { TIMER_TYPES } from '../utils/constants';

export const useTimer = (type) => {
  const dispatch = useDispatch()
  const [time, setTime] = useState(null);
  const timerID = useRef(null);
  
  const isTimerUp = type === TIMER_TYPES.UP;

  const counters = {
    up: (prev) => prev + 1,
    down: (prev) => prev - 1
  };

  useEffect(() => {
    if (!isTimerUp && time === 0) {
      stopTimer();
      dispatch(stopRestTimerAction())
    }
  }, [time]);

  function stopTimer() {
    clearInterval(timerID.current);
    timerID.current = null;
    setTime(null);
  }

  function startTimer(startTime) {
    setTime(startTime);
    if (timerID.current) stopTimer();
    timerID.current = setInterval(() => setTime(isTimerUp ? counters.up : counters.down), 1000);
  }

  return { time, stopTimer, startTimer };
};
