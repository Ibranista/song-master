import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    isLoading: false,
  },
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
    },
    getSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
    },
    getSongsFailure: (state) => {
      state.isLoading = false;
    },
    addSong: (state, action) => {
      state.songs.push(action.payload);
      console.log('add song: ',action.payload);
      console.log(state.songs);
    },
  },
});

export const { getSongsFetch, getSongsSuccess, getSongsFailure,addSong } =
  songSlice.actions;

export default songSlice.reducer;
