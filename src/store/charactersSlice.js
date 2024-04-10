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
        const initiativeA = a.rolledInitiative + a.bonus;
        const initiativeB = b.rolledInitiative + b.bonus;
        return initiativeB - initiativeA;
      });
    },
    increaseIndex(state) {
      console.log('increase');
      state.currentCharacterIndex = state.currentCharacterIndex + 1;
    },
    resetIndex(state) {
      console.log('reset');
      state.currentCharacterIndex = 0;
    },
  },
});

export const {
  addCharacter,
  removeCharacter,
  sortCharacters,
  increaseIndex,
  resetIndex,
} = charactersSlice.actions;

export default charactersSlice.reducer;
