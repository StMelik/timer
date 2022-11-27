import { useSelector } from 'react-redux';

export const useCondition = () => {
  const { preStart, paused, started } = useSelector((state) => state.app);
  const { list: circlesList } = useSelector((state) => state.circles);
  const { activeList: exercisesActiveList } = useSelector((state) => state.exercises);

  const showStartButton = !preStart && !started && !paused && !circlesList.length && !exercisesActiveList.length;
  const isPreStartedTraning = preStart && !started && !paused && !circlesList.length && exercisesActiveList.length;
  const isCirclePaused = !preStart && started && paused && circlesList.length < 8 && exercisesActiveList.length;
  const isExercisePaused = !preStart && started && paused && circlesList.length === 8 && exercisesActiveList.length;
  const isEndedTrening = !preStart && !started && !paused && circlesList.length === 8 && !exercisesActiveList.length;
  const isStartTraning = !preStart && started && !paused && circlesList.length < 8 && exercisesActiveList.length;

  return {
    showStartButton,
    isPreStartedTraning,
    isCirclePaused,
    isExercisePaused,
    isEndedTrening,
    isStartTraning
  };
};
