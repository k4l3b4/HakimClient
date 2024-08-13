import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance'; // Your axios instance

// Thunk to fetch latest episodes
export const fetchLatestEpisodes = createAsyncThunk(
  'latestEpisodes/fetchLatestEpisodes',
  async () => {
    const response = await axiosInstance.get('/latest');
    return response.data;
  }
);

const latestEpisodesSlice = createSlice({
  name: 'latestEpisodes',
  initialState: {
    episodes: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestEpisodes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLatestEpisodes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.episodes = action.payload;
      })
      .addCase(fetchLatestEpisodes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default latestEpisodesSlice.reducer;
