import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSongsFetch } from "../features/songSlice";
import { NavBarStyle } from "../styles/Box";
function Home() {
  const songs = useSelector((state: any) => state.songs.songs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  return (
    <>
      <NavBarStyle color="#sky-blue" bg="tomato">
        <h1>hello</h1>
        <h1>list of songs</h1>
        {songs.map((song: any) => (
          <div key={song._id}>
            <h2>{song.title}</h2>
          </div>
        ))}
      </NavBarStyle>
    </>
  );
}

export default Home;
