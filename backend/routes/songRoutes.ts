import express from "express";
import {
  createSong,
  listSongs,
  updateSong,
  removeAllSongs,
  deleteSong,
  getTotalSongCount,
} from "../controllers/songController";

const router = express.Router();

router.post("/createSong", createSong);
router.get("/", listSongs);
router.put("/:id", updateSong);
router.delete("/removeAll", removeAllSongs);
router.delete("/:id", deleteSong);
router.get("/songCount", getTotalSongCount);
export default router;
