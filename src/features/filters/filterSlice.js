import { createSlice } from "@reduxjs/toolkit";

export const StatusFilters = {
  All: "all",
  Active: "active",
  Complete: "complete",
};

const initialState = {
  status: StatusFilters.All,
  colors: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    statusFilterChanged(state, action) {
      state.status = action.payload;
    },
    colorFilterChanged: {
      reducer(state, action) {
        let { color, changeType } = action.payload;
        const { colors } = state;
        console.log(color);
        switch (changeType) {
          case "added": {
            if (!colors.includes(color)) {
              colors.push(color);
            }
            break;
          }
          case "removed": {
            state.colors = colors.filter(
              (existingColor) => existingColor !== color
            );
          }
          // eslint-disable-next-line no-fallthrough
          default:
            return;
        }
      },
      prepare(color, changeType) {
        return {
          payload: { color, changeType },
        };
      },
    },
  },
});

export const { colorFilterChanged, statusFilterChanged } = filtersSlice.actions;
export default filtersSlice.reducer;
