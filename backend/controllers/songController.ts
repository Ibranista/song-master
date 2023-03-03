import { RequestHandler } from "express";
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

  const existingSong = await Song.findOne({ title });
  if (existingSong) {
    res.status(400).json({
      message: "Song already exists!",
    });
  } else {
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
  }
});

// @desc list songs
// @route GET /songs
export const listSongs = asyncHandler(async (req, res) => {
  const songs = await Song.find({});
  res.status(200).send(songs);
});

// @desc update a song
// @route PUT /songs/:id

type UpdateSongHandler = RequestHandler<
  { id: string },
  | { message: string }
  | {
      _id: any;
      title: string;
      artist: string;
      album: string;
      genre: string;
    },
  Partial<{ title: string; artist: string; album: string; genre: string }>,
  never
>;

export const updateSong: UpdateSongHandler = async (req, res) => {
  const songId = req.params.id;
  const updatedSongData = req.body;
  const query = { _id: songId };

  if (!query) {
    res.status(400);
    throw new Error("song not found!");
  }

  const updatedSong = await Song.findOneAndUpdate(query, updatedSongData, {
    new: true,
  });
  if (!updatedSong) {
    res.status(400);
    throw new Error("song not found!");
  }
  res.status(200).json({
    _id: updatedSong._id,
    title: updatedSong.title,
    artist: updatedSong.artist,
    album: updatedSong.album,
    genre: updatedSong.genre,
  });
};

// @desc delete all songs
// @route DELETE /songs/removeAll
export const removeAllSongs = asyncHandler(async (req, res) => {
  await Song.deleteMany({});
  res.status(200).json({
    message: "All songs deleted successfully",
  });
});

//@delete a song
//@route DELETE /songs/:id
export const deleteSong = asyncHandler(async (req, res) => {
  const songId = req.params.id;
  const query = { _id: songId };
  const deletedSong = await Song.findOneAndDelete(query);
  if (!deletedSong) {
    res.status(400);
    throw new Error("song not found!");
  }
  res.status(200).json({
    message: "song deleted successfully",
  });
});

// @desc get total song count
// @route GET /songs/count
export const getTotalSongCount = asyncHandler(async (req, res) => {
  const count = await Song.countDocuments();
  res.json({ number_of_songs: count });
});
