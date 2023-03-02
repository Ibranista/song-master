import express from "express";
import { createSong } from "../controllers/songController";

const router = express.Router();

router.post("/createSong", createSong);
export default router;
