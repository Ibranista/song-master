"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalSongCount = exports.deleteSong = exports.removeAllSongs = exports.updateSong = exports.listSongs = exports.createSong = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const songModel_1 = __importDefault(require("../Models/songModel"));
// @desc create a song
// @route POST songs/createSong
exports.createSong = (0, express_async_handler_1.default)(async (req, res) => {
    const { title, artist, album, genre } = req.body;
    if (!title || !artist || !album || !genre) {
        res.status(400);
        throw new Error("Please fill in all fields");
    }
    const existingSong = await songModel_1.default.findOne({ title });
    if (existingSong) {
        res.status(400).json({
            message: "Song already exists!",
        });
    }
    else {
        const song = await songModel_1.default.create({
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
        }
        else {
            res.status(400);
            throw new Error("Invalid song data");
        }
    }
});
// @desc list songs
// @route GET /songs
exports.listSongs = (0, express_async_handler_1.default)(async (req, res) => {
    const songs = await songModel_1.default.find({});
    res.status(200).send(songs);
});
const updateSong = async (req, res) => {
    const songId = req.params.id;
    const updatedSongData = req.body;
    const query = { _id: songId };
    if (!query) {
        res.status(400);
        throw new Error("song not found!");
    }
    const updatedSong = await songModel_1.default.findOneAndUpdate(query, updatedSongData, {
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
exports.updateSong = updateSong;
// @desc delete all songs
// @route DELETE /songs/removeAll
exports.removeAllSongs = (0, express_async_handler_1.default)(async (req, res) => {
    await songModel_1.default.deleteMany({});
    res.status(200).json({
        message: "All songs deleted successfully",
    });
});
//@delete a song
//@route DELETE /songs/:id
exports.deleteSong = (0, express_async_handler_1.default)(async (req, res) => {
    const songId = req.params.id;
    const query = { _id: songId };
    const deletedSong = await songModel_1.default.findOneAndDelete(query);
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
exports.getTotalSongCount = (0, express_async_handler_1.default)(async (req, res) => {
    const count = await songModel_1.default.countDocuments();
    res.json({ number_of_songs: count });
});
