import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SortOption = 'name' | 'count';

interface SortState {
  sortOption: SortOption;
}

const initialState: SortState = {
  sortOption: 'name',
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortOption(state, action: PayloadAction<SortOption>) {
      state.sortOption = action.payload;
    },
  },
});

export const { setSortOption } = sortSlice.actions;

export default sortSlice.reducer;
