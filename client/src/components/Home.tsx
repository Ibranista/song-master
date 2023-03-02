import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSongsFetch } from "../features/songSlice";
import SongList from "../styles/SongStyles";
function Home() {
  const songs = useSelector((state: any) => state.songs.songs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  return (
    <>
      <h1>list of songs</h1>
      <SongList
        bg="primary"
        color="white"
        artistName="Ibrahim"
        artistImageUrl="url"
        songs={songs}
      >
        <h1>ok</h1>
      </SongList>
    </>
  );
}

export default Home;
