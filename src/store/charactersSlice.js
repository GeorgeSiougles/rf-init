import { createSlice } from '@reduxjs/toolkit';

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    list: [],
    currentCharacterIndex: 0,
    rules: 'dnd',
  },
  reducers: {
    addCharacter(state, action) {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    },
    removeCharacter(state, action) {
      return {
        ...state,
        list: state.list.filter((character) => character.id !== action.payload),
      };
    },
    sortCharacters(state) {
      const sortedList = [...state.list].sort((a, b) => {
        const initiativeA = +a.initiativeValue + +a.bonus;
        const initiativeB = +b.initiativeValue + +b.bonus;

        if (initiativeA !== initiativeB) {
          return initiativeB - initiativeA;
        } else {
          const reinitiativeValueA =
            +(Math.floor(Math.random() * 20) + 1) + +a.bonus;
          const reinitiativeValueB =
            +(Math.floor(Math.random() * 20) + 1) + +b.bonus;
          return reinitiativeValueB - reinitiativeValueA;
        }
      });

      return {
        ...state,
        list: sortedList,
      };
    },
    resetCharacters(state) {
      return {
        ...state,
        list: [],
      };
    },
    increaseIndex(state) {
      return {
        ...state,
        currentCharacterIndex: state.currentCharacterIndex + 1,
      };
    },
    resetIndex(state) {
      return {
        ...state,
        currentCharacterIndex: 0,
      };
    },
    setRules(state, action) {
      return {
        ...state,
        rules: action.payload,
      };
    },
    addCondition(state, action) {
      const { characterId, condition } = action.payload;

      return {
        ...state,
        list: state.list.map((char) => {
          if (char.id === characterId) {
            const existingConditionIndex = char.conditions.findIndex(
              (cond) => cond.condition === condition.condition
            );

            const newConditions = [...char.conditions];
            if (existingConditionIndex !== -1) {
              newConditions[existingConditionIndex] = {
                ...newConditions[existingConditionIndex],
                duration:
                  newConditions[existingConditionIndex].duration +
                  condition.duration,
              };
            } else {
              newConditions.push(condition);
            }

            return {
              ...char,
              conditions: newConditions,
            };
          }
          return char;
        }),
      };
    },

    removeCondition(state, action) {
      const { characterId, conditionName } = action.payload;
      return {
        ...state,
        list: state.list.map((char) => {
          if (char.id === characterId) {
            return {
              ...char,
              conditions: char.conditions.filter(
                (cond) => cond.condition !== conditionName
              ),
            };
          }
          return char;
        }),
      };
    },
    endTurn(state) {
      return {
        ...state,
        list: state.list.map((char) => {
          const newConditions = char.conditions
            .map((condition) => ({
              ...condition,
              duration: condition.duration - 1,
            }))
            .filter((condition) => condition.duration > 0);

          return {
            ...char,
            conditions: newConditions,
          };
        }),
      };
    },
  },
});

export const {
  addCharacter,
  removeCharacter,
  sortCharacters,
  resetCharacters,
  increaseIndex,
  resetIndex,
  setRules,
  addCondition,
  removeCondition,
  endTurn,
} = charactersSlice.actions;

export default charactersSlice.reducer;
