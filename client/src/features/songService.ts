import { call } from "@redux-saga/core/effects";
import axios from "axios";
const baseUrl = "/api/songs";

// get all songs

function* getAllSongs() {
  try {
    const songs: { data: any } = yield call(() =>
      fetch(baseUrl, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
    );
    const formattedSongs: { data: any } = yield songs.json();
  } catch (error) {
    console.log(error);
  }
}
