import { createSlice } from '@reduxjs/toolkit';

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    list: [],
    currentCharacterIndex: 0,
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
        const initiativeA = +a.rolledInitiative + +a.bonus;
        const initiativeB = +b.rolledInitiative + +b.bonus;
        if (initiativeA !== initiativeB) return initiativeB - initiativeA;
        else {
          const rerolledInitiativeA =
            +(Math.floor(Math.random() * 20) + 1) + +a.bonus;
          const rerolledInitiativeB =
            +(Math.floor(Math.random() * 20) + 1) + +b.bonus;
          return rerolledInitiativeA - rerolledInitiativeB;
        }
      });
    },
    increaseIndex(state) {
      state.currentCharacterIndex = state.currentCharacterIndex + 1;
    },
    resetIndex(state) {
      state.currentCharacterIndex = 0;
    },
    addCondition(state, action) {
      const { characterId, condition } = action.payload;
      console.log('Rendred at addCondition from action.payload:');
      console.log('characterId:', characterId);
      console.log('condition:', condition);

      const character = state.list.find((char) => char.id === characterId);
      if (character) {
        console.log('Character found from id:', character);
        const existingConditionIndex = character.conditions.findIndex(
          (cond) => cond.condition === condition.condition
        );
        if (existingConditionIndex !== -1) {
          console.log('Condition found, increase duration');
          // If condition already exists, increase its duration
          character.conditions[existingConditionIndex].duration +=
            condition.duration;
        } else {
          // Otherwise, add new condition
          console.log('Condition not found, adding new condition');
          character.conditions.push(condition);
        }
      }
    },
    // addCondition(state, action) {
    //   const { characterId, condition } = action.payload;
    //   console.log('Rendred at addCondition from action.payload:');
    //   console.log('characterId:', characterId);
    //   console.log('condition:', condition);

    //   const character = state.list.find((char) => char.id === characterId);
    //   if (character) {
    //     console.log('Character found from id:', character);
    //     const existingConditionIndex = character.conditions.findIndex(
    //       (cond) => {
    //         console.log('Looking for existing condition:', cond.condition);
    //         cond.condition === condition.condition;
    //       }
    //     );
    //     if (existingConditionIndex !== -1) {
    //       console.log('Condition found increase duration');
    //       // If condition already exists, increase duration
    //       character.conditions[existingConditionIndex].duration +=
    //         condition.duration;
    //     } else {
    //       // Otherwise, add new condition
    //       console.log('Condition not found');
    //       character.conditions.push(condition);
    //     }
    //   }
    // },
    removeCondition(state, action) {},
    endTurn(state) {
      state.list.forEach((character) => {
        character.conditions.forEach((condition) => {
          console.log('Rendered from endTurn');
          console.log('Duration left:', condition.duration);
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
  increaseIndex,
  resetIndex,
  addCondition,
  removeCondition,
  endTurn,
} = charactersSlice.actions;

export default charactersSlice.reducer;
