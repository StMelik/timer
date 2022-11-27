import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CurrentTime from './components/CurrentTime';
import ExerciseList from './components/ExerciseList';
import Timer from './components/Timer';
import CirclesList from './components/CirclesList';
import {
  handleEndCircleAction,
  handleEndCircleTimerAction,
  handleEndExerxiseTimerAction,
  handleEndPreStartTimerAction,
  setCurrentTimeAction,
} from './store/action-creators/app';

function App() {
  const dispatch = useDispatch();

  const { preStart, restTimer } = useSelector((state) => state.app);
  const { list: circlesList } = useSelector((state) => state.circles);

  // Запуск времени
  useEffect(() => {
    document.addEventListener('keydown', handleEndCircle);
    dispatch(setCurrentTimeAction());
  }, []);

  // Действия после завершения начального таймера
  useEffect(() => {
    if (preStart && !restTimer) {
      dispatch(handleEndPreStartTimerAction());
    }
  }, [restTimer]);

  // Действие после завершения таймера между подходами
  useEffect(() => {
    if (circlesList.length && circlesList.length < 8 && !restTimer) {
      dispatch(handleEndCircleTimerAction());
    }
  }, [restTimer]);

  // Действие после завершения таймера между упражнениями
  useEffect(() => {
    if (circlesList.length === 8 && !restTimer) {
      dispatch(handleEndExerxiseTimerAction());
    }
  }, [restTimer]);

  const handleEndCircle = () => {
    dispatch(handleEndCircleAction());
  };

  return (
    <div className='app'>
      <CurrentTime />
      <div className='wrapper'>
        <CirclesList />
        <Timer />
        <ExerciseList />
      </div>
    </div>
  );
}

export default App;
