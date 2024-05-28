import { createSlice } from '@reduxjs/toolkit';
import {
  conditionsWithDescription as defaultConditionsWithDescription,
  conditions as defaultConditions,
} from '../utlis/allConditions';

const conditionsSlice = createSlice({
  name: 'allConditions',
  initialState: {
    conditionsWithDescription: defaultConditionsWithDescription,
    conditions: defaultConditions,
  },
  reducers: {
    addCustomCondition(state, action) {
      const conditionExists = state.conditionsWithDescription.some(
        (existingCondition) => existingCondition.name === action.payload.name
      );

      if (conditionExists) {
        return state;
      }
      return {
        ...state,
        conditionsWithDescription: [
          ...state.conditionsWithDescription,
          action.payload,
        ],
      };
    },
  },
});

export const { addCustomCondition } = conditionsSlice.actions;

export default conditionsSlice.reducer;
