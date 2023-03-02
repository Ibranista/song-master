import express from "express";
import { createSong, listSongs } from "../controllers/songController";

const router = express.Router();

router.post("/createSong", createSong);
router.get("/", listSongs);
export default router;
