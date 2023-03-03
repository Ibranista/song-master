import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSongsFetch } from "../features/songSlice";
function TotalStatistics() {
  const songs = useSelector((state: any) => state.songs.songs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch, songs]);
  let artists = [];
  let albums = [];
  let genres = [];
  for (let i = 0; i < songs.length; i++) {
    let artist = songs[i].artist.toLowerCase().trim();
    if (!artists.includes(artist)) {
      artists.push(artist);
    }
  }
  for (let i = 0; i < songs.length; i++) {
    let album = songs[i].album.toLowerCase().trim();
    if (!albums.includes(album)) {
      albums.push(album);
    }
  }
  for (let i = 0; i < songs.length; i++) {
    let genre = songs[i].genre.toLowerCase().trim();
    if (!genres.includes(genre)) {
      genres.push(genre);
    }
  }
  return (
    <div>
      <h1>Total Statistics</h1>
      <ul>
        <li>Number of All songs: {songs.length}</li>
        <li>Number of All Artists: {artists.length}</li>
        <li>Number of All Albums: {albums.length}</li>
        <li>Number of All Genres: {genres.length}</li>
      </ul>
      <h1>Specific Stats</h1>
      <h1>total number of songs in every genre</h1>
    </div>
  );
}

export default TotalStatistics;
