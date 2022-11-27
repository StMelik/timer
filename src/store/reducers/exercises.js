import { v4 as uuidv4 } from 'uuid';
import { SET_EXERCISES_ACTIVE_LIST, UPDATE_ACTIVE_LIST, SET_ACTIVE_EXERCISE, CLEAR_EXERCISES } from '../actions/exercises';

const initialState = {
  list: [
    {
      day: 1, // ПН
      exercises: [
        {
          id: uuidv4(),
          name: 'Классическая становая тяга',
          loads: [
            {
              id: uuidv4(),
              date: '13.11.2022',
              value: '7.5 кг',
              status: 'up'
            }
          ],
          currentLoadValue: 7.5
        },
        {
          id: uuidv4(),
          name: 'Подъем гантелий молотом',
          loads: [],
          currentLoadValue: 7.5
        },
        {
          id: uuidv4(),
          name: 'Румынская становая тяга',
          loads: [],
          currentLoadValue: 7.5
        },
        {
          id: uuidv4(),
          name: 'Тяга к подбородку',
          loads: [],
          currentLoadValue: 7.5
        },
        {
          id: uuidv4(),
          name: 'Боковые разведения с гантелью',
          loads: [],
          currentLoadValue: 7.5
        },
        {
          id: uuidv4(),
          name: 'Пуловер',
          loads: [],
          currentLoadValue: 7.5
        }
      ]
    },
    {
      day: 3, // СР
      exercises: [
        {
          id: uuidv4(),
          name: 'Жим от пола',
          loads: [],
          currentLoadValue: 7.5
        },
        {
          id: uuidv4(),
          name: 'Жим от стены',
          loads: [],
          currentLoadValue: 7.5
        }
      ]
    },
    {
      day: 5, // ПТ
      exercises: [
        {
          id: uuidv4(),
          name: 'Приседания',
          loads: [],
          currentLoadValue: 7.5
        },
        {
          id: uuidv4(),
          name: 'Подъем коленей',
          loads: [],
          currentLoadValue: 7.5
        },
        {
          id: uuidv4(),
          name: 'Скручивания',
          loads: [],
          currentLoadValue: 7.5
        },
        {
          id: uuidv4(),
          name: 'Подъем на носки',
          loads: [],
          currentLoadValue: 7.5
        }
      ]
    }
  ], // список всех упр
  activeList: [], // список упр которые нужно выполнить за тренировку
  active: '' // текущее упражнение
};

export const exercisesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_EXERCISES_ACTIVE_LIST:
      return {
        ...state,
        activeList: state.list.find((item) => item.day === payload).exercises.map((exercise) => exercise.name)
      };

    case UPDATE_ACTIVE_LIST:
      return {
        ...state,
        activeList: state.activeList.slice(1)
      };

    case SET_ACTIVE_EXERCISE:
      return {
        ...state,
        active: state.activeList[0]
      };

    case CLEAR_EXERCISES:
      return {
        ...state,
        activeList: [],
        active: ''
      };

    default:
      return state;
  }
};
