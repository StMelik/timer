import { useSelector } from 'react-redux';
import cn from 'classnames';

const ExerciseList = () => {
  const { currentDay } = useSelector((state) => state.app);
  const { list: exerciseList, active: activeExercise, activeList } = useSelector((state) => state.exercises);
  const { list: circlesList } = useSelector((state) => state.circles);

  const getTodayExercises = () => {
    return exerciseList.find((item) => item.day === currentDay).exercises;
  };

  const isWorkDay = currentDay === 1 || currentDay === 3 || currentDay === 5;

  return (
    <div className='exercise-list'>
      {isWorkDay ? (
        <table className='exercise-table'>
          <thead>
            <tr className='exercise-table__row'>
              <th className='exercise-table__cell'>№</th>
              <th className='exercise-table__cell'>Название</th>
              <th className='exercise-table__cell'>Нагрузка</th>
              <th className='exercise-table__cell'>Статус</th>
            </tr>
          </thead>
          <tbody>
            {getTodayExercises().map(({ name, currentLoadValue }, i) => (
              <tr
                key={i}
                className={cn('exercise-table__row', {
                  'exercise-table__row_active': activeExercise === name,
                  'exercise-table__row_done':
                    (activeExercise && !activeList.includes(name)) || (!activeList.length && circlesList.length === 8)
                })}
              >
                <td className='exercise-table__cell'>{i + 1}</td>
                <td className='exercise-table__cell'>{name}</td>
                <td className='exercise-table__cell'>{currentLoadValue} кг</td>
                <td className='exercise-table__cell'>
                  <div className='exercise-table__buttons'>
                    <button
                      className='exercise-table__button exercise-table__button_down'
                      // onClick={() => addLoad(LOAD_STATUSES.DOWN)}
                    >
                      -
                    </button>
                    <button
                      className='exercise-table__button exercise-table__button_middle'
                      // onClick={() => addLoad(LOAD_STATUSES.MIDDLE)}
                    >
                      =
                    </button>
                    <button
                      className='exercise-table__button exercise-table__button_up'
                      // onClick={() => addLoad(LOAD_STATUSES.UP)}
                    >
                      +
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Сегодня выходной.</p>
      )}
    </div>
  );
};

export default ExerciseList;
