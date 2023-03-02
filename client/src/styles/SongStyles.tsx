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
  }, [dispatch,songs]);

  const removeSong = (id: string) => {
    dispatch(removeOneSong(id));
  };

  const [showEdit, setShowEdit] = useState(false);
  const [editSongId, setEditSongId] = useState("");

  const handleEditClick = (id: string) => {
    setEditSongId(id);
    setShowEdit(true);
  };

  return (
    <>
      <ContainerWrapper>
        {songs.map((song: any) => (
          <Container key={song._id}>
            <ImageContainer>
              <ArtistImage
                src={"k=" /* This seems like an incomplete url */}
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
              <SongButton onClick={() => handleEditClick(song._id)}>
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
