"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSongs = exports.createSong = void 0;
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
exports.listSongs = (0, express_async_handler_1.default)(async (req, res) => {
    const songs = await songModel_1.default.find({});
    res.status(200).json({
        songs,
    });
});
