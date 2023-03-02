import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

// action methods
import {
  addSong,
  getSongsFailure,
  getSongsFetch,
  getSongsSuccess,
} from "./songSlice";

//getAllSongs url

const baseUrl = "/api/songs";

function* getAllSongs() {
  try {
    const songs: { data: any } = yield call(() =>
      fetch(baseUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
    );
    const formattedSongs: { data: any } = yield songs.json();
    yield put(getSongsSuccess(formattedSongs));
  } catch (error) {
    console.log(error);
  }
}

// add song
const addSongsUrl = "/api/songs/createSong";
function* addSongs(action: any) {
  try {
    const song: { data: any } = yield call(() =>
      axios.post(addSongsUrl, action.payload)
    );
    if (!song) {
      console.log("couldn`t register");
    }
    yield put(addSong(song));
  } catch (error) {
    console.log(error);
  }
}
// remove one song
const removeSongUrl = "/api/songs/";
function* removeSong(action: any) {
  try {
    const song: { data: any } = yield call(() =>
      axios.delete(removeSongUrl + action.payload)
    );
  } catch (error) {
    console.log(error);
  }
}

function* songSaga() {
  yield takeEvery("songs/getSongsFetch", getAllSongs);
  yield takeEvery("songs/addSong", addSongs);
  yield takeEvery("songs/removeOneSong", removeSong);
}

export default songSaga;
