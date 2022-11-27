import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCondition } from '../hooks/useCondition';
import { useTimer } from '../hooks/useTimer';
import { handlePreStartTraningAction } from '../store/action-creators/app';

const Timer = () => {
  const dispatch = useDispatch();
  const timer = useTimer();
  const { restTimer } = useSelector((state) => state.app);
  const { showStartButton, isPreStartedTraning, isCirclePaused, isExercisePaused, isEndedTrening, isStartTraning } =
    useCondition();

  const handlePreStartTraning = () => {
    dispatch(handlePreStartTraningAction());
  };

  useEffect(() => {
    if (restTimer) timer.startTimer(restTimer);
  }, [restTimer]);

  const renderItemList = [
    {
      node: (time) => (
        <div>
          <p>Тренировка начнется через</p>
          <p>{time} сек</p>
        </div>
      ),
      should: isPreStartedTraning
    },
    {
      node: (time) => (
        <div>
          <p>Следущий подход начнется через</p>
          <p>{time} сек</p>
        </div>
      ),
      should: isCirclePaused
    },
    {
      node: (time) => (
        <div>
          <p>Следущее упражнение начнется через</p>
          <p>{time} сек</p>
        </div>
      ),
      should: isExercisePaused
    },
    {
      node: () => <p>Тренировка закончилась</p>,
      should: isEndedTrening
    },
    {
      node: () => <p>Начали</p>,
      should: isStartTraning
    },
    {
      node: () => (
        <button
          className='button-start'
          onClick={handlePreStartTraning}
        >
          Начать тренировку
        </button>
      ),
      should: showStartButton
    }
  ];

  return renderItemList.find((item) => item.should).node(timer.time);
};

export default Timer;
