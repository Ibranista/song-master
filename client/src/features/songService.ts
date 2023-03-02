import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

// action methods
import { getSongsFailure, getSongsFetch, getSongsSuccess } from "./songSlice";

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

function* songSaga() {
  yield takeEvery("songs/getSongsFetch", getAllSongs);
}

export default songSaga;
