import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSongsFetch } from "../features/songSlice";
function TotalStatistics() {
  const songs = useSelector((state: any) => state.songs.songs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch, songs]);
  return (
    <div>
      <h1>Total Statistics</h1>
      <ul>
        <li>Number of All songs: {songs.length}</li>
      </ul>
    </div>
  );
}

export default TotalStatistics;
