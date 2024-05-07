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
      state.list.push(action.payload);
    },
    removeCharacter(state, action) {
      state.list = state.list.filter(
        (character) => character.id !== action.payload
      );
    },
    sortCharacters(state) {
      state.list.sort((a, b) => {
        const initiativeA = +a.initiativeValue + +a.bonus;
        const initiativeB = +b.initiativeValue + +b.bonus;
        if (initiativeA !== initiativeB) return initiativeB - initiativeA;
        else {
          const reinitiativeValueA =
            +(Math.floor(Math.random() * 20) + 1) + +a.bonus;
          const reinitiativeValueB =
            +(Math.floor(Math.random() * 20) + 1) + +b.bonus;
          return reinitiativeValueA - reinitiativeValueB;
        }
      });
    },
    resetCharacters(state) {
      while (state.list.length > 0) state.list.pop();
    },
    increaseIndex(state) {
      state.currentCharacterIndex = state.currentCharacterIndex + 1;
    },
    resetIndex(state) {
      state.currentCharacterIndex = 0;
    },
    setRules(state, action) {
      state.rules = action.payload;
    },
    addCondition(state, action) {
      const { characterId, condition } = action.payload;

      const character = state.list.find((char) => char.id === characterId);
      if (character) {
        const existingConditionIndex = character.conditions.findIndex(
          (cond) => cond.condition === condition.condition
        );
        if (existingConditionIndex !== -1) {
          character.conditions[existingConditionIndex].duration +=
            condition.duration;
        } else {
          character.conditions.push(condition);
        }
      }
    },

    removeCondition(state, action) {
      const { characterId, conditionName } = action.payload;
      const character = state.list.find((char) => char.id === characterId);

      if (character) {
        character.conditions = character.conditions.filter(
          (cond) => cond.condition !== conditionName
        );
      }
    },
    endTurn(state) {
      state.list.forEach((character) => {
        character.conditions.forEach((condition) => {
          condition.duration--;
        });
        character.conditions = character.conditions.filter(
          (condition) => condition.duration > 0
        );
      });
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
