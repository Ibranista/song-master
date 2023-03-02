import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { useDispatch, useSelector } from "react-redux";
import { getSongsFetch, removeOneSong, editSong } from "../features/songSlice";

type Song = {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
};

type Props = {
  songs: Song[];
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  wrap: wrap;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const ArtistImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const SongDetailsContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const SongTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const SongArtist = styled.h3`
  font-size: 18px;
  margin: 8px 0;
`;

const SongAlbum = styled.p`
  font-size: 16px;
  margin: 8px 0;
`;

const SongGenre = styled.p`
  font-size: 16px;
  margin: 8px 0;
`;

const SongButton = styled.button`
  width: 50%;
`;

const SongList = () => {
  const songs = useSelector((state: any) => state.songs.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch, songs]);

  const removeSong = (id: string) => {
    dispatch(removeOneSong(id));
  };

  const [showEdit, setShowEdit] = useState(false);
  const [editSongId, setEditSongId] = useState("");
  const [songData,setSongData] = useState("");

  const handleEditClick = (id: string, data:any) => {
    setEditSongId(id);
    setShowEdit(true);
    setSongData(data);
  };

  return (
    <>
      <ContainerWrapper>
        {songs.map((song: any) => (
          <Container key={song._id}>
            <ImageContainer>
              <ArtistImage
                src={
                  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBeRXhpZgAASUkqAAgAAAADAA4BAgAbAAAAMgAAAJiCAgAJAAAATQAAABIBAwABAAAAAQAAAAAAAABLYWFiYSBpbiBNZWNjYSBTYXVkaSBBcmFiaWFBdmlhdG9yNzD/7QB2UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAFkcAlAACUF2aWF0b3I3MBwCeAAbS2FhYmEgaW4gTWVjY2EgU2F1ZGkgQXJhYmlhHAJ0AAlBdmlhdG9yNzAcAm4AGEdldHR5IEltYWdlcy9pU3RvY2twaG90bwD/4QUzaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iQXZpYXRvcjcwIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMv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" /* This seems like an incomplete url */
                }
                alt={song.artist}
              />
            </ImageContainer>
            <SongDetailsContainer>
              <SongTitle>{song.title}</SongTitle>
              <SongArtist>{song.artist}</SongArtist>
              <SongAlbum>Album: {song.album}</SongAlbum>
              <SongGenre>Genre: {song.genre}</SongGenre>
              <SongButton onClick={() => removeSong(song._id)}>
                Delete Me
              </SongButton>
              <SongButton onClick={() => handleEditClick(song._id, {
                artist:song.artist,
                title:song.title,
                album:song.album,
                genre:song.genre
              })}>
                Edit Me
              </SongButton>
            </SongDetailsContainer>
          </Container>
        ))}
        {showEdit && <EditSong id={editSongId} />}
      </ContainerWrapper>
    </>
  );
};

export default SongList;

type EditSongProps = {
  id: string;
};

const EditSong = ({ id }: EditSongProps) => {
  const [song, setSong] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(editSong({ id, data: song }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>Edit Song</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={song.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={song.artist}
          onChange={handleChange}
        />
        <input
          type="text"
          name="album"
          placeholder="Album"
          value={song.album}
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={song.genre}
          onChange={handleChange}
        />

        <button type="submit">Update Song</button>
      </form>
    </Container>
  );
};
