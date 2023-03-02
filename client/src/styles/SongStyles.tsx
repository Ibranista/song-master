import React from "react";
import styled from "@emotion/styled";

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

const SongList = ({ songs }: Props) => {
  return (
    <>
      <ContainerWrapper>
        {songs.map((song) => (
          <Container key={song._id}>
            <ImageContainer>
              <ArtistImage
                src={
                  "data:image/jpeg;base64,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"
                }
                alt={song.artist}
              />
            </ImageContainer>
            <SongDetailsContainer>
              <SongTitle>{song.title}</SongTitle>
              <SongArtist>{song.artist}</SongArtist>
              <SongAlbum>Album: {song.album}</SongAlbum>
              <SongGenre>Genre: {song.genre}</SongGenre>
            </SongDetailsContainer>
          </Container>
        ))}
      </ContainerWrapper>
    </>
  );
};

export default SongList;
