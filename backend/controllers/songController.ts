import asyncHandler from "express-async-handler";
import Song from "../Models/songModel";

// @desc create a song
// @route POST songs/createSong
export const createSong = asyncHandler(async (req, res) => {
  const { title, artist, album, genre } = req.body;

  if (!title || !artist || !album || !genre) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const songExists = await Song.findOne({ title });
  if (songExists) {
    res.status(400).json({
      message: "Song already exists!",
    });
  }

  const song = await Song.create({
    title,
    artist,
    album,
    genre,
  });

  if (song) {
    res.status(201).json({
      _id: song._id,
      title: song.title,
      artist: song.artist,
      album: song.album,
      genre: song.genre,
    });
  } else {
    res.status(400);
    throw new Error("Invalid song data");
  }
});
