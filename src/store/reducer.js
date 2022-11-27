import { v4 as uuidv4 } from 'uuid';

export const ADD = 'ADD'

const initialState = {
  currentTime: null,
  exerciseList: [
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
            },
            {
              id: uuidv4(),
              date: '06.11.2022',
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
  ]
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 's':
      return state;
    default:
      return state;
  }
};
