import { useSelector } from 'react-redux';
import { WORKOUT_COUNT } from '../utils/constants';

const CirclesList = () => {
  const circles = useSelector((state) => state.circles);
  const { active: activeExercise } = useSelector((state) => state.exercises);
  const { started } = useSelector((state) => state.app);

  const doneCircles = circles.list.length;
  const remainsCircles = WORKOUT_COUNT - doneCircles;

  return (
    <div>
      {!!activeExercise && <p className='workout-text'>Упражнение - {activeExercise}</p>}

      <table className='workout-table'>
        <thead>
          <tr className='workout-table__row'>
            <th className='workout-table__cell'>Подход</th>
            <th className='workout-table__cell'>Кол-во</th>
            <th className='workout-table__cell'>Время</th>
          </tr>
        </thead>
        <tbody>
          {circles.list.map(({ time, count, num }, i) => (
            <tr
              key={i}
              className='workout-table__row'
            >
              <td className='workout-table__cell'>{num}</td>
              <td className='workout-table__cell'>{count}</td>
              <td className='workout-table__cell'>{time}</td>
            </tr>
          ))}
          {Array(remainsCircles)
            .fill(1)
            .map((_, i) => {
              const isFirstTr = i === 0;
              const num = ++i + doneCircles;

              return (
                <tr
                  key={i}
                  className='workout-table__row'
                >
                  <td className='workout-table__cell'>{num}</td>
                  <td className='workout-table__cell'>-</td>
                  <td className='workout-table__cell'>{isFirstTr && circles.time ? circles.time : '-'}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {!!remainsCircles && started && <p className='workout-remains'>Осталось {remainsCircles} подх.</p>}

      {/* <button onClick={handleDoneWorkout}>Готово</button> */}
    </div>
  );
};

export default CirclesList;
