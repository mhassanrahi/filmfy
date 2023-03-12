import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    name: '',
    page: 1,
    searchQuery: '',
  },

  reducers: {
    selectGenreOrCategory: (state, action) => {
      console.log({ action, state });
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;
export default genreOrCategory.reducer;
