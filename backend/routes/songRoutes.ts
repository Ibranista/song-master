import express from "express";
import {
  createSong,
  listSongs,
  updateSong,
} from "../controllers/songController";

const router = express.Router();

router.post("/createSong", createSong);
router.get("/", listSongs);
router.put("/:id", updateSong);
export default router;
